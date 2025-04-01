import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function UseState_With_Booleans() {
  const [toggleState, setToggleState] = useState(true);

  function handleToggle() {
    setToggleState(!toggleState);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center bg-white shadow-lg p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">UseState with Boolean</h1>
        {toggleState && <h2 className="text-lg mb-4">Click on the Button to Hide the TEXT</h2>}
        <Button onClick={handleToggle} className="px-4 py-2">
          Click Me
        </Button>
      </div>
    </div>
  );
}
