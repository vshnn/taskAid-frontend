import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    console.log(children);
    console.log(window.document.cookie)

   return window.document.cookie ? children : <Navigate to="/login" />;
}   