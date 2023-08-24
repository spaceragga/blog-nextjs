import React, { ReactNode, useEffect, useState } from "react";

interface IClientOnlyProps {
  children: ReactNode;
  [key: string]: any;
}

const ClientOnly: React.FC<IClientOnlyProps> = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
};

export default ClientOnly;
