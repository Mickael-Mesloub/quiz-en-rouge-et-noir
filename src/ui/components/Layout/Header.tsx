import { twMerge } from "tailwind-merge";
import { useThemeContext } from "@/hooks";
import { Button } from "@/ui/components/Button";
import { HEADER_HEIGHT } from "@/constants/layout";
import { House, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { theme, changeTheme } = useThemeContext();
  const isDarkTheme = theme === "dark";
  const handleSwitchTheme = (_e: React.MouseEvent<HTMLButtonElement>) => {
    changeTheme(isDarkTheme ? "light" : "dark");
  };

  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <StyledHeader>
      <GoToHomeBtn onClick={handleNavigateToHome} />
      <ToggleThemeBtn onClick={handleSwitchTheme}></ToggleThemeBtn>
    </StyledHeader>
  );
}

function StyledHeader({
  children,
  className = "",
  ...restProps
}: React.HTMLProps<HTMLHeadElement>) {
  const baseStyle = "sticky top-0 p-4 text-right";

  return (
    <header
      className={twMerge(baseStyle, className)}
      style={{ height: HEADER_HEIGHT }}
      {...restProps}
    >
      {children}
    </header>
  );
}

function ToggleThemeBtn({
  className = "",
  ...restProps
}: React.ComponentProps<typeof Button>) {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === "dark";
  const baseStyle =
    "text-primary-500 outline-primary hover:bg-primary-500 hover:text-accent-600 focus-visible:bg-primary-500 focus-visible:text-accent-600 rounded-full p-2 text-xl outline-2 transition-colors ml-auto";
  return (
    <Button
      title={`Toggle ${isDarkTheme ? "light" : "dark"} mode`}
      className={twMerge(baseStyle, className)}
      {...restProps}
    >
      {isDarkTheme ? (
        <Sun aria-label="Toggle light mode" />
      ) : (
        <Moon aria-label="Toggle dark mode" />
      )}
    </Button>
  );
}

function GoToHomeBtn({
  className = "",
  ...restProps
}: React.ComponentProps<typeof Button>) {
  const baseStyle =
    "fixed top-4 left-4 text-primary-500 outline-primary hover:bg-primary-500 hover:text-accent-600 focus-visible:bg-primary-500 focus-visible:text-accent-600 rounded-full p-2 text-xl outline-2 transition-colors ml-auto";

  return (
    <Button className={twMerge(baseStyle, className)} {...restProps}>
      <House aria-label="Go to home screen" />
    </Button>
  );
}
