//@ts-nocheck
const connectives = ["∧", "∨", "→", "↔", "¬"];
const connectors = "∧∨→↔";

// (A→(B→C))↔((A∧B)→(¬C)) lab ex
// (A→(C→B))∧(¬D∨A)∧C∧D↔D→B my ex
// (A→(B→c))∧(¬D∨A)∧B↔(D→C)

let formula: string =
  "(A→(B→X))∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧¬B↔(D→C)∧(¬D∨X)∧J↔(D→C)∧(A→(Q→B))∧(¬l∨A)∧W∧D↔D→W∧(¬D∨A)∧U∧D↔D→B∧(¬D∨A)∧C∧D↔D→B∧(¬D∨z)∧X↔(D→C)∧(¬D∨A)∧(¬f∨T)→B↔(F→C)∧(¬w        ∨A)∧(¬D∨A)∧X↔(n→C)∧(¬D∨A)∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧(A→(B→X))∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧¬B↔(D→C)∧(¬D∨X)∧B↔(D→C)→(A→(Q→B))∧(¬D∨A)∧W∧D↔D→W∨(¬D∨A)∧Q∧D↔D→B∧(¬D∨A)∧C∧D↔D→B∧(¬D∨A)→X↔(D→C)∧(¬D∨A)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧(¬D∨A)∧B↔(D→C)∧(¬h∨Z)∨(A→(B→X))∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧¬B↔(D→C)∧(¬D∨X)∨J↔(D→C)∧(A→(Q→B))∧(¬l∨A)∧W∧D↔D→W→(¬D∨A)∧U∧D↔D→B∨(¬D∨A)∧C∧D↔D→B∧(¬D∨z)∧X↔(D→C)∧(¬D∨A)∧(¬f∨T)∧B↔(F→C)∧(¬w        ∨A)∨(¬D∨A)∧X↔(n→C)∧(¬D∨A)∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧(A→(B→X))∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧¬B↔(D→C)∧(¬D∨X)∧B↔(D→C)∧(A→(Q→B))∧(¬D∨A)∧W∧D↔D→W∧(¬D∨A)∧Q∧D↔D→B∧(¬D∨A)∧C∧D↔D→B∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∨(¬D∨A)∧B↔(D→C)∧(¬h∨Z)∧(¬D∨A)∧(¬D∨A)∧(¬D∨A)∧(¬D∨A)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∨X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)";
// "(A→(B→X))∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧¬B↔(D→C)∧(¬D∨X)∧J↔(D→C)∧(A→(Q→B))∧(¬l∨A)∧W∧D↔D→W∧(¬D∨A)∧U∧D↔D→B∧(¬D∨A)∧C∧D↔D→B∧(¬D∨z)∧X↔(D→C)∧(¬D∨A)∧(¬f∨T)→B↔(F→C)∧(¬w        ∨A)∧(¬D∨A)∧X↔(n→C)∧(¬D∨A)∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧(A→(B→X))∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧¬B↔(D→C)∧(¬D∨X)∧B↔(D→C)→(A→(Q→B))∧(¬D∨A)∧W∧D↔D→W∨(¬D∨A)∧Q∧D↔D→B∧(¬D∨A)∧C∧D↔D→B∧(¬D∨A)→X↔(D→C)∧(¬D∨A)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧(¬D∨A)∧B↔(D→C)∧(¬h∨Z)∨(A→(B→X))∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧¬B↔(D→C)∧(¬D∨X)∨J↔(D→C)∧(A→(Q→B))∧(¬l∨A)∧W∧D↔D→W→(¬D∨A)∧U∧D↔D→B∨(¬D∨A)∧C∧D↔D→B∧(¬D∨z)∧X↔(D→C)∧(¬D∨A)∧(¬f∨T)∧B↔(F→C)∧(¬w        ∨A)∨(¬D∨A)∧X↔(n→C)∧(¬D∨A)∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧(A→(B→X))∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧¬B↔(D→C)∧(¬D∨X)∧B↔(D→C)∧(A→(Q→B))∧(¬D∨A)∧W∧D↔D→W∧(¬D∨A)∧Q∧D↔D→B∧(¬D∨A)∧C∧D↔D→B∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∨(¬D∨A)∧B↔(D→C)∧(¬h∨Z)∧(¬D∨A)∧(¬D∨A)∧(¬D∨A)∧(¬D∨A)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∨X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)";
const staticUniques = getUniques(formula);
const uniqueLetters = getUniques(formula).concat(["0", "1"]);
formula = formatFormula(formula);

