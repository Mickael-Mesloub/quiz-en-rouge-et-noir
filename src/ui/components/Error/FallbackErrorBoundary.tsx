import { Button } from "@/ui/components/Button";
import { FallbackProps } from "react-error-boundary";
import { FaArrowRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type FallbackErrorBoundaryProps = FallbackProps & {
  fullPage?: boolean;
  message?: string;
  onReset?: () => void;
};

export default function FallbackError({
  error,
  resetErrorBoundary,
  onReset,
  message = "Quelque chose d'inattendu s'est produit.",
  fullPage = false,
}: FallbackErrorBoundaryProps) {
  const errorMessage =
    error instanceof Error ? error.message : JSON.stringify(error);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (_e) => {
    if (onReset === undefined) {
      /* 
        Run the function passed to the `onReset` props (if any) of the closest `ErrorBoundary` parent component.
        Otherwise, reset and re-render the whole tree inside the `ErrorBoudary` component.
      */
      resetErrorBoundary();
      return;
    }
    onReset();
  };

  return (
    <Wrapper fullPage={fullPage}>
      <Container>
        <LeftContent>
          <Header>Something went wrong</Header>
          <Heading1>
            Oops! <br />
            Une erreur est survenue
          </Heading1>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </LeftContent>
        <RightContent>
          <Text>
            {message} <br />
            Si l&apos;erreur persiste, contacter votre administrateur.
          </Text>
          <RetryButton onClick={handleClick} />
        </RightContent>
      </Container>
    </Wrapper>
  );
}

function Wrapper({
  fullPage = false,
  ...restProps
}: React.HTMLAttributes<HTMLDivElement> & {
  fullPage?: boolean;
}) {
  return (
    <div
      role="alert"
      className={twMerge(
        "grid min-h-screen place-content-center",
        fullPage ? "min-h-screen" : "h-full",
      )}
      {...restProps}
    />
  );
}

function Container(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="container grid w-fit gap-4 md:grid-cols-[1fr_1fr] md:gap-6 lg:gap-16"
      {...props}
    />
  );
}

function LeftContent(props: React.ComponentProps<typeof BaseContent>) {
  return <BaseContent className="justify-center" {...props} />;
}

function RightContent(props: React.ComponentProps<typeof BaseContent>) {
  return (
    <BaseContent
      className="md:justify-center md:before:absolute md:before:top-1/2 md:before:-ml-3 md:before:block md:before:h-[80%] md:before:w-0.5 md:before:-translate-y-1/2 md:before:bg-slate-100 lg:before:-ml-8"
      {...props}
    />
  );
}

function BaseContent({
  className = "",
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge("flex flex-col gap-2 md:gap-4", className)}
      {...restProps}
    />
  );
}

function Header(props: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className="tracking-[.25em]text-error text-sm uppercase md:tracking-[.5em]"
      {...props}
    />
  );
}

function Heading1(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className="font-blacktext-error font-sans text-2xl lg:text-4xl"
      {...props}
    />
  );
}

function ErrorMessage(props: React.ComponentProps<typeof Text>) {
  return <Text className="whitespace-pre-wrap italic" {...props} />;
}

function Text({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLPreElement>) {
  return <pre className={twMerge("text-error", className)} {...restProps} />;
}

function RetryButton(props: React.ComponentProps<typeof Button>) {
  return (
    <Button className="bg-error hover:text-error" {...props}>
      Réessayer
      <span className="mt-1">
        <FaArrowRight
          focusable={false}
          aria-hidden={true}
          className="text-inherit"
        />
      </span>
    </Button>
  );
}
