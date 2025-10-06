import { ErrorBoundary } from "react-error-boundary";
import { FallbackErrorBoundary } from "@/ui/components/Error";
import { AppRoutes } from "@/routes";
import { ThemeContextProvider } from "@/store";
import "./App.css";

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={FallbackErrorBoundary}>
      <ThemeContextProvider>
        <AppRoutes />
      </ThemeContextProvider>
    </ErrorBoundary>
  );
}
