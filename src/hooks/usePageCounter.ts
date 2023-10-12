import { useState } from "react";

export function usePageCounter(initial: number) {
  const [count, setCount] = useState<number>(initial);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  return { count, setCount, increment, decrement };
}
