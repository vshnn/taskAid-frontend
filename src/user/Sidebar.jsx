import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData.jsx";
import { ChevronFirst } from 'lucide-react';
import { ChevronLast } from 'lucide-react';


function Sidebar() {
	const [sidebar, setSidebar] = useState(true);

	const showSidebar = () => {
		setSidebar(!sidebar);
	}	
	return (
			<div className={`sticky left-4 border-2 mt-8 border-[#25282d] shadow-2xl h-[610px] rounded-3xl  ${sidebar ? "" : "w-20 px-5 "}`}>
				<ul className={`pt-10 pb-5 w-2/3 px-5 flex flex-col gap-12  ${sidebar ? "" : "items-center w-2/5"} `}>
					{SidebarData.map((item, index) => {
						return (

							<li key={index}>
								<NavLink end to={item.path} className="flex gap-5 [&.active]:text-[#4BFA0E] text">
									<div className="">{item.icon}</div>
									<div className={`${sidebar ? "" : "hidden"}`}>{item.title}</div>
								</NavLink>
							</li>
						);
					})}
					<li>
						<button onClick={showSidebar} className={`border p-2 mb-5 hover:bg-[#25282d] s rounded-lg`}>
							{sidebar ? <ChevronFirst /> : <ChevronLast />}
						</button>
					</li>
				</ul>
			</div>
	);
}

export default Sidebar;