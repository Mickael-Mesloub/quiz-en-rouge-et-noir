import { twMerge } from "tailwind-merge";

export default function Text({
  children,
  className = "",
  ...restProps
}: React.HTMLProps<HTMLParagraphElement>) {
  const baseStyle = "max-[560px]:text-base text-xl transition-all duration-300";
  return (
    <p className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </p>
  );
}
