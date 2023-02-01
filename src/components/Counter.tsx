import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = (): void => setCount((prev: number) => prev + 1);

  return (
    <div className={classes.component}>
      <h1>{count}</h1>
      <button className={classes.button} onClick={increment}>
        +
      </button>
    </div>
  );
};
