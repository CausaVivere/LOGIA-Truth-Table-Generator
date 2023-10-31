//@ts-nocheck
addEventListener("message", (event) => {
  console.log("worker 1 init");
  const staticUniques = getUniques(event.data.formula);
  const uniqueLetters = getUniques(event.data.formula).concat(["0", "1"]);
  postMessage(
    truthTableSub(
      event.data.formula,
      staticUniques,
      uniqueLetters,
      event.data.truthValues,
      event.data.vars,
      event.data.i,
      event.data.lv,
      event.data.rv,
    ),
  );
});

function truthTableSub(
  formula: string,
  staticUniques: string[],
  uniqueLetters: string[],
  truthValues: number[],
  vars: number,
  index: number,
  il: number,
  ir: number,
) {
  const numVariables = staticUniques.length;
  const numCombinations = Math.pow(2, numVariables);

  // truthValues[Math.round(truthValues.length - 1)] = 1;
  let lv = il === 1 ? numCombinations / vars : numCombinations * il;
  let rv = ir === 0 ? numCombinations / vars : numCombinations * ir;
  // console.log("worker ", lv, rv, il, ir, vars);
  let tableRes: number[][] = [];
  for (let i = lv; i < rv; i++) {
    tableRes.push([
      ...truthValues,
      solveAnyFormula(formula, truthValues, staticUniques, uniqueLetters),
    ]);
    incrementTruthValues(truthValues);
    postMessage(0);
  }
  return tableRes;
}

function incrementTruthValuesStart(truthValues: number[], vars: number) {
  for (let i = truthValues.length - vars; i < truthValues.length; i++) {
    truthValues[i] = 1 - truthValues[i]!;
    if (truthValues[i] === 1) {
      break;
    }
  }
}

const connectives = ["∧", "∨", "→", "↔", "¬"];
const connectors = "∧∨→↔";

function solveAnyFormula(
  formula: string,
  values: number[],
  staticUniques: string[],
  uniqueLetters: string[],
) {
  const v = makeMap(uniqueLetters, values.concat([0, 1]));

  for (let i = 0; i < formula.length; i++) {
    // console.log(formula, i, formula.length);
    if (formula.length <= 3 && formula[i] !== "(") i = 0;
    if (uniqueLetters.includes(formula[i]))
      if (connectors.includes(formula[i + 1])) {
        if (formula[i + 2] !== "(")
          if (uniqueLetters.includes(formula[i + 2])) {
            if (formula[i - 1] === "¬") {
              if (formula[i - 2] === "(" && formula[i + 3] === ")") {
                formula = formula.replace(
                  formula.substring(i - 2, i + 4),
                  String(
                    subformula(
                      formula[i + 1],
                      neg(v[formula[i]]),
                      v[formula[i + 2]],
                    ),
                  ),
                );
                i = 0;
              } else {
                formula = formula.replace(
                  formula.substring(i - 1, i + 3),
                  String(
                    subformula(
                      formula[i + 1],
                      neg(v[formula[i]]),
                      v[formula[i + 2]],
                    ),
                  ),
                );
                console.log("the case");
                i = 0;
              }
            } else {
              if (formula[i - 1] === "(" && formula[i + 3] === ")") {
                formula = formula.replace(
                  formula.substring(i - 1, i + 4),
                  String(
                    subformula(
                      formula[i + 1],
                      v[formula[i]],
                      v[formula[i + 2]],
                    ),
                  ),
                );
                i = 0;
              } else {
                formula = formula.replace(
                  formula.substring(i, i + 3),
                  String(
                    subformula(
                      formula[i + 1],
                      v[formula[i]],
                      v[formula[i + 2]],
                    ),
                  ),
                );
                i = 0;
              }
            }
          } else if (
            formula[i + 2] === "¬" &&
            uniqueLetters.includes(formula[i + 3])
          ) {
            if (formula[i - 1] === "¬") {
              if (formula[i - 2] === "(" && formula[i + 4] === ")") {
                formula = formula.replace(
                  formula.substring(i - 2, i + 5),
                  String(
                    subformula(
                      formula[i + 1],
                      neg(v[formula[i]]),
                      neg(v[formula[i + 3]]),
                    ),
                  ),
                );
                i = 0;
              } else {
                formula = formula.replace(
                  formula.substring(i - 1, i + 4),
                  String(
                    subformula(
                      formula[i + 1],
                      neg(v[formula[i]]),
                      neg(v[formula[i + 3]]),
                    ),
                  ),
                );
                i = 0;
              }
            } else {
              if (formula[i - 1] === "(" && formula[i + 4] === ")") {
                formula = formula.replace(
                  formula.substring(i - 1, i + 5),
                  String(
                    subformula(
                      formula[i + 1],
                      v[formula[i]],
                      neg(v[formula[i + 3]]),
                    ),
                  ),
                );
                i = 0;
              } else {
                formula = formula.replace(
                  formula.substring(i, i + 4),
                  String(
                    subformula(
                      formula[i + 1],
                      v[formula[i]],
                      neg(v[formula[i + 3]]),
                    ),
                  ),
                );
                i = 0;
              }
            }
          }
      } else if (formula[i - 1] === "(" && formula[i + 1] === ")") {
        formula = formula.replace(formula.substring(i - 1, i + 2), formula[i]);
        i = 0;
      } else if (
        formula[i - 1] === "¬" &&
        formula[i - 2] === "(" &&
        formula[i + 1] === ")"
      ) {
        formula = formula.replace(
          formula.substring(i - 2, i + 2),
          String(neg(v[formula[i]])),
        );
        i = 0;
      }
    if (formula.length === 1) return Number(formula);
  }
  return Number(formula);
}

