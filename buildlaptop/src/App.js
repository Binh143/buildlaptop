import React from "react";
import Index from "./view";
import { DataProvider } from "./api/Context";
function App() {
  return (
    <DataProvider>
      <div className="App">
        <Index />
      </div>
    </DataProvider>
  );
}

export default App;
