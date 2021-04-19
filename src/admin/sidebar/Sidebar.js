import React from "react";
import { NavLink } from "react-router-dom";
let items = [{ label: "Templates", to: "/dashboard/templates" }];
function Sidebar() {
  return (
    <div className="flex flex-col p-8 w-64 h-full items-center justify-start border-r border-b-2 border-gray-200">
      <div className="flex flex-col w-full items-center">
        {items.map((item, i) => (
          <div
            className="flex flex-row space-x-2 justify-center items-center w-full border-b-2"
            key={i}
          >
            <svg
              className="h-7 w-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                fill="#fff"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <NavLink //navigate to different routes defined in the application
              className="hover:opacity-70 w-full text-center py-3 "
              activeClassName="text-secondary"
              to={item.to}
            >
              {item.label}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
