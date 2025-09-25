import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  className = "",
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseStyle =
    "flex cursor-pointer items-center gap-2 rounded-xl px-4 py-3 font-bold text transition-all duration-300 max-[560px]:text-base text-xl";
  const disabledStyle =
    "disabled:translate-0 disabled:hover:bg-secondary-100 disabled:hover:opacity-100 disabled:bg-secondary-100 disabled:text-secondary-500";

  return (
    <button
      type="button"
      className={twMerge(baseStyle, disabledStyle, className)}
      {...restProps}
      tabIndex={0}
    >
      {children}
    </button>
  );
}
