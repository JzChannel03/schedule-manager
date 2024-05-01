import { useState } from "react";
import Drawer from "../components/ui/Drawer";

const useDrawer = () => {
  const [open, setOpen] = useState(false);
  const changeOpen = () => {
    console.log("Hiciste clic");
    setOpen(!open);
  };

  const DrawerComponent = ({
    children,
    title,
  }: {
    children: React.ReactNode;
    title: string;
  }) => (
    <Drawer open={open} changeOpen={changeOpen} title={title}>
      {children}
    </Drawer>
  );

  return {
    Drawer: DrawerComponent,
    changeOpen,
    open,
  };
};

export default useDrawer;
