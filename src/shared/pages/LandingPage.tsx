import { HTMLAttributes } from "react";
import { TheBasics } from "@/shared/components";

export default function LandingPage() {
  return (
    <div className="p-8">
      <Heading1>Quiz - En rouge et noir ❤️🖤</Heading1>
      <TheBasics />
    </div>
  );
}

function Heading1({ children }: HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className="text-center text-3xl font-bold">{children}</h1>;
}
