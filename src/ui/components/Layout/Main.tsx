import { HEADER_HEIGHT } from "@/constants/layout";
import { twMerge } from "tailwind-merge";

export default function Main({
  className = "",
  children,
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>) {
  const mainHeight: number = window.innerHeight - HEADER_HEIGHT;
  const mainStyle = { height: mainHeight };
  const baseStyle = "w-full";

  return (
    <main
      style={mainStyle}
      className={twMerge(baseStyle, className)}
      {...restProps}
    >
      {children}
    </main>
  );
}
