import { twMerge } from "tailwind-merge";

export default function H1({
  children,
  className = "",
  ...restProps
}: React.HTMLProps<HTMLHeadingElement>) {
  const baseStyle = "max-[560px]:text-3xl text-4xl font-bold text-center";
  return (
    <h1 className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </h1>
  );
}
