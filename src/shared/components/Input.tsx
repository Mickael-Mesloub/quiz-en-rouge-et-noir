import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { Section } from "@/shared/layouts"

export default function Input() {
  const [email, setEmail] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  return (
    <Section className="grid place-content-center">
      <Field>
        <FieldInput
          id="email"
          type="email"
          value={email}
          onChange={handleInputChange}
        />
        <FieldLabel htmlFor="email">Email</FieldLabel>
      </Field>
    </Section>
  )
}

function Field({
  children,
  className = "",
  ...restProps
}: React.HTMLProps<HTMLDivElement>) {
  const baseStyle = "relative"
  return (
    <div className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </div>
  )
}

function FieldInput({
  className = "",
  ...restProps
}: React.HTMLProps<HTMLInputElement>) {
  const baseStyle =
    "peer outline-secondary focus-visible:outline-accent-500 rounded-md bg-transparent p-4 outline-2 "
  return <input className={twMerge(baseStyle, className)} {...restProps} />
}

function FieldLabel({
  children,
  className = "",
  ...restProps
}: React.HTMLProps<HTMLLabelElement>) {
  const baseStyle =
    "dark:bg-primary-500 bg-white peer-focus:text-accent-500 absolute top-0 left-0 translate-x-2 translate-y-2/3 px-1 text-secondary-500 transition-transform peer-focus-visible:-translate-y-1/2 peer-focus-visible:translate-x-1 z-2"
  return (
    <label className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </label>
  )
}
