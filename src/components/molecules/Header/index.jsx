import { MuiAppBar, MuiToolbar, MuiTypography } from "../../atoms";

export default function Header({ headerLogoText }) {
  const displayDesktop = () => {
    return (
      <MuiToolbar>
        <MuiTypography variant="h6" component="h1" align="center" gutterBottom>
          {headerLogoText}
        </MuiTypography>
      </MuiToolbar>
    );
  };

  return (
    <header>
      <MuiAppBar>{displayDesktop()}</MuiAppBar>
    </header>
  );
}