export function solveAnyFormula(
  formula: string,
  values: number[],
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

export function solveAnyFormulaTry(
  formula: string,
  values: number[],
  uniqueLetters: string[],
) {
  const v = makeMap(uniqueLetters, values.concat([0, 1]));

  for (let i = 0; i < formula.length; i++) {
    // console.log(formula, i, formula.length);
    if (
      formula.length < 3 &&
      connectors.includes(formula[1]) &&
      uniqueLetters.includes(formula[0]) &&
      uniqueLetters.includes(formula[2])
    )
      i = 0;
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
    if (formula.length === 1)
      if (formula === "0" || formula === "1") return Number(formula);
      else throw "Invalid formula!";
  }
  if (formula.length > 1) throw "Invalid formula!";
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
  else throw "ERROR IN NEG BETWEEN" + x;
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
  else throw "ERROR IN IMPL BETWEEN " + x + y;
}

function equiv(x: number, y: number) {
  if (x === 1 && y === 1) return 1;
  else if (x === 0 && y === 0) return 1;
  else return 0;
}

export function truthTable(formula: string, staticUniques: string[]) {
  const numVariables = staticUniques.length;
  const numCombinations = Math.pow(2, numVariables);
  const truthValues = new Array(numVariables).fill(0);
  let tableRes: Array<number[]> = [];
  const uniqueLetters = staticUniques.concat(["0", "1"]);

  for (let i = 0; i < numCombinations; i++) {
    tableRes.push([
      ...truthValues,
      solveAnyFormula(formula, truthValues, uniqueLetters),
    ]);
    incrementTruthValues(truthValues);
  }

  return tableRes;
}

function truthTableSimple(formula: string) {
  const numVariables = staticUniques.length;
  const numCombinations = Math.pow(2, numVariables);
  const truthValues = new Array(numVariables).fill(0);

  console.log("--------");
  for (let i = 0; i < numCombinations; i++) {
    console.log(
      ...truthValues,
      solveAnyFormula(formula, truthValues, uniqueLetters),
    );
    incrementTruthValues(truthValues);
  }
  console.log("--------");
}

export function incrementTruthValues(truthValues: number[]) {
  for (let i = 0; i < truthValues.length; i++) {
    truthValues[i] = 1 - truthValues[i];
    if (truthValues[i] === 1) {
      break;
    }
  }
}

function incrementTruthValuesStart(truthValues: number[], vars: number) {
  for (let i = truthValues.length - vars; i < truthValues.length; i++) {
    truthValues[i] = 1 - truthValues[i];
    if (truthValues[i] === 1) {
      break;
    }
  }
}

// console.log("Subformulas: ", countSubformulas());
// console.log("Distinct propositional variables: ", countDistinctVars());
// console.log("Occurrences for each propositional variable: ", countOccurences());
// console.log("Order of the formula: ", formulaOrder());
// console.log("Truth table:");
// truthTable(formula);

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

// check forwards 2
export function formatFormula(theformula: string) {
  return formatFormulaBasic(
    formatFormulaImp(formatFormulaDis(formatFormulaCon(theformula))),
  );
}

function formatFormulaCon(theformula: string) {
  let formula = theformula.replace(/\s/g, "");
  const uniqueLetters = getUniques(theformula).concat(["0", "1"]);

  const symbols = formula.match(/[∧]/g);
  let indices: number[] = [];

  if (symbols) {
    let auxformula = formula;
    for (const symbol of symbols) {
      const index = auxformula.indexOf(symbol);
      indices.push(index);

      auxformula = auxformula.replace(auxformula[index], "`");
    }
  }

  let changes = 0;
  let theSwitch = false;

  for (let z = 0; z < indices.length; z++) {
    let symbols = formula.match(/[∧]/g);

    let indices: number[] = [];

    if (symbols) {
      let auxformula = formula;
      for (const symbol of symbols) {
        const index = auxformula.indexOf(symbol);
        indices.push(index);

        auxformula = auxformula.replace(auxformula[index], "`");
      }
    }

    let i = indices[z];
    if (
      !(
        ((uniqueLetters.includes(formula[i - 1]) && formula[i - 2] === "(") ||
          (uniqueLetters.includes(formula[i - 1]) &&
            formula[i - 2] === "¬" &&
            formula[i - 3] === "(")) &&
        ((uniqueLetters.includes(formula[i + 1]) && formula[i + 2] === ")") ||
          (formula[i + 1] === "¬" &&
            uniqueLetters.includes(formula[i + 2]) &&
            formula[i + 3] === ")"))
      )
    ) {
      theSwitch = true;
      if (uniqueLetters.includes(formula[i - 1])) {
        if (formula[i - 2] === "¬") {
          if (formula[i - 3] !== "(") {
            formula = formula.replace(
              formula.substring(i - 2, i + 3),
              "(" +
                formula[i - 2] +
                formula[i - 1] +
                "`" +
                formula[i] +
                formula[i + 1] +
                formula[i + 2],
            );
            changes++;

            symbols = formula.match(/[∧]/g);

            indices = [];

            if (symbols) {
              let auxformula = formula;
              for (const symbol of symbols) {
                const index = auxformula.indexOf(symbol);
                indices.push(index);

                auxformula = auxformula.replace(auxformula[index], "`");
              }
            }

            i = indices[z];

            if (uniqueLetters.includes(formula[i + 1])) {
              formula = formula.replace(
                formula.substring(i - 2, i + 2),
                formula[i - 2] +
                  formula[i - 1] +
                  formula[i] +
                  "`" +
                  formula[i + 1] +
                  ")",
              );
              changes--;
            } else if (
              formula[i + 1] === "¬" &&
              uniqueLetters.includes(formula[i + 2])
            ) {
              // if (formula[i + 3] !== ")") {
              formula = formula.replace(
                formula.substring(i - 1, i + 3),
                formula[i - 1] +
                  formula[i] +
                  "`" +
                  formula[i + 1] +
                  formula[i + 2] +
                  ")",
              );
              changes--;
              // }
            }
          }
        } else if (formula[i - 2] !== "(") {
          formula = formula.replace(
            formula.substring(i - 1, i + 1),
            "(" + formula[i - 1] + "`" + formula[i],
          );
          changes++;

          symbols = formula.match(/[∧]/g);

          indices = [];

          if (symbols) {
            let auxformula = formula;
            for (const symbol of symbols) {
              const index = auxformula.indexOf(symbol);
              indices.push(index);

              auxformula = auxformula.replace(auxformula[index], "`");
            }
          }

          i = indices[z];

          if (uniqueLetters.includes(formula[i + 1])) {
            formula = formula.replace(
              formula.substring(i - 2, i + 2),
              formula[i - 2] +
                formula[i - 1] +
                formula[i] +
                "`" +
                formula[i + 1] +
                ")",
            );
            changes--;
          } else if (
            formula[i + 1] === "¬" &&
            uniqueLetters.includes(formula[i + 2])
          ) {
            // if (formula[i + 3] !== ")") {
            formula = formula.replace(
              formula.substring(i - 1, i + 3),
              formula[i - 1] +
                formula[i] +
                "`" +
                formula[i + 1] +
                formula[i + 2] +
                ")",
            );
            changes--;
            // }
          }
        }
      } else if (
        (formula[i - 1] === ")" &&
          !(
            uniqueLetters.includes(formula[i + 1]) && formula[i + 2] === "∧"
          )) ||
        (formula[i - 1] === ")" &&
          !(
            formula[i + 1] === "¬" &&
            uniqueLetters.includes(formula[i + 2]) &&
            formula[i + 3] === "∧"
          ))
      ) {
        let count = 0;
        let insert = false;
        for (let j = i - 2; j >= 0; j--) {
          if (formula[j] === "(" && count === 0) {
            formula = formula.replace(
              formula.substring(j, i),
              "(" + formula.substring(j, i),
            );
            changes++;
            insert = true;
            break;
          } else if (formula[j] === "(" && count > 0) {
            count--;
          } else if (formula[j] === ")") count++;
        }
        if (insert) {
          symbols = formula.match(/[∧]/g);

          indices = [];

          if (symbols) {
            let auxformula = formula;
            for (const symbol of symbols) {
              const index = auxformula.indexOf(symbol);
              indices.push(index);

              auxformula = auxformula.replace(auxformula[index], "`");
            }
          }

          i = indices[z];

          if (
            uniqueLetters.includes(formula[i + 1]) &&
            formula[i + 2] !== "∧"
          ) {
            formula = formula.replace(
              formula.substring(i - 2, i + 2),
              formula[i - 2] +
                formula[i - 1] +
                formula[i] +
                "`" +
                formula[i + 1] +
                ")",
            );
            changes--;
          } else if (
            formula[i + 1] === "¬" &&
            uniqueLetters.includes(formula[i + 2]) &&
            formula[i + 3] !== "∧"
          ) {
            // if (formula[i + 3] !== ")") {
            formula = formula.replace(
              formula.substring(i - 1, i + 3),
              formula[i - 1] +
                formula[i] +
                "`" +
                formula[i + 1] +
                formula[i + 2] +
                ")",
            );
            changes--;
            // }
          }
        }
      }
    }
    if (changes > 0) {
      let lastMod: number = formula.length - 1;
      let count: number | null = null;
      let first = true;
      for (let j = i; j < formula.length; j++) {
        if (count === 0) {
          if (formula[j] === ")") count--;

          formula =
            formula.substring(0, lastMod) +
            ")" +
            formula.substring(lastMod, formula.length);
          changes--;
          break;
        } else if (formula[j] === ")") {
          if (count === null) {
            formula =
              formula.substring(0, j) +
              ")" +
              formula.substring(j, formula.length);
            changes--;
            break;
          }
          count ? count-- : null;
          lastMod = j;
        } else if (formula[j] === "(") {
          if (first) first = false;
          else count ? count++ : (count = 1);
        }
        // add paranthesis after the last closed recorded instead of end of formula
      }
    }
  }
  formula = formula.replace(/`/g, "");
  if (changes !== 0 && theSwitch)
    for (let z = 0; z < indices.length; z++) {
      const symbols = formula.match(/[∧]/g);

      let indices: number[] = [];

      if (symbols) {
        let auxformula = formula;
        for (const symbol of symbols) {
          const index = auxformula.indexOf(symbol);
          indices.push(index);

          auxformula = auxformula.replace(auxformula[index], "`");
        }
      }

      const i = indices[z];
      if (formula[i + 1] === "(") {
        let count = 0;
        for (let j = i + 2; j < formula.length; j++) {
          // console.log(count);
          if (formula[j] === ")" && count === 0) {
            formula = formula.replace(
              formula.substring(i, j),
              formula.substring(i, j) + ")",
            );
            break;
          } else if (formula[j] === ")" && count > 0) {
            count--;
          } else if (formula[j] === "(") {
            count++;
          }
        }
      }

      if (z === indices.length - 1) {
        let count = 0;

        for (let j = 0; j < formula.length; j++) {
          if (j === formula.length - 1) {
            if (formula[j] === ")") count--;
            if (count > 0) {
              while (count >= 0) {
                let lastMod: number = formula.length - 1;
                count = 0;
                for (let j = 0; j < formula.length; j++) {
                  if (j === formula.length - 1) {
                    if (formula[j] === ")") count--;
                    if (count > 0) {
                      formula =
                        formula.substring(0, lastMod) +
                        ")" +
                        formula.substring(lastMod, formula.length);

                      break;
                    }
                  } else if (formula[j] === ")" && count > 0) {
                    count--;
                    lastMod = j;
                  } else if (formula[j] === "(") {
                    count++;
                  }
                  // add paranthesis after the last closed recorded instead of end of formula
                }
                count--;
              }

              break;
            }
          } else if (formula[j] === ")" && count > 0) {
            count--;
          } else if (formula[j] === "(") {
            count++;
          }
          // add paranthesis after the last closed recorded instead of end of formula
        }
      }
    }

  return formula.replace(/`/g, "");
}

function formatFormulaDis(theformula: string) {
  let formula = theformula.replace(/\s/g, "");
  const uniqueLetters = getUniques(theformula).concat(["0", "1"]);
  const symbols = formula.match(/[∨]/g);
  let indices: number[] = [];

  if (symbols) {
    let auxformula = formula;
    for (const symbol of symbols) {
      const index = auxformula.indexOf(symbol);
      indices.push(index);

      auxformula = auxformula.replace(auxformula[index], "`");
    }
  }

  let changes = 0;
  let theSwitch = false;

  for (let z = 0; z < indices.length; z++) {
    let symbols = formula.match(/[∨]/g);

    let indices: number[] = [];

    if (symbols) {
      let auxformula = formula;
      for (const symbol of symbols) {
        const index = auxformula.indexOf(symbol);
        indices.push(index);

        auxformula = auxformula.replace(auxformula[index], "`");
      }
    }

    let i = indices[z];
    if (
      !(
        ((uniqueLetters.includes(formula[i - 1]) && formula[i - 2] === "(") ||
          (uniqueLetters.includes(formula[i - 1]) &&
            formula[i - 2] === "¬" &&
            formula[i - 3] === "(")) &&
        ((uniqueLetters.includes(formula[i + 1]) && formula[i + 2] === ")") ||
          (formula[i + 1] === "¬" &&
            uniqueLetters.includes(formula[i + 2]) &&
            formula[i + 3] === ")"))
      )
    ) {
      theSwitch = true;
      if (uniqueLetters.includes(formula[i - 1])) {
        if (formula[i - 2] === "¬") {
          if (formula[i - 3] !== "(") {
            formula = formula.replace(
              formula.substring(i - 2, i + 3),
              "(" +
                formula[i - 2] +
                formula[i - 1] +
                "`" +
                formula[i] +
                formula[i + 1] +
                formula[i + 2],
            );
            changes++;

            symbols = formula.match(/[∨]/g);

            indices = [];

            if (symbols) {
              let auxformula = formula;
              for (const symbol of symbols) {
                const index = auxformula.indexOf(symbol);
                indices.push(index);

                auxformula = auxformula.replace(auxformula[index], "`");
              }
            }

            i = indices[z];

            if (uniqueLetters.includes(formula[i + 1])) {
              formula = formula.replace(
                formula.substring(i - 2, i + 2),
                formula[i - 2] +
                  formula[i - 1] +
                  formula[i] +
                  "`" +
                  formula[i + 1] +
                  ")",
              );
              changes--;
            } else if (
              formula[i + 1] === "¬" &&
              uniqueLetters.includes(formula[i + 2])
            ) {
              // if (formula[i + 3] !== ")") {
              formula = formula.replace(
                formula.substring(i - 1, i + 3),
                formula[i - 1] +
                  formula[i] +
                  "`" +
                  formula[i + 1] +
                  formula[i + 2] +
                  ")",
              );
              changes--;
              // }
            }
          }
        } else if (formula[i - 2] !== "(") {
          formula = formula.replace(
            formula.substring(i - 1, i + 1),
            "(" + formula[i - 1] + "`" + formula[i],
          );
          changes++;

          symbols = formula.match(/[∨]/g);

          indices = [];

          if (symbols) {
            let auxformula = formula;
            for (const symbol of symbols) {
              const index = auxformula.indexOf(symbol);
              indices.push(index);

              auxformula = auxformula.replace(auxformula[index], "`");
            }
          }

          i = indices[z];

          if (uniqueLetters.includes(formula[i + 1])) {
            formula = formula.replace(
              formula.substring(i - 2, i + 2),
              formula[i - 2] +
                formula[i - 1] +
                formula[i] +
                "`" +
                formula[i + 1] +
                ")",
            );
            changes--;
          } else if (
            formula[i + 1] === "¬" &&
            uniqueLetters.includes(formula[i + 2])
          ) {
            // if (formula[i + 3] !== ")") {
            formula = formula.replace(
              formula.substring(i - 1, i + 3),
              formula[i - 1] +
                formula[i] +
                "`" +
                formula[i + 1] +
                formula[i + 2] +
                ")",
            );
            changes--;
            // }
          }
        }
      } else if (
        (formula[i - 1] === ")" &&
          !(
            uniqueLetters.includes(formula[i + 1]) && formula[i + 2] === "∨"
          )) ||
        (formula[i - 1] === ")" &&
          !(
            formula[i + 1] === "¬" &&
            uniqueLetters.includes(formula[i + 2]) &&
            formula[i + 3] === "∨"
          ))
      ) {
        let count = 0;
        let insert = false;
        for (let j = i - 2; j >= 0; j--) {
          if (formula[j] === "(" && count === 0) {
            formula = formula.replace(
              formula.substring(j, i),
              "(" + formula.substring(j, i),
            );
            changes++;
            insert = true;
            break;
          } else if (formula[j] === "(" && count > 0) {
            count--;
          } else if (formula[j] === ")") count++;
        }
        if (insert) {
          symbols = formula.match(/[∨]/g);

          indices = [];

          if (symbols) {
            let auxformula = formula;
            for (const symbol of symbols) {
              const index = auxformula.indexOf(symbol);
              indices.push(index);

              auxformula = auxformula.replace(auxformula[index], "`");
            }
          }

          i = indices[z];

          if (
            uniqueLetters.includes(formula[i + 1]) &&
            formula[i + 2] !== "∨"
          ) {
            formula = formula.replace(
              formula.substring(i - 2, i + 2),
              formula[i - 2] +
                formula[i - 1] +
                formula[i] +
                "`" +
                formula[i + 1] +
                ")",
            );
            changes--;
          } else if (
            formula[i + 1] === "¬" &&
            uniqueLetters.includes(formula[i + 2]) &&
            formula[i + 3] !== "∨"
          ) {
            // if (formula[i + 3] !== ")") {
            formula = formula.replace(
              formula.substring(i - 1, i + 3),
              formula[i - 1] +
                formula[i] +
                "`" +
                formula[i + 1] +
                formula[i + 2] +
                ")",
            );
            changes--;
            // }
          }
        }
      }
    }
    if (changes > 0) {
      let lastMod: number = formula.length - 1;
      let count: number | null = null;
      let first = true;
      for (let j = i; j < formula.length; j++) {
        if (count === 0) {
          if (formula[j] === ")") count--;

          formula =
            formula.substring(0, lastMod) +
            ")" +
            formula.substring(lastMod, formula.length);
          changes--;
          break;
        } else if (formula[j] === ")") {
          if (count === null) {
            formula =
              formula.substring(0, j) +
              ")" +
              formula.substring(j, formula.length);
            changes--;
            break;
          }
          count ? count-- : null;
          lastMod = j;
        } else if (formula[j] === "(") {
          if (first) first = false;
          else count ? count++ : (count = 1);
        }
        // add paranthesis after the last closed recorded instead of end of formula
      }
    }
  }
  formula = formula.replace(/`/g, "");
  if (changes !== 0 && theSwitch)
    for (let z = 0; z < indices.length; z++) {
      const symbols = formula.match(/[∨]/g);

      let indices: number[] = [];

      if (symbols) {
        let auxformula = formula;
        for (const symbol of symbols) {
          const index = auxformula.indexOf(symbol);
          indices.push(index);

          auxformula = auxformula.replace(auxformula[index], "`");
        }
      }

      const i = indices[z];
      if (formula[i + 1] === "(") {
        let count = 0;
        for (let j = i + 2; j < formula.length; j++) {
          // console.log(count);
          if (formula[j] === ")" && count === 0) {
            formula = formula.replace(
              formula.substring(i, j),
              formula.substring(i, j) + ")",
            );
            break;
          } else if (formula[j] === ")" && count > 0) {
            count--;
          } else if (formula[j] === "(") {
            count++;
          }
        }
      }

      if (z === indices.length - 1) {
        let count = 0;

        for (let j = 0; j < formula.length; j++) {
          if (j === formula.length - 1) {
            if (formula[j] === ")") count--;
            if (count > 0) {
              while (count >= 0) {
                let lastMod: number = formula.length - 1;
                count = 0;
                for (let j = 0; j < formula.length; j++) {
                  if (j === formula.length - 1) {
                    if (formula[j] === ")") count--;
                    if (count > 0) {
                      formula =
                        formula.substring(0, lastMod) +
                        ")" +
                        formula.substring(lastMod, formula.length);

                      break;
                    }
                  } else if (formula[j] === ")" && count > 0) {
                    count--;
                    lastMod = j;
                  } else if (formula[j] === "(") {
                    count++;
                  }
                  // add paranthesis after the last closed recorded instead of end of formula
                }
                count--;
              }

              break;
            }
          } else if (formula[j] === ")" && count > 0) {
            count--;
          } else if (formula[j] === "(") {
            count++;
          }
          // add paranthesis after the last closed recorded instead of end of formula
        }
      }
    }

  return formula.replace(/`/g, "");
}

function formatFormulaImp(theformula: string) {
  let formula = theformula.replace(/\s/g, "");
  const uniqueLetters = getUniques(theformula).concat(["0", "1"]);
  const symbols = formula.match(/[→]/g);
  let indices: number[] = [];

  if (symbols) {
    let auxformula = formula;
    for (const symbol of symbols) {
      const index = auxformula.indexOf(symbol);
      indices.push(index);

      auxformula = auxformula.replace(auxformula[index], "`");
    }
  }

  let changes = 0;
  let theSwitch = false;

  for (let z = 0; z < indices.length; z++) {
    let symbols = formula.match(/[→]/g);

    let indices: number[] = [];

    if (symbols) {
      let auxformula = formula;
      for (const symbol of symbols) {
        const index = auxformula.indexOf(symbol);
        indices.push(index);

        auxformula = auxformula.replace(auxformula[index], "`");
      }
    }

    let i = indices[z];
    if (
      !(
        ((uniqueLetters.includes(formula[i - 1]) && formula[i - 2] === "(") ||
          (uniqueLetters.includes(formula[i - 1]) &&
            formula[i - 2] === "¬" &&
            formula[i - 3] === "(")) &&
        ((uniqueLetters.includes(formula[i + 1]) && formula[i + 2] === ")") ||
          (formula[i + 1] === "¬" &&
            uniqueLetters.includes(formula[i + 2]) &&
            formula[i + 3] === ")"))
      )
    ) {
      theSwitch = true;
      if (uniqueLetters.includes(formula[i - 1])) {
        if (formula[i - 2] === "¬") {
          if (formula[i - 3] !== "(") {
            formula = formula.replace(
              formula.substring(i - 2, i + 3),
              "(" +
                formula[i - 2] +
                formula[i - 1] +
                "`" +
                formula[i] +
                formula[i + 1] +
                formula[i + 2],
            );
            changes++;

            symbols = formula.match(/[→]/g);

            indices = [];

            if (symbols) {
              let auxformula = formula;
              for (const symbol of symbols) {
                const index = auxformula.indexOf(symbol);
                indices.push(index);

                auxformula = auxformula.replace(auxformula[index], "`");
              }
            }

            i = indices[z];

            if (uniqueLetters.includes(formula[i + 1])) {
              formula = formula.replace(
                formula.substring(i - 2, i + 2),
                formula[i - 2] +
                  formula[i - 1] +
                  formula[i] +
                  "`" +
                  formula[i + 1] +
                  ")",
              );
              changes--;
            } else if (
              formula[i + 1] === "¬" &&
              uniqueLetters.includes(formula[i + 2])
            ) {
              // if (formula[i + 3] !== ")") {
              formula = formula.replace(
                formula.substring(i - 1, i + 3),
                formula[i - 1] +
                  formula[i] +
                  "`" +
                  formula[i + 1] +
                  formula[i + 2] +
                  ")",
              );
              changes--;
              // }
            }
          }
        } else if (formula[i - 2] !== "(") {
          formula = formula.replace(
            formula.substring(i - 1, i + 1),
            "(" + formula[i - 1] + "`" + formula[i],
          );
          changes++;

          symbols = formula.match(/[→]/g);

          indices = [];

          if (symbols) {
            let auxformula = formula;
            for (const symbol of symbols) {
              const index = auxformula.indexOf(symbol);
              indices.push(index);

              auxformula = auxformula.replace(auxformula[index], "`");
            }
          }

          i = indices[z];

          if (uniqueLetters.includes(formula[i + 1])) {
            formula = formula.replace(
              formula.substring(i - 2, i + 2),
              formula[i - 2] +
                formula[i - 1] +
                formula[i] +
                "`" +
                formula[i + 1] +
                ")",
            );
            changes--;
          } else if (
            formula[i + 1] === "¬" &&
            uniqueLetters.includes(formula[i + 2])
          ) {
            // if (formula[i + 3] !== ")") {
            formula = formula.replace(
              formula.substring(i - 1, i + 3),
              formula[i - 1] +
                formula[i] +
                "`" +
                formula[i + 1] +
                formula[i + 2] +
                ")",
            );
            changes--;
            // }
          }
        }
      } else if (
        (formula[i - 1] === ")" &&
          !(
            uniqueLetters.includes(formula[i + 1]) && formula[i + 2] === "→"
          )) ||
        (formula[i - 1] === ")" &&
          !(
            formula[i + 1] === "¬" &&
            uniqueLetters.includes(formula[i + 2]) &&
            formula[i + 3] === "→"
          ))
      ) {
        let count = 0;
        let insert = false;
        for (let j = i - 2; j >= 0; j--) {
          if (formula[j] === "(" && count === 0) {
            formula = formula.replace(
              formula.substring(j, i),
              "(" + formula.substring(j, i),
            );
            changes++;
            insert = true;
            break;
          } else if (formula[j] === "(" && count > 0) {
            count--;
          } else if (formula[j] === ")") count++;
        }
        if (insert) {
          symbols = formula.match(/[→]/g);

          indices = [];

          if (symbols) {
            let auxformula = formula;
            for (const symbol of symbols) {
              const index = auxformula.indexOf(symbol);
              indices.push(index);

              auxformula = auxformula.replace(auxformula[index], "`");
            }
          }

          i = indices[z];

          if (
            uniqueLetters.includes(formula[i + 1]) &&
            formula[i + 2] !== "→"
          ) {
            formula = formula.replace(
              formula.substring(i - 2, i + 2),
              formula[i - 2] +
                formula[i - 1] +
                formula[i] +
                "`" +
                formula[i + 1] +
                ")",
            );
            changes--;
          } else if (
            formula[i + 1] === "¬" &&
            uniqueLetters.includes(formula[i + 2]) &&
            formula[i + 3] !== "→"
          ) {
            // if (formula[i + 3] !== ")") {
            formula = formula.replace(
              formula.substring(i - 1, i + 3),
              formula[i - 1] +
                formula[i] +
                "`" +
                formula[i + 1] +
                formula[i + 2] +
                ")",
            );
            changes--;
            // }
          }
        }
      }
    }
    if (changes > 0) {
      let lastMod: number = formula.length - 1;
      let count: number | null = null;
      let first = true;
      for (let j = i; j < formula.length; j++) {
        if (count === 0) {
          if (formula[j] === ")") count--;

          formula =
            formula.substring(0, lastMod) +
            ")" +
            formula.substring(lastMod, formula.length);
          changes--;
          break;
        } else if (formula[j] === ")") {
          if (count === null) {
            formula =
              formula.substring(0, j) +
              ")" +
              formula.substring(j, formula.length);
            changes--;
            break;
          }
          count ? count-- : null;
          lastMod = j;
        } else if (formula[j] === "(") {
          if (first) first = false;
          else count ? count++ : (count = 1);
        }
        // add paranthesis after the last closed recorded instead of end of formula
      }
    }
  }
  formula = formula.replace(/`/g, "");
  if (changes !== 0 && theSwitch)
    for (let z = 0; z < indices.length; z++) {
      const symbols = formula.match(/[→]/g);

      let indices: number[] = [];

      if (symbols) {
        let auxformula = formula;
        for (const symbol of symbols) {
          const index = auxformula.indexOf(symbol);
          indices.push(index);

          auxformula = auxformula.replace(auxformula[index], "`");
        }
      }

      const i = indices[z];
      if (formula[i + 1] === "(") {
        let count = 0;
        for (let j = i + 2; j < formula.length; j++) {
          // console.log(count);
          if (formula[j] === ")" && count === 0) {
            formula = formula.replace(
              formula.substring(i, j),
              formula.substring(i, j) + ")",
            );
            break;
          } else if (formula[j] === ")" && count > 0) {
            count--;
          } else if (formula[j] === "(") {
            count++;
          }
        }
      }

      if (z === indices.length - 1) {
        let count = 0;

        for (let j = 0; j < formula.length; j++) {
          if (j === formula.length - 1) {
            if (formula[j] === ")") count--;
            if (count > 0) {
              while (count >= 0) {
                let lastMod: number = formula.length - 1;
                count = 0;
                for (let j = 0; j < formula.length; j++) {
                  if (j === formula.length - 1) {
                    if (formula[j] === ")") count--;
                    if (count > 0) {
                      formula =
                        formula.substring(0, lastMod) +
                        ")" +
                        formula.substring(lastMod, formula.length);

                      break;
                    }
                  } else if (formula[j] === ")" && count > 0) {
                    count--;
                    lastMod = j;
                  } else if (formula[j] === "(") {
                    count++;
                  }
                  // add paranthesis after the last closed recorded instead of end of formula
                }
                count--;
              }

              break;
            }
          } else if (formula[j] === ")" && count > 0) {
            count--;
          } else if (formula[j] === "(") {
            count++;
          }
          // add paranthesis after the last closed recorded instead of end of formula
        }
      }
    }

  return formula.replace(/`/g, "");
}
function formatFormulaBasic(theformula: string) {
  let formula = theformula.replace(/\s/g, "");

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

export function getUniques(formula: string) {
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
function solveAnyFormulaOld(
  formula: string,
  values: number[],
  staticUniques: string[],
) {
  if (values.length !== staticUniques.length)
    throw "Values mismatch variables count";

  const letters = formula.match(/[A-Za-z01]/g);
  const indices: number[] = [];
  const uniqueLetters: string[] = [];

  if (letters) {
    let auxformula = formula;
    for (const letter of letters) {
      const index = auxformula.indexOf(letter);
      indices.push(index);
      auxformula = auxformula.replace(letter, "`");
    }
  }

  if (letters) {
    for (const letter of letters) {
      if (!uniqueLetters.includes(letter)) {
        uniqueLetters.push(letter);
      }
    }
  }

  function v(letter: string) {
    switch (letter) {
      case "0":
        return 0;
      case "1":
        return 1;
      default:
        return values[staticUniques.indexOf(letter)];
    }
  }

  for (const i of indices) {
    if (
      uniqueLetters.includes(formula[i]) &&
      connectors.includes(formula[i + 1]) &&
      uniqueLetters.includes(formula[i + 2])
    ) {
      if (formula[i - 1] === "¬") {
        if (formula[i - 2] === "(" && formula[i + 3] === ")")
          formula = formula.replace(
            formula.substring(i - 2, i + 4),
            String(
              subformula(formula[i + 1], neg(v(formula[i])), v(formula[i + 2])),
            ),
          );
        else
          formula = formula.replace(
            formula.substring(i - 1, i + 3),
            String(
              subformula(formula[i + 1], neg(v(formula[i])), v(formula[i + 2])),
            ),
          );
      } else {
        if (formula[i - 1] === "(" && formula[i + 3] === ")")
          formula = formula.replace(
            formula.substring(i - 1, i + 4),
            String(
              subformula(formula[i + 1], v(formula[i]), v(formula[i + 2])),
            ),
          );
        else
          formula = formula.replace(
            formula.substring(i, i + 3),
            String(
              subformula(formula[i + 1], v(formula[i]), v(formula[i + 2])),
            ),
          );
      }
    } else if (
      uniqueLetters.includes(formula[i]) &&
      connectors.includes(formula[i + 1]) &&
      formula[i + 2] === "¬" &&
      uniqueLetters.includes(formula[i + 3])
    ) {
      if (formula[i - 1] === "¬") {
        if (formula[i - 2] === "(" && formula[i + 4] === ")")
          formula = formula.replace(
            formula.substring(i - 2, i + 5),
            String(
              subformula(
                formula[i + 1],
                neg(v(formula[i])),
                neg(v(formula[i + 3])),
              ),
            ),
          );
        else
          formula = formula.replace(
            formula.substring(i - 1, i + 4),
            String(
              subformula(
                formula[i + 1],
                neg(v(formula[i])),
                neg(v(formula[i + 3])),
              ),
            ),
          );
      } else {
        if (formula[i - 1] === "(" && formula[i + 4] === ")")
          formula = formula.replace(
            formula.substring(i - 1, i + 5),
            String(
              subformula(formula[i + 1], v(formula[i]), neg(v(formula[i + 3]))),
            ),
          );
        else
          formula = formula.replace(
            formula.substring(i, i + 4),
            String(
              subformula(formula[i + 1], v(formula[i]), neg(v(formula[i + 3]))),
            ),
          );
      }
    } else if (
      formula[i - 1] === "¬" &&
      uniqueLetters.includes(formula[i]) &&
      formula[i - 2] === "(" &&
      formula[i + 1] === ")"
    ) {
      formula = formula.replace(
        formula.substring(i - 2, i + 2),
        String(neg(v(formula[i]))),
      );
    } else if (
      formula[i - 1] === "(" &&
      uniqueLetters.includes(formula[i]) &&
      formula[i + 1] === ")"
    ) {
      formula = formula.replace(formula.substring(i - 1, i + 2), formula[i]);
    }
  }
  if (formula.length <= 1) return Number(formula);
  else return solveAnyFormulaOld(formula, values, staticUniques);
}
