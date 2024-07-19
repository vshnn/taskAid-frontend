import { Menu, ChevronFirst, MoreVertical } from "lucide-react";

import { useContext, createContext, useState } from "react";
const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className=" w-44 border flex flex-col ">
      <nav
        className={`   flex flex-col rounded bg-black border-r shadow-sm  transition-all delay-150 duration-300 ${
          expanded ? "w-54" : "w-20"
        } `}
      >
        <div className="p-4 pb-2 flex justify-between items-center">
          <p
            className={`text-white font-inter text-2xl font-medium overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          >
            taskAid
          </p>

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <Menu />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 ">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            className="w-10 h-10 rounded-md"
            src="./src/assets/profileicon.png"
          ></img>

          <div
            className={`  flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4 ">
              <h4 className="text-white font-extrabold">john doe</h4>
              <span className="text-xs text-gray-500">johndoe@gmail.com</span>
            </div>

            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                onClick={() => {
                  /* Function to handle creating a new project */
                }}
              >
                New Project
              </button>
            </div>

            {/* <MoreVertical size={20} /> */}
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`
    relative flex items-center py-2 px-3 my-1
    font-medium rounded-md cursor-pointer
    transition-colors  group ${
      active
        ? "bg-gradient-to-r from-purple-500 via-indigo-600 to-violet-900 text-white"
        : "text-gray-600"
    }
    group-hover:bg-indigo-500 group-hover:text-white
    `}
    >
      {icon}
      <span
        className={` overflow-hidden transition-all ${
          expanded ? "w-32" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
