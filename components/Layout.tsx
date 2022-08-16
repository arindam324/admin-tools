import React, { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <main className="max-w-[1280px] w-full py-6 mx-auto">{children}</main>;
};

export default Layout;
