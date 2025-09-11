import { twMerge } from "tailwind-merge"

export default function Text({
  children,
  className = "",
  ...restProps
}: React.HTMLProps<HTMLParagraphElement>) {
  const baseStyle = "leading-relaxed"
  return (
    <p className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </p>
  )
}
