import { clsx } from "clsx";
import { createPortal } from "react-dom";

const Drawer = ({ open }: { open: boolean }) => {
  return createPortal(
    <section
      className={clsx([
        "absolute top-0 w-[60vw] h-[100vh] bg-white z-50 rounded-tr-xl rounded-br-xl p-5 shadow-2xl",
        open ? "animate-left-to-right" : "animate-right-to-left",
      ])}
    >
      Hola hermano
    </section>,
    document.getElementById("drawer-portal")!
  );
};

export default Drawer;
