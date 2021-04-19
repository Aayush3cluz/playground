import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import KonvaTrial from "./konva/KonvaTrial";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact to="/" component={KonvaTrial} />
        {/* <Route exact to="/dashboard" component={Dashboard} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
