import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import React from "react";

const AppBarStyled = styled(MuiAppBar)(({ theme }) => ({
  position: "fixed",
  zIndex: theme.zIndex.drawer + 1,
}));

export type AppBarProps = {
  onToggleDrawer: () => void;
};

function AppBar({ onToggleDrawer }: AppBarProps) {
  return (
    <AppBarStyled>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onToggleDrawer}
          edge="start"
          sx={{ marginRight: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="h1">
          Scams
        </Typography>
      </Toolbar>
    </AppBarStyled>
  );
}

export default AppBar;
