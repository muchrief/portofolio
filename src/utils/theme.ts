import { ThemeConfig, theme } from "antd";

const themeConfig: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  components: {
    Menu: {
      colorPrimary: "red",
      itemHoverColor: "red",
    },
  },
};

export default themeConfig;
