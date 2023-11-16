import { useMemo } from "react";
import { Typography, Button } from "antd";
import styled from "@emotion/styled";
import isValidProps from "@emotion/is-prop-valid";
import numeral from "numeral";

type CounterCardLabel = "Dosen" | "Pengurus Inti" | "Divisi";

export type CounterCardProps = {
  counterType?: CounterCardLabel;
  count?: number;
  labelColor?: string;
  labelBgColor?: string;
};

const Counter = styled("div", {
  shouldForwardProp: (props) => isValidProps(props),
})<CounterCardProps>((props) => ({
  padding: "18px",
  border: "1px solid #e5e7eb6e",
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
  backgroundColor: "#fff",

  transition: "200ms ease",
  "& .label": {
    color: props.labelColor || "#0284c7",
    margin: "0 auto",
    backgroundColor: props.labelBgColor || "#f0f9ff",
    padding: "3px 14px",
    borderRadius: "50px",
    fontSize: "calc(1em - 2px)",
  },
  "& button": {
    fontSize: "calc(1em - 2px)",
    color: "#78716c",
  },
  ":hover": {
    boxShadow: props.labelBgColor
      ? `0 0 1px 8px ${props.labelBgColor}`
      : "0 0 1px 8px #f0f9ff",
    border: props.labelColor
      ? `1px solid ${props.labelColor}26`
      : `1px solid #0285c726`,
    cursor: "pointer",
  },
}));

function CounterCard(props: CounterCardProps) {
  const count = useMemo(() => numeral(props.count), [props.count]);

  return (
    <Counter {...props}>
      <Typography.Text className="label" css={{ textAlign: "center" }}>
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
      </Button>
    </Counter>
  );
}

export default CounterCard;
