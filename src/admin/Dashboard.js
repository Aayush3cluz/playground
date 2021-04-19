import React from "react";

import { Route, Router, Switch } from "react-router-dom";
import Konva from "./konva/konva";
import Sidebar from "./sidebar/Sidebar";
function Dashboard() {
  let content = (
    // if the user has signed in
    <div className="flex flex-row w-screen h-screen">
      <div className="h-screen w-64">
        <Sidebar /> {/* A Component */}
      </div>
      <div className="w-full h-full p-10">
        <Switch>
          <Route path="/dashboard/templates" component={Konva} />
        </Switch>
      </div>
    </div>
  );
  return content;
}

export default Dashboard;
