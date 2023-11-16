import { Layout } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import AnimatedOutlet from "../components/animated/AnimatedOutlet";
import HeaderMenu from "../components/menu/Menu";
import { useIcon } from "../hook/icon";

const { Content, Header } = Layout;

function LayoutView() {
  const location = useLocation();
  const { getIcon } = useIcon();

  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src={getIcon("logo")}
          alt="HIMA"
          style={{
            height: 48,
          }}
        />
        <HeaderMenu />
      </Header>
      <Content
        style={{
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            overflowY: "scroll",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 75 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 75 }}
              style={{
                height: "100%",
              }}
            >
              <AnimatedOutlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </Content>
    </Layout>
  );
}

export default LayoutView;