function makeMap(strings: string[], values: number[]): Record<string, number> {
  if (strings.length !== values.length) {
    throw new Error("Input arrays must have the same size");
  }

  const map: Record<string, number> = {};

  for (let i = 0; i < strings.length; i++) {
    map[strings[i]] = values[i];
  }

  return map;
}

function subformula(sign: string, a: number, b: number) {
  switch (sign) {
    case "∧":
      return conj(a, b);
    case "∨":
      return disj(a, b);
    case "→":
      return impl(a, b);
    case "↔":
      return equiv(a, b);
    default:
      throw "subforumula could not be resolved";
  }
}

function countSubformulas() {
  let count: number = 0;
  for (let i = 0; i < formula.length; i++) {
    if (formula[i] !== "(" && formula[i] !== ")" && formula[i] !== " ") count++;
  }
  return count;
}

function countDistinctVars() {
  const s = findUnique(formula);
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (RegExp(/^\p{L}/, "u").test(s[i])) count++;
  }
  return count;
}

function countOccurences() {
  const s = findUnique(formula);
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (RegExp(/^\p{L}/, "u").test(s[i]))
      result = result.concat(s[i], String(formula.split(s[i]).length - 1));
  }
  return result;
}

function formulaOrder() {
  let count = 0;

  for (let i = 0; i < formula.length; i++) {
    if (connectives.includes(formula[i])) count++;
  }

  return count;
}

function neg(x: number) {
  if (x === 1) return 0;
  else if (x === 0) return 1;
  return -1;
}

function conj(x: number, y: number) {
  if (x === 1 && y === 1) return 1;
  else return 0;
}

function disj(x: number, y: number) {
  if (x === 1 || y === 1) return 1;
  else return 0;
}

function impl(x: number, y: number) {
  if (x === 1 && y === 1) return 1;
  else if (x === 1 && y === 0) return 0;
  else if (x === 0 && y === 1) return 1;
  else if (x === 0 && y === 0) return 1;
  else return -1;
}

function equiv(x: number, y: number) {
  if (x === 1 && y === 1) return 1;
  else if (x === 0 && y === 0) return 1;
  else return 0;
}

// function truthTable(
//   formula: string,
//   staticUniques: string[],
//   uniqueLetters: string[],
// ) {
//   const numVariables = staticUniques.length;
//   const numCombinations = Math.pow(2, numVariables);
//   const truthValues = new Array(numVariables).fill(0);
//   let tableRes = [];
//   for (let i = 0; i < numCombinations; i++) {
//     tableRes.push([
//       ...truthValues,
//       solveAnyFormula(formula, truthValues, staticUniques, uniqueLetters),
//     ]);
//     incrementTruthValues(truthValues);
//   }
//   return tableRes;
// }

function incrementTruthValues(truthValues: number[]) {
  for (let i = 0; i < truthValues.length; i++) {
    truthValues[i] = 1 - truthValues[i];
    if (truthValues[i] === 1) {
      break;
    }
  }
}

// console.log(solveAnyFormula(formula, [1, 1, 1, 1]));

function findUnique(str: string) {
  let uniq = "";

  for (let i = 0; i < str.length; i++) {
    if (uniq.includes(str[i]) === false) {
      uniq += str[i];
    }
  }
  return uniq;
}

