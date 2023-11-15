import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";

import routes from "./routes/Route";
import "./index.scss";

function App() {
  return (
    <ConfigProvider>
      <RouterProvider router={routes} />
    </ConfigProvider>
  );
}

export default App;
