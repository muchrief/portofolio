import maintenance from "../assets/maintenance.png"
import logo from "../assets/logo.jpg"
import peoples from "../assets/peoples.jpg"

export type IconType = "maintenance" | "logo" | "peoples";

const icons: { [k in IconType]: string } = {
    maintenance,
    logo,
    peoples,
};

export const useIcon = () => {
  const getIcon = (icontype: IconType) => {
    return icons[icontype];
  }

  return {
    getIcon
  }
}