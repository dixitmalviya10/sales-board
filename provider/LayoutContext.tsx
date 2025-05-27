"use client";
// context/LayoutContext.tsx
import { createContext, useContext, useState } from "react";

const LayoutContext = createContext({
  isSidepanelOpen: false,
  toggleSidepanel: () => {},
  closeSidepanel: () => {},
});

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidepanelOpen, setIsSidepanelOpen] = useState(false);

  const toggleSidepanel = () => setIsSidepanelOpen((prev) => !prev);
  const closeSidepanel = () => setIsSidepanelOpen(false);

  return (
    <LayoutContext.Provider
      value={{ isSidepanelOpen, toggleSidepanel, closeSidepanel }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
