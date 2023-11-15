import { Flex } from "antd";
import { useIcon } from "../hook/icon";

type Props = {
  title?: string;
};

function InProcessView(props: Props) {
  const { getIcon } = useIcon();

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        height: "100%",
      }}
    >
      <Flex vertical>
        <div>
          <h2>Sorry</h2>
        </div>
        <div>
          <p>
            Halaman {props.title ? props.title : "tujuanmu"} sedang dalam proses
            perbaikan.
          </p>
        </div>
      </Flex>
      <img
        src={getIcon("maintenance")}
        alt="Maintenance"
        style={{
          height: 216,
        }}
      />
    </Flex>
  );
}

export default InProcessView;