function formatFormula(theformula: string) {
  let formula = theformula.replace(/\s/g, "").toUpperCase();
  const letters = formula.match(/[A-Za-z01]/g);
  let indices: number[] = [];
  const uniqueLetters: string[] = [];

  if (letters) {
    let auxformula = formula;
    for (const letter of letters) {
      const index = auxformula.indexOf(letter);
      indices.push(index);

      auxformula = auxformula.replace(auxformula[index], "`");
    }
  }

  if (letters) {
    for (const letter of letters) {
      if (!uniqueLetters.includes(letter)) {
        uniqueLetters.push(letter);
      }
    }
  }

  const duration = indices.length;

  for (let z = 0; z < duration; z++) {
    const letters = formula.match(/[A-Za-z01]/g);
    if (letters) {
      let auxformula = formula;
      indices = [];
      for (const letter of letters) {
        const index = auxformula.indexOf(letter);
        indices.push(index);

        auxformula = auxformula.replace(auxformula[index], "`");
      }
    }
    const i = indices[z];

    if (
      uniqueLetters.includes(formula[i]) &&
      connectors.includes(formula[i + 1]) &&
      uniqueLetters.includes(formula[i + 2])
    ) {
      if (formula[i - 1] === "¬") {
        if (formula[i - 2] !== "(" && formula[i + 3] !== ")") {
          formula = formula.replace(
            formula.substring(i - 1, i + 3),
            "(" +
              formula[i - 1] +
              formula[i] +
              "`" +
              formula.substring(i + 1, i + 3) +
              ")",
          );
        }
      } else {
        {
          if (formula[i - 1] !== "(" && formula[i + 3] !== ")") {
            formula = formula.replace(
              formula.substring(i, i + 3),
              "(" + formula[i] + "`" + formula.substring(i + 1, i + 3) + ")",
            );
          }
        }
      }
    } else if (
      uniqueLetters.includes(formula[i]) &&
      connectors.includes(formula[i + 1]) &&
      formula[i + 2] === "¬" &&
      uniqueLetters.includes(formula[i + 3])
    ) {
      if (formula[i - 1] === "¬") {
        if (formula[i - 2] !== "(" && formula[i + 4] !== ")") {
          formula = formula.replace(
            formula.substring(i - 1, i + 4),
            "(" +
              formula[i - 1] +
              formula[i] +
              "`" +
              formula.substring(i + 1, i + 4) +
              ")",
          );
        }
      } else {
        {
          if (formula[i - 1] !== "(" && formula[i + 4] !== ")") {
            formula = formula.replace(
              formula.substring(i, i + 4),
              "(" + formula[i] + "`" + formula.substring(i + 1, i + 4) + ")",
            );
          }
        }
      }
    } else if (
      uniqueLetters.includes(formula[i]) &&
      connectors.includes(formula[i + 1]) &&
      formula[i + 2] === "("
    ) {
      if (
        formula[i - 1] === "¬" &&
        connectors.includes(formula[i - 2]) &&
        formula[i - 3] === ")"
      ) {
        for (let j = i; j < formula.length; j++) {
          if (formula[j] === ")") {
            formula = formula.replace(
              formula.substring(i - 1, j + 1),
              "(" +
                formula[i - 1] +
                formula[i] +
                "`" +
                formula.substring(i + 1, j + 1) +
                ")",
            );
            break;
          }
        }
      } else if (
        connectors.includes(formula[i - 1]) &&
        formula[i - 2] === ")"
      ) {
        for (let j = i; j < formula.length; j++) {
          if (formula[j] === ")") {
            formula = formula.replace(
              formula.substring(i, j + 1),
              "(" + formula[i] + "`" + formula.substring(i + 1, j + 1) + ")",
            );
            break;
          }
        }
      }
    } else if (uniqueLetters.includes(formula[i])) {
      if (
        formula[i - 1] === "¬" &&
        formula[i - 2] === "(" &&
        formula[i + 1] === ")"
      ) {
        formula = formula.replace(
          formula.substring(i - 2, i + 2),
          formula[i - 1] + formula[i],
        );
      } else if (formula[i - 1] === "(" && formula[i + 1] === ")") {
        formula = formula.replace(formula.substring(i - 1, i + 2), formula[i]);
      }
    }
  }
  return formula.replace(/`/g, "");
}

function getUniques(formula: string) {
  const letters = formula.match(/[A-Za-z01]/g);

  const uniqueLetters: string[] = [];

  if (letters) {
    for (const letter of letters) {
      if (!uniqueLetters.includes(letter)) {
        uniqueLetters.push(letter);
      }
    }
  }

  return uniqueLetters;
}
