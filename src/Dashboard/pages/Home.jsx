import React from "react";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/app.css";
import "./css/app.scss";
import Projects from "./Projects";

const serverUrl = import.meta.env.VITE_SERVER;

const Home = () => {
  const details = JSON.parse(Cookies.get("taskaid_details").replace("j:", ""));
  const [projects, setProjects] = useState([]);
  const [dumpedProjects, setdumpedProjects] = useState([]);
  const [completedProjects, setCompletedProjects] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    dashboardData();
  }, []);

  const dashboardData = async () => {
    if (details.role === "admin") {
      let data = await fetch(
        `${serverUrl}/projects/admin/working/${details.admin_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      data = await data.json();
      if (data.message == "No projects found") {
        data = [
          { name: "No projects found", description: "No projects found" },
        ];
      }
      setProjects(data);

      let dumped = await fetch(
        `${serverUrl}/dumped-projects/admin/${details.admin_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dumped = await dumped.json();
      console.log(dumped);
      if (dumped.message == "No projects found") {
        dumped = [
          { name: "No dumped projects", description: "No dumped projects" },
        ];
      }
      setdumpedProjects(dumped);

      let completed = await fetch(
        `${serverUrl}/completed-projects/admin/${details.admin_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      completed = await completed.json();
      console.log(completed);
      if (completed.message == "No projects found") {
        completed = [
          {
            name: "No completed projects",
            description: "No completed projects",
          },
        ];
      }
      setCompletedProjects(completed);
    }
  };

  const handleProjectClick = (projectId) => {
    navigate(`/dashboard/projects/${projectId}`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000, // Adjust the speed of carousel rotation (in milliseconds)
    autoplay: true,
    autoplaySpeed: 6000, // Adjust the time between slides (in milliseconds)
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <div className="dashboard-container">
      <div className="px-40 py-5 text-white text-4xl flex-col">
        <h1>Welcome {details.name}</h1>
      </div>
      <div className="container">
        <h1 className="">Working Projects</h1>
        <Slider {...settings}>
          {projects.map((project, i) => {
            return (
              <div key={i} className="project-container">
                <div className="grid">
                  <div
                    className="card"
                    onClick={() => handleProjectClick(project.project_id)}
                  >
                    <span className="icon">
                      <svg
                        fill="#878787"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        enableBackground="new 0 0 512 512"
                        xmlSpace="preserve"
                        stroke="#878787"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <path d="M393.807,7.964c-54.683,0-99.172,44.485-99.172,99.167c0,54.684,44.489,99.169,99.172,99.169 c54.682,0,99.167-44.485,99.167-99.169C492.974,52.45,448.488,7.964,393.807,7.964z M393.807,172.18 c-35.856,0-65.047-29.183-65.047-65.048c0-35.863,29.19-65.046,65.047-65.046c35.889,0,65.045,29.183,65.045,65.046 C458.852,142.998,429.695,172.18,393.807,172.18z"></path>{" "}
                            <path d="M431.227,113.473l-23.924-9.972c-0.804-3.034-2.534-5.567-4.932-7.441V58.673c0-4.715-3.833-8.531-8.532-8.531 c-4.731,0-8.531,3.816-8.531,8.531v37.38c-3.363,2.591-5.697,6.491-5.697,11.079c0,7.849,6.333,14.212,14.196,14.212 c2.598,0,4.899-0.875,6.963-2.074l23.893,9.946c1.067,0.45,2.198,0.659,3.299,0.659c3.334,0,6.498-1.974,7.863-5.25 C437.624,120.279,435.592,115.281,431.227,113.473z"></path>{" "}
                            <path d="M183.372,319.741c59.614,0,105.867-66.496,105.867-123.695c0-58.382-47.519-105.882-105.867-105.882 c-58.383,0-105.87,47.5-105.87,105.882C77.502,253.246,123.723,319.741,183.372,319.741z M183.372,128.101 c37.453,0,67.909,30.475,67.909,67.946c0,38.596-31.324,85.757-67.909,85.757c-36.588,0-67.944-47.162-67.944-85.757 C115.428,158.576,145.884,128.101,183.372,128.101z"></path>{" "}
                            <path d="M286.571,269.939c0.135,1.733,0.333,3.449,0.333,5.208c0,31.822-46.785,103.69-77.44,147.441l-12.595-61.696l14.929-14.938 c0.718-0.718,0.718-1.881,0.001-2.599l-7.252-7.259c-2.869-2.872-6.763-4.486-10.822-4.486h-20.751 c-4.053,0-7.94,1.608-10.808,4.472l-5.986,5.978c-0.689,0.688-1.076,1.622-1.077,2.596c-0.001,0.974,0.386,1.908,1.074,2.597 l13.631,13.64l-12.594,61.696c-30.656-43.761-77.405-115.62-77.405-147.441c0-1.758,0.199-3.475,0.297-5.208 C43.65,290.79,19.026,329.986,19.026,374.995v80.807c0,26.643,21.595,48.233,48.252,48.233h232.158 c26.624,0,48.214-21.591,48.214-48.233v-80.807C347.65,329.995,323.059,290.799,286.571,269.939z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </span>
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <div className="shine"></div>
                    <div className="background">
                      <div className="tiles">
                        <div className="tile tile-1"></div>
                        <div className="tile tile-2"></div>
                        <div className="tile tile-3"></div>
                        <div className="tile tile-4"></div>

                        <div className="tile tile-5"></div>
                        <div className="tile tile-6"></div>
                        <div className="tile tile-7"></div>
                        <div className="tile tile-8"></div>

                        <div className="tile tile-9"></div>
                        <div className="tile tile-10"></div>
                      </div>

                      <div className="line line-1"></div>
                      <div className="line line-2"></div>
                      <div className="line line-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="right-arrow"></div>
      </div>
      
      <div className="container">
        <h1 className="">Completed Projects</h1>
        <Slider {...settings}>
          {completedProjects.map((project, i) => {
            return (
              <div key={i} className="project-container">
                <div className="grid">
                  <div className="card" onClick={() => handleProjectClick(project.project_id)}>
                    <span className="icon">
                      <svg
                        fill="#878787"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        enableBackground="new 0 0 512 512"
                        xmlSpace="preserve"
                        stroke="#878787"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <path d="M393.807,7.964c-54.683,0-99.172,44.485-99.172,99.167c0,54.684,44.489,99.169,99.172,99.169 c54.682,0,99.167-44.485,99.167-99.169C492.974,52.45,448.488,7.964,393.807,7.964z M393.807,172.18 c-35.856,0-65.047-29.183-65.047-65.048c0-35.863,29.19-65.046,65.047-65.046c35.889,0,65.045,29.183,65.045,65.046 C458.852,142.998,429.695,172.18,393.807,172.18z"></path>{" "}
                            <path d="M431.227,113.473l-23.924-9.972c-0.804-3.034-2.534-5.567-4.932-7.441V58.673c0-4.715-3.833-8.531-8.532-8.531 c-4.731,0-8.531,3.816-8.531,8.531v37.38c-3.363,2.591-5.697,6.491-5.697,11.079c0,7.849,6.333,14.212,14.196,14.212 c2.598,0,4.899-0.875,6.963-2.074l23.893,9.946c1.067,0.45,2.198,0.659,3.299,0.659c3.334,0,6.498-1.974,7.863-5.25 C437.624,120.279,435.592,115.281,431.227,113.473z"></path>{" "}
                            <path d="M183.372,319.741c59.614,0,105.867-66.496,105.867-123.695c0-58.382-47.519-105.882-105.867-105.882 c-58.383,0-105.87,47.5-105.87,105.882C77.502,253.246,123.723,319.741,183.372,319.741z M183.372,128.101 c37.453,0,67.909,30.475,67.909,67.946c0,38.596-31.324,85.757-67.909,85.757c-36.588,0-67.944-47.162-67.944-85.757 C115.428,158.576,145.884,128.101,183.372,128.101z"></path>{" "}
                            <path d="M286.571,269.939c0.135,1.733,0.333,3.449,0.333,5.208c0,31.822-46.785,103.69-77.44,147.441l-12.595-61.696l14.929-14.938 c0.718-0.718,0.718-1.881,0.001-2.599l-7.252-7.259c-2.869-2.872-6.763-4.486-10.822-4.486h-20.751 c-4.053,0-7.94,1.608-10.808,4.472l-5.986,5.978c-0.689,0.688-1.076,1.622-1.077,2.596c-0.001,0.974,0.386,1.908,1.074,2.597 l13.631,13.64l-12.594,61.696c-30.656-43.761-77.405-115.62-77.405-147.441c0-1.758,0.199-3.475,0.297-5.208 C43.65,290.79,19.026,329.986,19.026,374.995v80.807c0,26.643,21.595,48.233,48.252,48.233h232.158 c26.624,0,48.214-21.591,48.214-48.233v-80.807C347.65,329.995,323.059,290.799,286.571,269.939z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </span>
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <div className="shine"></div>
                    <div className="background">
                      <div className="tiles">
                        <div className="tile tile-1"></div>
                        <div className="tile tile-2"></div>
                        <div className="tile tile-3"></div>
                        <div className="tile tile-4"></div>

                        <div className="tile tile-5"></div>
                        <div className="tile tile-6"></div>
                        <div className="tile tile-7"></div>
                        <div className="tile tile-8"></div>

                        <div className="tile tile-9"></div>
                        <div className="tile tile-10"></div>
                      </div>

                      <div className="line line-1"></div>
                      <div className="line line-2"></div>
                      <div className="line line-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="right-arrow"></div>
      </div>

      <div className="container">
        <h1 className="">Dumped Projects</h1>
        <Slider {...settings}>
          {dumpedProjects.map((dumpedProject, i) => {
            return (
              <div key={i} className="project-container">
                <div className="grid">
                  <div className="card" onClick={() => handleProjectClick(dumpedProject.project_id)}>
                    <span className="icon">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#616161"
                        stroke="#616161"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M928.1 881v44H95.9V99h44v782z"
                            fill="#39393A"
                          ></path>
                          <path
                            d="M352 435.7v403.4H204V435.7h148m22-22H182v447.4h192V413.7zM608 307.9v531.2H460V307.9h148m22-22H438v575.2h192V285.9z"
                            fill="#39393A"
                          ></path>
                          <path
                            d="M866.1 177.3v663.9H714V177.3h152.1m20-20H694v703.9h192V157.3h0.1z"
                            fill="#6e6e6e"
                          ></path>
                        </g>
                      </svg>
                    </span>
                    <h4>{dumpedProject.name}</h4>
                    <p>{dumpedProject.description}</p>
                    <div className="shine"></div>
                    <div className="background">
                      <div className="tiles">
                        <div className="tile tile-1"></div>
                        <div className="tile tile-2"></div>
                        <div className="tile tile-3"></div>
                        <div className="tile tile-4"></div>

                        <div className="tile tile-5"></div>
                        <div className="tile tile-6"></div>
                        <div className="tile tile-7"></div>
                        <div className="tile tile-8"></div>

                        <div className="tile tile-9"></div>
                        <div className="tile tile-10"></div>
                      </div>

                      <div className="line line-1"></div>
                      <div className="line line-2"></div>
                      <div className="line line-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="right-arrow"></div>
      </div>
    </div>
  );
};

export default Home;
