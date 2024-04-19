import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Drawer from "./components/ui/Drawer";
import { useState } from "react";

function NavBar() {
  const [showDrawer, setshowDrawer] = useState(false);
  console.log(showDrawer);
  return (
    <section className="w-full h-1/5">
      <Drawer open={showDrawer}></Drawer>
      <div className="grid gap-5 grid-rows-[2fr 1fr] w-full h-full text-white p-6">
        <div className="w-full flex justify-between items-center">
          <Icon icon="tabler:menu-2" width={25} />
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
          <Button color="secondary" onClick={() => setshowDrawer(!showDrawer)}>
            Agregar día
          </Button>
        </div>
      </div>
    </section>
  );
}

function Body() {
  return (
    <section className="w-full h-4/5">
      <div className="bg-[#FEFFFE] w-full h-full rounded-tl-[50px] p-6">
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="flex flex-col">
      <NavBar></NavBar>
      <Body></Body>
    </main>
  );
}

export default App;
