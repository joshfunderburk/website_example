"use client";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "./AppBar";
import AppDrawer, { DrawerHeader } from "./AppDrawer";

const theme = createTheme();

function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const onToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex">
        <AppBar onToggleDrawer={onToggleDrawer} />
        <AppDrawer open={open} onToggleDrawer={onToggleDrawer} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <main>{children}</main>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default AppShell;
