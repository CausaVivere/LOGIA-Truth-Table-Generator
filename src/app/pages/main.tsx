import { Input, Text } from "@geist-ui/core";

export default function Main() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="absolute z-0 h-2/5 w-3/5 rounded-xl bg-black opacity-90 blur-2xl" />
      <div className="z-10 flex w-full items-center justify-center text-xl ">
        <div className="flex w-2/4 flex-col items-center justify-center gap-3 py-64 ">
          <Text h4 i>
            Enter your formula :
          </Text>
          <Input width="100%" crossOrigin={undefined} />
        </div>
      </div>
    </div>
  );
}
