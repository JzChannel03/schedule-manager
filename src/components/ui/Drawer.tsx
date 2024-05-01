import { Icon } from "@iconify/react/dist/iconify.js";
import { clsx } from "clsx";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Drawer = ({
  open,
  changeOpen,
  title,
  children,
}: {
  open: boolean;
  changeOpen: () => void;
  title: string;
  children: React.ReactNode;
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const manejarClicFuera = (evento: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(evento.target as Node)
    ) {
      console.log("Hiciste clic fuera del elemento");
      changeOpen();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", manejarClicFuera);
    return () => {
      document.removeEventListener("mousedown", manejarClicFuera);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <section
      className={clsx([
        "flex flex-col gap-3 absolute top-0 w-[90vw] max-w-[500px] h-[100vh] bg-white z-50 rounded-tr-xl rounded-br-xl p-5 shadow-2xl",
        open ? "animate-left-to-right" : "animate-right-to-left",
      ])}
      ref={drawerRef}
    >
      <div className="bg-[#F3F4F6] rounded-3xl p-3">
        {title}
        <Icon
          icon="mingcute:close-circle-fill"
          className="absolute top-[31px] right-8"
          onClick={changeOpen}
          width={25}
        />
      </div>
      <div className="bg-[#F3F4F6] rounded-3xl p-3">{children}</div>
    </section>,
    document.getElementById("drawer-portal")!
  );
};

export default Drawer;
