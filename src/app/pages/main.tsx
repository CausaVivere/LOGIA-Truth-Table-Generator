"use client";
import {
  Button,
  ButtonGroup,
  Checkbox,
  Input,
  Modal,
  Pagination,
  Progress,
  Spinner,
  Text,
  useTheme,
  useToasts,
} from "@geist-ui/core";
import { useEffect, useRef, useState } from "react";
import {
  formatFormula,
  getUniques,
  incrementTruthValues,
  solveAnyFormula,
  solveAnyFormulaTry,
  truthTable,
} from "~/solver";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

let cursorPositionStart: number | undefined;

export default function Main() {
  const [inputFormula, setInputFormula] = useState<string>();
  const [formula, setFormula] = useState<string>();
  const [uniques, setUniques] = useState<string[]>();
  const [values, setValues] = useState<number[]>();
  const [result, setResult] = useState<string>();
  const [invalid, setInvalid] = useState(false);
  const [solve, setSolve] = useState(false);
  const [guide, setGuide] = useState(false);
  const [tableRes, setTableRes] = useState<Array<string[]>>([]);
  const inputElement = useRef<HTMLInputElement>(null);
  const mainElement = useRef<HTMLDivElement>(null);

  const [caseSens, setCase] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const [index, setIndex] = useState<number>(1);
  const [maxProgress, setMaxProgress] = useState<number>(0);
  const theme = useTheme();

  const { setToast } = useToasts();

  //(A→(C→B))∧(¬D∨A)∧C∧D↔D→B

  const worker1 = useRef<Worker>();
  const worker2 = useRef<Worker>();
  const worker3 = useRef<Worker>();
  const worker4 = useRef<Worker>();
  const worker5 = useRef<Worker>();
  const worker6 = useRef<Worker>();
  const worker7 = useRef<Worker>();
  const worker8 = useRef<Worker>();

  const workers = [
    worker1,
    worker2,
    worker3,
    worker4,
    worker5,
    worker6,
    worker7,
    worker8,
  ];

  useEffect(() => {
    if (inputFormula) {
      const timeout = setTimeout(() => {
        setInvalid(false);

        caseSens
          ? setFormula(formatFormula(inputFormula))
          : setFormula(formatFormula(inputFormula.toUpperCase()));
      }, 300);

      return () => clearInterval(timeout);
    }
  }, [inputFormula, caseSens]);

  useEffect(() => {
    if (formula) {
      setUniques([...getUniques(formula)]);
      setMaxProgress(Math.pow(2, getUniques(formula).length));
    }
  }, [solve, caseSens, formula]);

  useEffect(() => {
    setValues([...new Array(uniques?.length).fill(0)]);
  }, [uniques]);

  useEffect(() => {
    console.log(values);
    if (values && inputFormula && uniques)
      try {
        const res = solveAnyFormulaTry(
          caseSens
            ? formatFormula(inputFormula)
            : formatFormula(inputFormula.toUpperCase()),
          values,
          uniques.concat(["0", "1"]),
        );
        setResult(res === 1 ? "True" : "False");
      } catch (err) {
        setInvalid(true);
        if (!solve)
          setToast({
            text: "Invalid formula! Check syntax or forbidden characters.",
            type: "error",
          });
      }
  }, [values]);

  useEffect(() => {
    console.log(tableRes);

    if (tableRes.length > 0) {
      setLoading(false);
      setProgress(maxProgress);
    }
  }, [tableRes]);

  useEffect(() => {
    let numCores = navigator.hardwareConcurrency || 4;
    if (numCores > 1) {
      if (numCores % 2 !== 0) numCores--;
      if (uniques)
        if (Math.pow(2, uniques.length) % numCores !== 0) numCores -= 2;
    }
    for (let i = 0; i < numCores; i++) {
      workers[i]!.current = new Worker(
        new URL("../subworker.ts", import.meta.url),
      );
    }

    let isFinish = 0;
    let result1: string[][] = [];
    let result2: string[][] = [];
    let result3: string[][] = [];
    let result4: string[][] = [];
    let result5: string[][] = [];
    let result6: string[][] = [];
    let result7: string[][] = [];
    let result8: string[][] = [];

    const results = [
      result1,
      result2,
      result3,
      result4,
      result5,
      result6,
      result7,
      result8,
    ];
    if (worker1.current)
      worker1.current.onmessage = (
        event: MessageEvent<string[][] | number>,
      ) => {
        if (typeof event.data === "number") {
          setProgress((last) => last + 1);
        } else {
          results[0] = event.data;
          finished();
          console.log("worker1 ", event.data);
        }
      };
    if (worker2.current)
      worker2.current.onmessage = (event: MessageEvent<string[][]>) => {
        if (typeof event.data === "number") {
          setProgress((last) => last + 1);
        } else {
          results[1] = event.data;

          finished();
          console.log("worker2 ", event.data);
        }
      };
    if (worker3.current)
      worker3.current.onmessage = (event: MessageEvent<string[][]>) => {
        if (typeof event.data === "number") {
          setProgress((last) => last + 1);
        } else {
          results[2] = event.data;
          finished();
          console.log("worker3 ", event.data);
        }
      };
    if (worker4.current)
      worker4.current.onmessage = (event: MessageEvent<string[][]>) => {
        if (typeof event.data === "number") {
          setProgress((last) => last + 1);
        } else {
          results[3] = event.data;

          finished();
          console.log("worker4 ", event.data);
        }
      };

    if (worker5.current)
      worker5.current.onmessage = (
        event: MessageEvent<string[][] | number>,
      ) => {
        if (typeof event.data === "number") {
          setProgress((last) => last + 1);
        } else {
          results[4] = event.data;
          finished();
          console.log("worker5 ", event.data);
        }
      };
    if (worker6.current)
      worker6.current.onmessage = (event: MessageEvent<string[][]>) => {
        if (typeof event.data === "number") {
          setProgress((last) => last + 1);
        } else {
          results[5] = event.data;

          finished();
          console.log("worker6 ", event.data);
        }
      };

    if (worker7.current)
      worker7.current.onmessage = (event: MessageEvent<string[][]>) => {
        if (typeof event.data === "number") {
          setProgress((last) => last + 1);
        } else {
          results[6] = event.data;
          finished();
          console.log("worker7 ", event.data);
        }
      };
    if (worker8.current)
      worker8.current.onmessage = (event: MessageEvent<string[][]>) => {
        if (typeof event.data === "number") {
          setProgress((last) => last + 1);
        } else {
          results[7] = event.data;

          finished();
          console.log("worker8 ", event.data);
        }
      };

    function finished() {
      isFinish++;
      if (isFinish === numCores) {
        let lastRes: string[][] = [];
        for (let i = 0; i < numCores; i++) {
          lastRes = lastRes.concat(results[i]!);
        }
        setTableRes([...lastRes]);
        isFinish = 0;
      }
    }
    console.log("check ", numCores);

    return () => {
      worker1.current?.terminate();
      worker2.current?.terminate();
      worker3.current?.terminate();
      worker4.current?.terminate();
      worker5.current?.terminate();
      worker6.current?.terminate();
      worker7.current?.terminate();
      worker8.current?.terminate();
    };

    // worker.current.onmessage = function (event) {
    //   const resultBuffer = event.data;

    //   // Convert the ArrayBuffer back to the original data structure
    //   const resultView = new Int32Array(resultBuffer);
    //   const result = Array.from(resultView);

    //   // Now you can work with the result.
    //   setTableRes([...result]);
    // };
  }, []);

  useEffect(() => {
    if (loading) {
      if (formula && uniques && !invalid) {
        // worker1.current?.postMessage(formula);
        // worker2.current?.postMessage(formula);
        // worker3.current?.postMessage(formula);
        // worker4.current?.postMessage(formula);
        let numCores = navigator.hardwareConcurrency || 4;
        if (numCores > 1) {
          if (numCores % 2 !== 0) numCores--;
          if (uniques)
            if (Math.pow(2, uniques.length) % numCores !== 0) numCores -= 2;
        }
        const vars = numCores;
        const truthValues: number[] = new Array(uniques.length).fill(0);
        for (let i = 0; i < numCores; i++) {
          if (i !== 0)
            for (
              let i =
                numCores === 2
                  ? truthValues.length - 1
                  : numCores === 4
                  ? truthValues.length - vars / 2
                  : truthValues.length - (vars / 2 - 1);
              i < truthValues.length;
              i++
            ) {
              truthValues[i] = 1 - truthValues[i]!;
              if (truthValues[i] === 1) {
                break;
              }
            }

          let il = i;
          let ir = i + 1;

          let lv = i === 0 ? 0 : i === 1 ? 1 : il / vars;
          let rv = i === 0 ? 0 : ir / vars;

          workers[i]!.current?.postMessage({
            formula,
            vars,
            truthValues,
            i,
            lv,
            rv,
          });
        }
        // worker.current?.postMessage(formula);
        // setTableRes(truthTable(formula, uniques));
      }
    }
  }, [loading]);

  const addSign = (sign: string) => {
    if (inputFormula) {
      if (
        !cursorPositionStart &&
        inputElement.current &&
        inputElement?.current?.selectionStart != null
      )
        cursorPositionStart = inputElement?.current?.selectionStart;
      const newinput =
        inputFormula.slice(0, cursorPositionStart) +
        sign +
        inputFormula.slice(cursorPositionStart);
      setInputFormula(newinput);
      if (cursorPositionStart) cursorPositionStart += sign.length;
    } else {
      setInputFormula(sign);
      if (cursorPositionStart) cursorPositionStart += sign.length;
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center ">
      <div
        className={
          (formula && solve) || tableRes.length > 0 || (invalid && solve)
            ? theme.type === "dark"
              ? "absolute z-0 h-screen w-3/5 rounded-xl bg-black opacity-90 blur-2xl"
              : "absolute z-0 h-screen w-3/5  rounded-xl bg-white outline outline-4 outline-black blur-xl "
            : theme.type === "dark"
            ? "absolute z-0 h-3/5 w-3/5 rounded-xl bg-black opacity-90 blur-2xl"
            : "absolute z-0 h-3/5 w-3/5 rounded-xl bg-white outline outline-4 outline-black"
        }
      />
      <div
        ref={mainElement}
        className="z-10 flex h-screen w-full items-center justify-center overflow-scroll text-xl "
      >
        <div
          className={
            (formula && solve) || tableRes.length > 0 || (invalid && solve)
              ? "flex h-screen w-2/4 flex-col items-center justify-center gap-3 py-20"
              : "flex w-2/4 flex-col items-center justify-center gap-3 py-64"
          }
        >
          {guide ? (
            <div
              className={
                theme.type === "dark"
                  ? "absolute left-4 z-30 rounded-xl bg-black"
                  : "absolute left-4 z-30 rounded-xl bg-white"
              }
            >
              <Table>
                <TableHeader>
                  <TableRow className="mx-2 flex flex-row gap-6">
                    <TableHead>Operator</TableHead>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Meaning</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="mx-2 flex flex-row gap-10 text-center">
                    <TableCell>Negation</TableCell>
                    <TableCell>¬</TableCell>
                    <TableCell className="px-6">NOT</TableCell>
                  </TableRow>
                  <TableRow className="mx-2 flex flex-row gap-6 text-center">
                    <TableCell>Conjunction</TableCell>
                    <TableCell>∧</TableCell>
                    <TableCell className="px-9">AND</TableCell>
                  </TableRow>
                  <TableRow className="mx-2 flex flex-row gap-7 text-center">
                    <TableCell>Disjunction</TableCell>
                    <TableCell>∨</TableCell>
                    <TableCell className="px-9">OR</TableCell>
                  </TableRow>
                  <TableRow className="mx-2 flex flex-row gap-7 text-center">
                    <TableCell>Implication</TableCell>
                    <TableCell>→</TableCell>
                    <TableCell className="px-6">If/Then</TableCell>
                  </TableRow>
                  <TableRow className="mx-2 flex flex-row gap-4 text-center">
                    <TableCell>Biconditional</TableCell>
                    <TableCell>↔</TableCell>
                    <TableCell className="px-5">If and only if</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          ) : null}
          <Text h4 i>
            Enter your formula :
          </Text>
          <div className="flex w-full flex-col items-center justify-center">
            <Input
              ref={inputElement}
              value={inputFormula}
              onChange={(e) => {
                setInputFormula(e.target.value);
              }}
              onKeyUp={(e) => {
                setInputFormula(e.currentTarget.value as string);
                if (inputElement.current?.selectionStart)
                  cursorPositionStart = inputElement?.current?.selectionStart;
              }}
              width="100%"
              crossOrigin={undefined}
              onBlur={() => {
                if (inputElement?.current)
                  cursorPositionStart = inputElement.current.selectionStart!;
              }}
            />

            <ButtonGroup>
              <Button
                auto
                onClick={() => {
                  if (inputElement.current && cursorPositionStart) {
                    inputElement.current.selectionStart =
                      cursorPositionStart + 1;
                  }
                  addSign("∧");
                }}
              >
                ∧
              </Button>
              <Button
                auto
                onClick={() => {
                  if (inputElement.current && cursorPositionStart) {
                    inputElement.current.selectionStart =
                      cursorPositionStart + 1;
                  }
                  addSign("∨");
                }}
              >
                ∨
              </Button>
              <Button
                auto
                onClick={() => {
                  if (inputElement.current && cursorPositionStart) {
                    inputElement.current.selectionStart =
                      cursorPositionStart + 1;
                  }
                  addSign("→");
                }}
              >
                →
              </Button>
              <Button
                auto
                onClick={() => {
                  if (inputElement.current && cursorPositionStart) {
                    inputElement.current.selectionStart =
                      cursorPositionStart + 1;
                  }
                  addSign("↔");
                }}
              >
                ↔
              </Button>
              <Button
                auto
                onClick={() => {
                  if (inputElement.current && cursorPositionStart) {
                    inputElement.current.selectionStart =
                      cursorPositionStart + 1;
                  }
                  addSign("¬");
                }}
              >
                ¬
              </Button>
            </ButtonGroup>
          </div>
          <div className="my-2 flex flex-row gap-4">
            <Checkbox
              checked={false}
              onChange={(e) => {
                setCase(e.target.checked);
              }}
            >
              Case Sensitive Vars
            </Checkbox>
            <Checkbox
              checked={false}
              onChange={(e) => {
                setGuide(e.target.checked);
              }}
            >
              Show Guide
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
                        <div
                          className={
                            theme.type === "dark"
                              ? "py-1 text-base text-white"
                              : "py-1 text-base text-black"
                          }
                        >
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
          <div className="flex flex-row gap-3">
            <div className="h-2">
              <Button
                auto
                ghost={solve}
                type={solve ? "success" : "default"}
                onClick={() => {
                  setSolve((last) => (last === true ? false : true));
                }}
              >
                Solve
              </Button>
            </div>
            <div className="h-2">
              <Button
                auto
                disabled={formula === "" || !formula || invalid}
                onClick={() => {
                  setTableRes([]);

                  setProgress(0);
                  let numCores = navigator.hardwareConcurrency || 4;
                  if (numCores > 1) {
                    if (numCores % 2 !== 0) numCores--;
                    if (uniques)
                      if (Math.pow(2, uniques.length) % numCores !== 0)
                        numCores -= 2;
                  }
                  uniques && formula
                    ? (uniques.length <= numCores &&
                        !(numCores >= 8 && uniques.length >= 8)) ||
                      numCores === 1
                      ? setTableRes(truthTable(formula, uniques))
                      : setLoading(true)
                    : null;
                  console.log(maxProgress);
                }}
              >
                Generate Truth Table
              </Button>
            </div>
          </div>
          {tableRes.length > 0 ? (
            <div
              className={
                theme.type === "dark"
                  ? "my-10 flex h-1/2 w-fit flex-col items-center bg-black"
                  : "my-10 flex h-1/2 w-fit flex-col items-center bg-white"
              }
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    {uniques?.map((letter, i) => (
                      <TableHead key={i}>{letter}</TableHead>
                    ))}
                    <TableHead>
                      {formula
                        ? formula?.length < 40
                          ? formula
                          : "Result"
                        : "Result"}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableRes.map((row, i) =>
                    i >= index - 1 && i < index - 1 + 100 ? (
                      <TableRow key={i}>
                        {row.map((value, i) => (
                          <TableCell className="text-center" key={i}>
                            {value}
                          </TableCell>
                        ))}
                      </TableRow>
                    ) : null,
                  )}
                </TableBody>
              </Table>
              <Pagination
                count={Math.floor(tableRes.length / 100)}
                initialPage={1}
                onChange={(page: number) => {
                  setIndex(page === 1 ? 1 : page * 100);
                  mainElement.current?.scrollTo({
                    top: 150,
                    behavior: "smooth",
                  });
                }}
              />
            </div>
          ) : null}
        </div>
        <Modal disableBackdropClick visible={loading}>
          <div className="flex flex-col items-center justify-center gap-3 ">
            <Spinner />
            <Progress value={progress} max={maxProgress} />
          </div>
        </Modal>
      </div>
    </div>
  );
}
