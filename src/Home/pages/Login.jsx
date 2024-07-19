import { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth";
import Toggle from "../components/Toggle";
import Cookies from "js-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");
  const auth = useAuth();
  const navigate = useNavigate();
  const serverUrl = import.meta.env.VITE_SERVER;
  const loginUrl = serverUrl + "/login";

  console.log(`Server URL: ${serverUrl}`);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = { username, password, role };
    console.log(`Data: ${data}`);
    console.log(data);

    const response = await fetch(loginUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: "include",
    });

    const result = await response.json();
    console.log(result);

    var cookieData = Cookies.get("taskaid_details");
    console.log(`Cookie Data: ${cookieData}`);
    cookieData = cookieData.replace("j:", "");
    const details = cookieData ? JSON.parse(cookieData) : null;
    console.log(`Details: ${details}`);

    console.log(`Result: ${result}`);

    if (result.result === "success") {
      navigate("/dashboard", { replace: true });
    } else {
      alert(result.error);
    }
  };

  return (
    <section className="relative z-[99] my-6 flex justify-center w-screen">
      <div className="w-3/4 md:max-w-lg sm:max-w-md rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="p-8">
          <h1 className=" mb-6 text-xl text-center font-semibold  text-gray-900 md:text-2xl dark:text-white">
            Hello Again!
          </h1>
          <Toggle onRoleChange={setRole} />
          <form className="space-y-4" onSubmit={handleSignIn}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email or username
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="true"
                placeholder="name@company.com"
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring--600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required={true}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="true"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required={true}
              />
            </div>
            {/* <div>
                            <label for="organization_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization ID</label>
                            <input type="text" name="organization_id" id="organization_id"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="GJfgQ521Op" required=""/>
                        </div> */}
            <div className="flex items-center justify-end">
              <Link
                to="#"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSignIn}
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don&apos;t have an account yet?{" "}
              <Link
                to="/signup"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
