import { twMerge } from "tailwind-merge";

export default function H2({
  children,
  className = "",
  ...restProps
}: React.HTMLProps<HTMLHeadingElement>) {
  const baseStyle =
    "max-[560px]:text-2xl text-3xl font-bold transition-all duration-300";
  return (
    <h2 className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </h2>
  );
}
