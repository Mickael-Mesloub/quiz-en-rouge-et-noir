import { HTMLAttributes, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import { Header, Main } from "@/ui/components/Layout";
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
  return <div className="h-screen">{children}</div>;
}
