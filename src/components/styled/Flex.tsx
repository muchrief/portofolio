import styled from "@emotion/styled";
import isValidProps from "@emotion/is-prop-valid";
import React from "react";

type FlexProps = {
  direction?: React.CSSProperties["flexDirection"];
  justify?: React.CSSProperties["justifyContent"];
  alignItems?: React.CSSProperties["alignItems"];
  yGap?: number;
  xGap?: number;
};

const Flex = styled("div", {
  shouldForwardProp: (props) => isValidProps(props),
})<FlexProps>((props) => ({
  display: "flex",
  flexDirection: props.direction,
  justifyContent: props.justify,
  alignItems: props.alignItems,
  columnGap: props.yGap,
  rowGap: props.xGap,
}));

export default Flex;
