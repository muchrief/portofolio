import { Flex, Typography } from "antd";

import ImageCard, { ImageCardProps } from "../../components/card/ImageCard";
import { useIcon } from "../../hook/icon";
import useTitle from "../../hook/useTitle";

const panelUp: ImageCardProps[] = [
  {
    imgLabel: "Ketua",
  },
  {
    imgLabel: "Pengurus Inti",
    labelBgColor: "#fdf4ff",
    labelColor: "#a21caf",
  },
  {
    imgLabel: "Divisi",
    labelBgColor: "#f0fdf4",
    labelColor: "#15803d",
  },
  {
    imgLabel: "Divisi",
    labelBgColor: "#fff1f2",
    labelColor: "#be123c",
  },
];

function DashboardView() {
  const { getIcon } = useIcon();

  useTitle("Dashboard");
  return (
    <>
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
      <div
        className="container"
        style={{
          padding: 24,
        }}
      >
        <Flex justify="center" align="center" vertical gap={10}>
          <Typography.Title>Our Team</Typography.Title>
          <Typography.Text>
            Sunt qui do magna non qui id nisi ipsum. Consectetur tempor ut
            commodo minim ex. Fugiat officia occaecat ad amet quis veniam aute
            et voluptate elit incididunt quis. Laboris voluptate est occaecat
            adipisicing laborum deserunt ad nulla et Lorem ut irure. Consectetur
            aute ex ut pariatur non occaecat. Ex voluptate cupidatat aliquip
            commodo deserunt. In veniam consectetur minim qui dolor sit in nisi
            exercitation laboris amet sint qui.
          </Typography.Text>
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/eRQU82gOuKA"
          ></iframe>
          <Flex gap={10}>
            {panelUp.map((cont, i) => (
              <ImageCard key={cont.imgLabel} {...panelUp[i]} />
            ))}
          </Flex>
        </Flex>
      </div>
    </>
  );
}

export default DashboardView;
