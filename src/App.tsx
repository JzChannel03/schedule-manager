import Body from "./components/Body";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="flex">
      <div className="hidden lg:block w-3/12 bg-gray-400">Hola</div>
      <div className="w-full lg:w-9/12 h-full flex flex-col">
        <NavBar></NavBar>
        <Body></Body>
      </div>
    </main>
  );
}

export default App;
