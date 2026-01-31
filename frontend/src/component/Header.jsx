import React, { useMemo } from "react";

function Header() {
  const value = useMemo(() => 10, []);
  return <h1>{value}</h1>;
}

export default Header;
