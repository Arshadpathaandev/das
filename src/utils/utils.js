import { toast } from "react-toastify";

export const notify = (message, type = "success") => {
    const option = {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    };
    if (type === "success") {
      toast.success(message, option);
    } else if (type === "warn") {
      toast.warn(message, option);
    } else if (type === "error") {
      toast.error(message, option);
    }
  };