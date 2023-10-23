//@ts-nocheck

const connectives = ["∧", "∨", "→", "↔", "¬"];
const connectors = "∧∨→↔";

// (A→(B→C))↔((A∧B)→(¬C)) lab ex
// (A→(C→B))∧(¬D∨A)∧C∧D↔D→B my ex
// (A→(B→c))∧(¬D∨A)∧B↔(D→C)

let formula: string = "(A→(C→B))∧(¬D∨A)∧C∧D↔D→B";
// "(A→(B→X))∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧¬B↔(D→C)∧(¬D∨X)∧J↔(D→C)∧(A→(Q→B))∧(¬l∨A)∧W∧D↔D→W∧(¬D∨A)∧U∧D↔D→B∧(¬D∨A)∧C∧D↔D→B∧(¬D∨z)∧X↔(D→C)∧(¬D∨A)∧(¬f∨T)∧B↔(F→C)∧(¬w        ∨A)∧(¬D∨A)∧X↔(n→C)∧(¬D∨A)∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧(A→(B→X))∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧¬B↔(D→C)∧(¬D∨X)∧B↔(D→C)∧(A→(Q→B))∧(¬D∨A)∧W∧D↔D→W∧(¬D∨A)∧Q∧D↔D→B∧(¬D∨A)∧C∧D↔D→B∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧(¬D∨A)∧B↔(D→C)∧(¬h∨Z)∨(A→(B→X))∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧¬B↔(D→C)∧(¬D∨X)∧J↔(D→C)∧(A→(Q→B))∧(¬l∨A)∧W∧D↔D→W∧(¬D∨A)∧U∧D↔D→B∧(¬D∨A)∧C∧D↔D→B∧(¬D∨z)∧X↔(D→C)∧(¬D∨A)∧(¬f∨T)∧B↔(F→C)∧(¬w        ∨A)∧(¬D∨A)∧X↔(n→C)∧(¬D∨A)∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧(A→(B→X))∧(¬D∨A)∧B↔(D→C)∧(¬D∨Z)∧¬B↔(D→C)∧(¬D∨X)∧B↔(D→C)∧(A→(Q→B))∧(¬D∨A)∧W∧D↔D→W∧(¬D∨A)∧Q∧D↔D→B∧(¬D∨A)∧C∧D↔D→B∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧(¬D∨A)∧B↔(D→C)∧(¬h∨Z)∧(¬D∨A)∧(¬D∨A)∧(¬D∨A)∧(¬D∨A)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)∧(¬D∨A)∧B↔(F→C)∧(¬X∨A)∧(¬D∨A)∧X↔(D→C)";
formula = formatFormula(formula, false);
const staticUniques = getUniques(formula);

console.log("Formula: ", formula);

export function solveAnyFormula(
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
    }
  }
  if (formula.length <= 1) return Number(formula);
  else return solveAnyFormula(formula, values, staticUniques);
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

function truthTable(formula: string, staticUniques: string[]) {
  const numVariables = staticUniques.length;
  const numCombinations = Math.pow(2, numVariables);
  const truthValues = new Array(numVariables).fill(0);

  console.log("--------");
  for (let i = 0; i < numCombinations; i++) {
    console.log(
      ...truthValues,
      solveAnyFormula(formula, truthValues, staticUniques),
    );
    incrementTruthValues(truthValues);
  }
  console.log("--------");
}

function incrementTruthValues(truthValues: number[]) {
  let i = 0;
  while (i <= truthValues.length - 1) {
    if (truthValues[i] === 0) {
      truthValues[i] = 1;
      break;
    } else {
      truthValues[i] = 0;
      i++;
    }
  }
}

function findUnique(str: string) {
  let uniq = "";

  for (let i = 0; i < str.length; i++) {
    if (uniq.includes(str[i]) === false) {
      uniq += str[i];
    }
  }
  return uniq;
}

export function formatFormula(theformula: string, caseSens: boolean) {
  let formula = caseSens
    ? theformula.replace(/\s/g, "")
    : theformula.replace(/\s/g, "").toUpperCase();

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
