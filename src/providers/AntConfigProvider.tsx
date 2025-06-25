import React from "react";
import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";

type Props = {
  children: React.PropsWithChildren<React.ReactNode>;
};

function AntConfigProvider({ children }: Props) {
  const config: ThemeConfig = {
    token: {
      colorPrimary: "#1E4058", // primary color for all components
      colorLink: "#1E4058", // link color
      // fontFamily: FONTS[fontFamily], // font family
      // Seed Token
    },
    components: {
      Layout: {
        bodyBg: "#fff",
      },
      Table: {
        rowHoverBg: "#f5f5f5",
        headerBg: "#ededed",
        headerColor: "#737373",
        // headerSortHoverBg: "#757575",
        // headerSortHoverBg: "#4692fe",
      },
    },
  };

  return (
    <ConfigProvider theme={config} direction="ltr">
      {children}
    </ConfigProvider>
  );
}

export default AntConfigProvider;
