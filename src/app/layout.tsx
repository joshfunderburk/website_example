import { ReactNode } from "react";
import AppShell from "../components/AppShell";

export const metadata = {
  title: "Panda is a metagamer",
  description: "Welcome to Your App!",
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

export default RootLayout;
