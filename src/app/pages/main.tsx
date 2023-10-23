import { Button, Checkbox, Input, Text } from "@geist-ui/core";
import { useEffect, useState } from "react";
import { formatFormula, getUniques, solveAnyFormula } from "~/solver";

export default function Main() {
  const [inputFormula, setInputFormula] = useState<string>();
  const [formula, setFormula] = useState<string>();
  const [uniques, setUniques] = useState<string[]>();
  const [values, setValues] = useState<number[]>();
  const [result, setResult] = useState<string>();
  const [invalid, setInvalid] = useState(false);
  const [solve, setSolve] = useState(false);
  const [table, setTable] = useState(false);
  const [caseSens, setCase] = useState(false);

  //(A→(C→B))∧(¬D∨A)∧C∧D↔D→B

  useEffect(() => {
    if (inputFormula) {
      const timeout = setTimeout(() => {
        setInvalid(false);
        setFormula(formatFormula(inputFormula, caseSens));
      }, 300);

      return () => clearInterval(timeout);
    }
  }, [inputFormula, caseSens]);

  useEffect(() => {
    if (solve && formula) {
      setUniques([...getUniques(formula)]);
    }
  }, [solve, caseSens, formula]);

  useEffect(() => {
    if (solve) setValues([...new Array(uniques?.length).fill(0)]);
  }, [uniques]);

  useEffect(() => {
    console.log(values);
    if (values && inputFormula && uniques && solve)
      try {
        const res = solveAnyFormula(
          formatFormula(inputFormula, caseSens),
          values,
          uniques,
        );
        setResult(res === 1 ? "True" : "False");
      } catch (err) {
        setInvalid(true);
      }
  }, [values]);

  return (
    <div className="flex w-full items-center justify-center ">
      <div
        className={
          (formula && solve) || (invalid && solve)
            ? "absolute z-0 h-full w-3/5 rounded-xl bg-black opacity-90 blur-2xl"
            : "absolute z-0 h-2/5 w-3/5 rounded-xl bg-black opacity-90 blur-2xl"
        }
      />
      <div className="z-10 flex h-fit w-full items-center justify-center text-xl ">
        <div
          className={
            (formula && solve) || (invalid && solve)
              ? "flex w-2/4 flex-col items-center justify-center gap-3 py-20"
              : "flex w-2/4 flex-col items-center justify-center gap-3 py-64"
          }
        >
          <Text h4 i>
            Enter your formula :
          </Text>
          <Input
            onChange={(e) => setInputFormula(e.target.value)}
            width="100%"
            crossOrigin={undefined}
          />
          <div className="my-2 flex flex-row gap-4">
            <Checkbox
              checked={false}
              onChange={(e) => {
                setSolve(e.target.checked);
              }}
            >
              Solve
            </Checkbox>
            <Checkbox
              checked={false}
              onChange={(e) => {
                setTable(e.target.checked);
              }}
            >
              Truth Table
            </Checkbox>
            <Checkbox
              checked={false}
              onChange={(e) => {
                setCase(e.target.checked);
              }}
            >
              Case Sensitive Vars
            </Checkbox>
          </div>

          {uniques && solve && values ? (
            <div className="flex flex-col items-center">
              <div
                className={
                  formula
                    ? formula?.length > 500
                      ? " break-all text-xs"
                      : formula?.length > 250
                      ? " break-all text-sm"
                      : " break-all"
                    : "break-all"
                }
              >
                {invalid ? (
                  <Text p type="error">
                    Invalid formula! Check syntax or forbidden characters.
                  </Text>
                ) : (
                  <Text p>{formula}</Text>
                )}
              </div>
              <div className="flex flex-row flex-wrap justify-center text-sm">
                {uniques?.map((uniq, i) => (
                  <div
                    className="m-2 flex h-fit flex-row justify-center gap-2"
                    key={i}
                  >
                    <div className="flex flex-row gap-1 text-lg">
                      <Text p>{uniq} </Text>
                      <Text p> :</Text>
                    </div>
                    <div className="py-5">
                      <Button
                        // type="secondary"
                        // ghost
                        auto
                        scale={2 / 3}
                        onClick={() => {
                          values[i] = values[i] === 0 ? 1 : 0;
                          setValues([...values]);
                        }}
                      >
                        <div className="py-1 text-base text-white">
                          {String(values[i])}
                        </div>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {result && solve ? <Text h4>Result: {result}</Text> : null}

          <div className="h-2">
            <Button auto disabled={(!solve && !table) || invalid}>
              Start
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
