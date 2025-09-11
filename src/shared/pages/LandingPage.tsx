import { HTMLAttributes } from "react"
import { Badge, Follow, Input, TheBasics } from "@/shared/components"

export default function LandingPage() {
  return (
    <>
      <Heading1>React + TailwindCSS</Heading1>
      <TheBasics />
      <Follow />
      <Badge />
      <Input />
    </>
  )
}

function Heading1({ children }: HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className="text-center text-2xl font-bold">{children}</h1>
}
