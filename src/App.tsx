import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";

import routes from "./routes/Route";
import themeConfig from "./utils/theme";
import "./index.scss";

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <RouterProvider router={routes} />
    </ConfigProvider>
  );
}

export default App;
