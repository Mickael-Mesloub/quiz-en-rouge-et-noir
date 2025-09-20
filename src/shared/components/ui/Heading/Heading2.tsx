import { twMerge } from "tailwind-merge";

export default function Heading2({
  children,
  className = "",
  ...restProps
}: React.HTMLProps<HTMLHeadingElement>) {
  const baseStyle = "text-3xl font-bold";
  return (
    <h2 className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </h2>
  );
}
