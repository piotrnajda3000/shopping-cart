import { useMediaQuery } from "react-responsive";

export const useScreenType = () => {
  const isSideBar = useMediaQuery({ minWidth: 490 });

  if (isSideBar) {
    return "sidebar";
  }

  return "bottombar";
};
