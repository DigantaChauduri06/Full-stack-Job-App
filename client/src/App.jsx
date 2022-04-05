import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Dashboard, Register, Error, Landing } from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />} path="/" />
        <Route element={<Register />} path="/register" />
        <Route element={<Landing />} path="/landing" />
        <Route element={<Error />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
