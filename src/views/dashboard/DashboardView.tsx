import { Flex } from "antd";
import { useIcon } from "../../hook/icon";

function DashboardView() {
  const { getIcon } = useIcon();

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        backgroundImage: `url("${getIcon("peoples")}")`,
        minHeight: "100%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{}}>
        <span
          style={{
            fontSize: 72,
            fontWeight: 900,
          }}
        >
          LOREM IPSUM
        </span>
      </div>
    </Flex>
  );
}

export default DashboardView;
