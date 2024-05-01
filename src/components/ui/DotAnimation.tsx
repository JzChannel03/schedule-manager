import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect } from "react";

export default function DotAnimation() {
  const [icono, setIcono] = useState<"ph:dot-bold" | "ph:dot-duotone">(
    "ph:dot-bold"
  );

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIcono((prevIcono: any) =>
        prevIcono === "ph:dot-bold" ? "ph:dot-duotone" : "ph:dot-bold"
      );
    }, 500);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <Icon
        color="blue"
        icon={icono === "ph:dot-bold" ? "ph:dot-duotone" : "ph:dot-bold"}
        className={`absolute top-1 right-0 transition-opacity duration-300 ease-in-out ${
          icono === "ph:dot-bold" ? "opacity-0" : "opacity-100"
        }`}
        width={15}
      />
    </div>
  );
}
