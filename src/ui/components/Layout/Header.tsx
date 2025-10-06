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

function HeaderActionBtn({
  className = "",
  ...restProps
}: React.ComponentProps<typeof Button>) {
  const baseStyle = "rounded-full p-2 text-xl hover:border-2 ml-auto";

  return (
    <Button className={twMerge(baseStyle, className)} {...restProps}></Button>
  );
}

function ToggleThemeBtn({
  className = "",
  ...restProps
}: React.ComponentProps<typeof HeaderActionBtn>) {
  const { theme } = useThemeContext();
  const isDarkTheme = theme === "dark";

  return (
    <HeaderActionBtn
      title={`Toggle ${isDarkTheme ? "light" : "dark"} mode`}
      className={className}
      {...restProps}
    >
      {isDarkTheme ? (
        <Sun aria-label="Toggle light mode" />
      ) : (
        <Moon aria-label="Toggle dark mode" />
      )}
    </HeaderActionBtn>
  );
}

function GoToHomeBtn({
  className = "",
  ...restProps
}: React.ComponentProps<typeof HeaderActionBtn>) {
  const baseStyle = "fixed top-4 left-4";

  return (
    <HeaderActionBtn
      className={twMerge(baseStyle, className)}
      {...restProps}
      title="Retour à l'accueil"
    >
      <House aria-label="Go to home screen" />
    </HeaderActionBtn>
  );
}
