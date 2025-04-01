import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/common/Dashboard-Layout";
import UseState_With_Booleans from "./pages/useState/useState-Boolen";
import UseState_with_InputText from "./pages/useState/useState-Text";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/useState/Booleans" element={< UseState_With_Booleans />} />
      <Route path="/useState/InputText" element={<UseState_with_InputText/>} />
    </Routes>
  );
};

export default App;
