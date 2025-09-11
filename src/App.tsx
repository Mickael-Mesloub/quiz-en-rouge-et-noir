import { ErrorBoundary } from "react-error-boundary"
import { FallbackErrorBoundary } from "@/shared/components/error"
import { AppRoutes } from "@/shared/routes"
import { ThemeContextProvider } from "@/shared/store"
import "./App.css"

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={FallbackErrorBoundary}>
      <ThemeContextProvider>
        <AppRoutes />
      </ThemeContextProvider>
    </ErrorBoundary>
  )
}
