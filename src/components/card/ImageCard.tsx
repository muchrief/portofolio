import styled from "@emotion/styled";
import isValidProps from "@emotion/is-prop-valid";
import { Typography, Image } from "antd";
import Flex from "../styled/Flex";

type ImageCardLabel = "Ketua" | "Pengurus Inti" | "Divisi";

export type ImageCardProps = {
  imgLabel?: ImageCardLabel;
  labelColor?: string;
  labelBgColor?: string;
};

const Card = styled("div", {
  shouldForwardProp: (props) => isValidProps(props),
})<ImageCardProps>((props) => ({
  borderRadius: "6px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
  backgroundColor: "#fff",
  boxShadow: "8px 8px 10px -4px rgba(0,0,0,0.5)",

  // transition: "200ms ease",
  // ":hover": {
  //   boxShadow: props.labelBgColor
  //     ? `0 0 1px 8px ${props.labelBgColor}`
  //     : "0 0 1px 8px #f0f9ff",
  //   border: props.labelColor
  //     ? `1px solid ${props.labelColor}26`
  //     : `1px solid #0285c726`,
  //   cursor: "pointer",
  // },
}));

function ImageCard(props: ImageCardProps) {
  return (
    <Flex direction="column" yGap={12}>
      <Card {...props}>
        <Image
          alt="Gambar"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          
        />
        {/* <Typography.Text className="label" css={{ textAlign: "center" }}>
        {props.counterType || "Kategori"}
      </Typography.Text>
      <Typography.Title
        css={{
          fontWeight: 900,
          marginTop: "0 !important",
          marginBottom: "0 !important",
          textAlign: "center",
        }}
        level={2}
      >
        {count?.format("0a")}
      </Typography.Title>
      <Button type="link" shape="round">
        Selengkapnya
      </Button> */}
      </Card>
      <Typography.Text className="label" css={{ textAlign: "center" }}>
        {props.imgLabel || "Kategori"}
      </Typography.Text>
    </Flex>
  );
}

export default ImageCard;
