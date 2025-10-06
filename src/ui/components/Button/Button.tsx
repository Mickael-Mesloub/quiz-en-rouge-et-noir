import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  className = "",
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseStyle =
    "flex cursor-pointer text-main-text border-2 bg-main-text text-main-bg hover:bg-main-bg hover:text-main-text items-center gap-2 rounded-xl px-4 py-3 font-bold text max-[560px]:text-base text-xl focus-visible:outline-2";
  const disabledStyle =
    "disabled:translate-0 disabled:border-disabled-bg disabled:hover:bg-disabled-bg disabled:hover:opacity-100 disabled:bg-disabled-bg disabled:text-disabled-text";

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
