import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const serverUrl = import.meta.env.VITE_SERVER;

export const RequireAuth = () => {
  const [isVerified, setIsVerified] = useState(null);
  const jwtToken = Cookies.get("taskaid_jwt_token");
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      if (!jwtToken) {
        setIsVerified(false);
        return;
      }

      let response = await fetch(`${serverUrl}/verify`, {
        method: "POST",
        body: JSON.stringify({ token: jwtToken }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 401) {
        Cookies.remove("taskaid_jwt_token");
        setIsVerified(false);
      } else {
        setIsVerified(response.ok);
      }
    };

    verifyToken();
  }, [jwtToken]);

  if (isVerified === null) {
    return <div>Loading...</div>; // Or a loading spinner
  } else if (isVerified === false) {
    navigate("/login");
    return null;
  } else {
    return <Outlet />;
  }
};