import { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const hooksData = [
  {
    title: "useState",
    links: [
      { name: "Text Hide with Button", path: "/useState/Booleans" },
      { name: "InputText Display", path: "/useState/InputText" },
      { name: "Handling multiple input fields", path: "/useState/HandlingInputFields" },
      { name: "Toggle Between Two Text Inputs", path: "/useState/Toggle-Between-2-txt-inputs" },
      { name: "Real-time Character Counter", path: "/useState/Real-time-Character-Counter" },
      {
        name: "Search Filter for a List of Items",
        path: "/useState/SearchList",
      },
      { name: "Dynamic Form Fields", path: "/useState/DynamicFields" },
    ],
  },
  {
    title: "useEffect",
    links: [
      { name: "Fetching Data", path: "/examples/useEffect-fetch" },
      { name: "Cleanup in useEffect", path: "/examples/useEffect-cleanup" },
    ],
  },
  {
    title: "useContext",
    links: [
      { name: "Theme Management", path: "/examples/useContext-theme" },
      { name: "Authentication", path: "/examples/useContext-auth" },
    ],
  },
  {
    title: "useReducer",
    links: [
      { name: "Counter Example", path: "/examples/useReducer-counter" },
      { name: "Todo App", path: "/examples/useReducer-todos" },
    ],
  },
  {
    title: "useMemo",
    links: [
      { name: "Optimization", path: "/examples/useMemo-optimization" },
      { name: "Filtering Example", path: "/examples/useMemo-filter" },
    ],
  },
  {
    title: "useCallback",
    links: [
      { name: "Event Handling", path: "/examples/useCallback-event" },
      { name: "API Calls", path: "/examples/useCallback-fetch" },
    ],
  },
  {
    title: "useRef",
    links: [
      { name: "Accessing DOM", path: "/examples/useRef-dom" },
      { name: "Timers & Intervals", path: "/examples/useRef-timer" },
    ],
  },
  {
    title: "useLayoutEffect",
    links: [
      { name: "Measuring Elements", path: "/examples/useLayoutEffect-measure" },
      { name: "Animations", path: "/examples/useLayoutEffect-animation" },
    ],
  },
];

const Dashboard = () => {
  const [selectedHook, setSelectedHook] = useState(null);

  return (
    <div className="p-4 flex flex-col items-center">
      {/* Page Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">All About React Hooks</h1>
        <p className="text-gray-600 mt-2">
          Examples from Most Use Case Scenarios
        </p>
      </div>

      {/* Hooks Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {hooksData.map((hook) => (
          <Sheet
            key={hook.title}
            onOpenChange={(open) => !open && setSelectedHook(null)}
          >
            <SheetTrigger asChild>
              <Card
                className="cursor-pointer p-10 flex items-center justify-center text-xl font-semibold"
                onClick={() => setSelectedHook(hook)}
              >
                <CardContent className="text-center">{hook.title}</CardContent>
              </Card>
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <h2 className="text-2xl font-bold">{selectedHook?.title}</h2>
              <div className="mt-4 space-y-2">
                {selectedHook?.links.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full flex flex-col items-start"
                  >
                    <Link to={link.path} className="text-sm">
                      {link.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
