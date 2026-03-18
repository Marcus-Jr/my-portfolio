import { styled } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeMode } from '../../themeContext';

const ToggleWrapper = styled("div")<{ checked: boolean }>(({ theme, checked }) => ({
  display: "flex",
  alignItems: "center",
  width: 80,
  height: 36,
  borderRadius: 18,
  backgroundColor: checked ? '#000000' : '#FFFFFF',
  border: `2px solid ${theme.palette.secondary.main}`,
  cursor: "pointer",
  position: "relative",
  transition: "background-color 0.3s ease",
  padding: "0 4px",
  boxSizing: "border-box",
}));

const ToggleThumb = styled("div")<{ checked: boolean }>(({ theme, checked }) => ({
  width: 28,
  height: 28,
  borderRadius: "50%",
  backgroundColor: theme.palette.secondary.main,
  position: "absolute",
  left: checked ? "calc(100% - 32px)" : "4px",
  transition: "left 0.3s ease",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFFFFF",
  fontSize: 16,
}));

const ToggleLabel = styled("span")<{ checked: boolean }>(({ checked }) => ({
  fontSize: 9,
  fontWeight: "bold",
  color: checked ? '#FFFFFF' : '#000000',
  position: "absolute",
  left: checked ? "8px" : "auto",
  right: checked ? "auto" : "6px",
  transition: "all 0.3s ease",
  userSelect: "none",
  letterSpacing: 0.5,
}));

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useThemeMode();

  return (
    <ToggleWrapper checked={isDarkMode} onClick={toggleTheme}>
      <ToggleLabel checked={isDarkMode}>
        {isDarkMode ? "DARK" : "LIGHT"}
      </ToggleLabel>
      <ToggleThumb checked={isDarkMode}>
        {isDarkMode
          ? <DarkModeIcon sx={{ fontSize: 16 }} />
          : <LightModeIcon sx={{ fontSize: 16 }} />
        }
      </ToggleThumb>
    </ToggleWrapper>
  );
}