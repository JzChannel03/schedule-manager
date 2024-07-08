import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
  Textarea,
  TimeInput,
} from "@nextui-org/react";
import useDrawer from "../hooks/useDrawer";
import { Time } from "@internationalized/date";

function EachPersonForm() {
  return (
    <div className="m-auto w-11/12 p-4 flex flex-col gap-2 rounded-lg shadow-md">
      <h4>Juan de los Claveles</h4>
      <div className="pl-5 flex flex-col gap-4 w-full">
        <div className="w-full flex gap-3 justify-start items-center align-middle">
          <label>Ausente:</label>
          <Checkbox defaultSelected />
        </div>
        <div className="w-full flex gap-3 justify-start items-center align-middle">
          <TimeInput isReadOnly label="Inicio" defaultValue={new Time(8, 0)} />
          <TimeInput isReadOnly label="Fin" defaultValue={new Time(5, 0)} />
        </div>
        <div className="w-full flex gap-3 justify-start items-center align-middle">
          <Textarea
            label="Queja:"
            placeholder="(Opcional)"
            className="max-w-full"
          />
        </div>
      </div>
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
        <div className="w-full flex justify-between lg:justify-center items-center">
          <Icon
            onClick={changeOpen}
            icon="tabler:menu-2"
            className="lg:hidden"
            width={25}
          />
          <h5>5 May</h5>
          <Icon
            icon="streamline:interface-setting-menu-horizontal-navigation-dots-three-circle-button-horizontal-menu"
            className="lg:hidden"
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
          <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Agregar día:
                  </ModalHeader>
                  <ModalBody className="">
                    <section className="overflow-y-scroll flex flex-col gap-5 p-1">
                      <Select
                        label="Selecciona una ficha"
                        className="max-w-full"
                      >
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
