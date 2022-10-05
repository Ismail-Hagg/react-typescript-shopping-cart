import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <div className="bg-slate-200 h-full">
      <ShoppingCartProvider>
        <Navbar />
        <div className="p-4 font-bold text-xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
