import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Projects = () => {
  const { project_id } = useParams();

  const serverUrl = import.meta.env.VITE_SERVER;

  const [project, setProject] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getProject();
    getTasks();
  }, []);

  const getProject = async () => {
    const response = await fetch(`${serverUrl}/project/${project_id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const result = await response.json();
    console.log(result);
    setProject(result.project[0]);
  };

  const getTasks = async () => {
    const response = await fetch(`${serverUrl}/project/tasks/${project_id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const result = await response.json();
    console.log(result);
    setTasks(result.project);
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="nft">
        <div className="main">
          <img
            className="tokenImage"
            src="https://picsum.photos/300/600?random=1"
            alt="Project Icon"
          />
          <h2>{project.name}</h2>
          <p className="description">{project.description}</p>
          <div className="tokenInfo">
            <div className="price">
              <ins>◘</ins>
              <p>{project.manager_username}</p>
            </div>
            <div className="duration">
              <ins>◷</ins>
              <p>
                {Math.ceil(
                  Math.abs(
                    new Date(project.end_date).getTime() -
                      new Date(project.start_date).getTime()
                  ) /
                    (1000 * 3600 * 24)
                )}{" "}
                days left
              </p>
            </div>
          </div>
          <hr />
          <div className="creator">
            <div className="wrapper">
              <img
                src="https://picsum.photos/300/600?random=2"
                alt="Creator"
              />
            </div>
            <p>
              <ins>Project of</ins> {project.organization_id}
            </p>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", right: 300, top: 20 }}>
        <div className="tasks">
          {tasks.map((task, i) => {
            return (
              <main
                className="bg-white rounded-lg overflow-hidden shadow w-72 flex flex-col gap-4 m-5"
                key={i}
              >
                <div className="w-full h-8 px-12 py-1.5 bg-blue-600 justify-center items-center inline-flex">
                  <div className="text-center text-white text-xs font-medium  leading-tight">
                    {task.task_name}
                  </div>
                </div>
                <header className="flex px-4 pt-4 justify-between items-center">
                  <div className="flex flex-col">
                    <div className="text-zinc-900 text-base font-medium  leading-normal">
                      {task.name}
                    </div>
                    <div className="text-neutral-400 text-xs font-normal  leading-tight">
                      {task.department}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-right text-zinc-900 text-base font-medium  leading-normal">
                      {task.status}
                    </div>
                    <div className="text-right text-neutral-400 text-xs font-normal  leading-tight">
                      {task.task_id}
                    </div>
                  </div>
                </header>

                <section className="mt-4 px-4 flex items-center justify-between">
                  <div className="items-center gap-1 flex">
                    <svg
                      className="h-5 w-5 text-red-600"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.8333 2.50016H15V1.66683C15 1.2085 14.625 0.833496 14.1667 0.833496C13.7083 0.833496 13.3333 1.2085 13.3333 1.66683V2.50016H6.66667V1.66683C6.66667 1.2085 6.29167 0.833496 5.83333 0.833496C5.375 0.833496 5 1.2085 5 1.66683V2.50016H4.16667C3.24167 2.50016 2.50833 3.25016 2.50833 4.16683L2.5 15.8335C2.5 16.7502 3.24167 17.5002 4.16667 17.5002H15.8333C16.75 17.5002 17.5 16.7502 17.5 15.8335V4.16683C17.5 3.25016 16.75 2.50016 15.8333 2.50016ZM15 15.8335H5C4.54167 15.8335 4.16667 15.4585 4.16667 15.0002V6.66683H15.8333V15.0002C15.8333 15.4585 15.4583 15.8335 15 15.8335ZM6.66667 8.3335H9.16667C9.625 8.3335 10 8.7085 10 9.16683V11.6668C10 12.1252 9.625 12.5002 9.16667 12.5002H6.66667C6.20833 12.5002 5.83333 12.1252 5.83333 11.6668V9.16683C5.83333 8.7085 6.20833 8.3335 6.66667 8.3335Z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="text-red-600 text-xs font-normal leading-tight">
                      Due {task.end_date.substring(0, 10)}
                    </div>
                    <div className="min-h-4 w-px mx-1 border-gray-100 border-dashed border-l h-full"></div>
                    <div className="text-neutral-400 text-xs font-normal font-['Inter'] leading-tight">
                      Added {task.start_date.substring(0, 10)}
                    </div>
                  </div>
                </section>
                <div className="w-full px-4 my-4">
                  <div className="border-gray-100 border-dashed border h-px"></div>
                </div>
                <ul className="flex px-4 flex-col gap-4 mb-4">
                  <li className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <div className="text-zinc-600 text-base font-normal  leading-normal">
                        {task.description}
                      </div>
                      <div className="text-neutral-400 text-xs font-normal  leading-tight">
                        Contact : {task.email}
                      </div>
                    </div>
                  </li>
                </ul>
              </main>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
