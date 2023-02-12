'use client';
import { ThemeProvider } from "next-themes";

//provider being client component, the children of provider remain their origin component
function Providers({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <ThemeProvider enableSystem={true}>{children}</ThemeProvider>
  );
}

export default Providers;