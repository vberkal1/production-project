import cls from "./Loader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface LoaderProps {
  className?: string;
  centered?: boolean;
}

const Loader = (props: LoaderProps) => {
  const { className, centered } = props;

  return (
    <div
      className={classNames(cls.loader, { [cls.centered]: centered }, [
        className,
      ])}
    >
      <div className={cls.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export { Loader };
