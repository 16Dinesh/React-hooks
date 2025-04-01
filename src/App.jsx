import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/common/Dashboard-Layout";
import UseState_With_Booleans from "./pages/useState/useState-Boolen";
import UseState_with_InputText from "./pages/useState/useState-Text";
import RegistrationForm from "./pages/useState/useState-MultipleInputFeilds";
import ToggleTextInput from "./pages/useState/useState-Toggle-Between-2-txt-inputs";
import TextAreaWithCounter from "./pages/useState/useState-Real-time-Character-Counter";
import SearchList from "./pages/useState/useState-SearchList";
import DynamicFields from "./pages/useState/useState-DynamicFields";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/useState/Booleans" element={< UseState_With_Booleans />} />
      <Route path="/useState/InputText" element={<UseState_with_InputText/>} />
      <Route path="/useState/HandlingInputFields" element={<RegistrationForm/>} />
      <Route path="/useState/Toggle-Between-2-txt-inputs" element={<ToggleTextInput/>} />
      <Route path="/useState/Real-time-Character-Counter" element={<TextAreaWithCounter/>} />
      <Route path="/useState/SearchList" element={<SearchList/>} />
      <Route path="/useState/DynamicFields" element={<DynamicFields/>} />
    </Routes>
  );
};

export default App;
