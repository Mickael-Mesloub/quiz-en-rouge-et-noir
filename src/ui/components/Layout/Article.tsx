import { twMerge } from "tailwind-merge";

export default function Article({
  children,
  className = "",
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>) {
  const baseStyle = "flex flex-col items-center p-4";

  return (
    <article className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </article>
  );
}
