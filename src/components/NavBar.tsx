import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import useDrawer from "../hooks/useDrawer";

function CustomInput() {
  return <input type="text" className="shadow-lg p-2 rounded-lg" />;
}

function EachPersonForm() {
  return (
    <div className="p-4 border-1 border-solid border-black flex flex-col gap-2 rounded-lg shadow-lg">
      <h3>Juan de los Claveles</h3>
      <label>Tiempo trabajado:</label>
      <CustomInput />
      <label>Ausente?</label>
      <CustomInput />
      <label>Quejas:</label>
      <CustomInput />
    </div>
  );
}

export default function NavBar() {
  const { changeOpen, Drawer, open } = useDrawer();
  console.log(open);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <section className="w-full h-[180px]">
      {open && (
        <Drawer title="Menú">
          <h4>Hello, Jose 👋</h4>
        </Drawer>
      )}
      <div className="grid gap-5 grid-rows-[2fr 1fr] w-full h-full text-white p-6">
        <div className="w-full flex justify-between items-center">
          <Icon onClick={changeOpen} icon="tabler:menu-2" width={25} />
          <h5>5 May</h5>
          <Icon
            icon="streamline:interface-setting-menu-horizontal-navigation-dots-three-circle-button-horizontal-menu"
            width={20}
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col">
            <h4>Ayer</h4>
            <p>2 Ausencias</p>
          </div>
          <Button color="secondary" onPress={onOpen}>
            Agregar día
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Agregar día:
                  </ModalHeader>
                  <ModalBody className="">
                    <section className="h-[400px] overflow-y-scroll flex flex-col gap-5 p-1">
                      <Select label="Selecciona una ficha" className="max-w-xs">
                        {[
                          { label: "Ficha 18", value: "f18" },
                          { label: "Ficha 21", value: "f21" },
                          { label: "Ficha 26", value: "f26" },
                          { label: "Ficha 30", value: "f30" },
                        ].map((animal) => (
                          <SelectItem key={animal.value} value={animal.value}>
                            {animal.label}
                          </SelectItem>
                        ))}
                      </Select>
                      <EachPersonForm></EachPersonForm>
                      <EachPersonForm></EachPersonForm>
                      <EachPersonForm></EachPersonForm>
                    </section>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </section>
  );
}
