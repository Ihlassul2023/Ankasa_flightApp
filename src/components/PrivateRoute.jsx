import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = typeof window !== "undefined" && localStorage.getItem("token");
    if (!token) {
      toast.error("harap login terlebih dahulu!");
      router.push("/Auth/Login");
    }
  }, []);

  return children;
};

export default PrivateRoute;
