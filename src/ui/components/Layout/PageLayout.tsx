import { HTMLAttributes, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import { Header } from "@/ui/components/Layout";
import { FallbackErrorBoundary } from "@/ui/components/Error";
import { Spinner } from "@/ui/components/Loader";

export default function PageLayout() {
  return (
    <ErrorBoundary
      fallbackRender={(props) => <FallbackErrorBoundary fullPage {...props} />}
    >
      <PageWrapper>
        <Header />
        <Main>
          <ErrorBoundary FallbackComponent={FallbackErrorBoundary}>
            <Suspense fallback={<Spinner height="fullHeight" />}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </Main>
      </PageWrapper>
    </ErrorBoundary>
  );
}

function PageWrapper({ children }: HTMLAttributes<HTMLDivElement>) {
  return <div className="min-h-dvh">{children}</div>;
}

function Main({ children }: HTMLAttributes<HTMLDivElement>) {
  return <main className="h-full w-full overflow-hidden">{children}</main>;
}
