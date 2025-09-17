// utils/handleStatus.ts
import Cookies from "js-cookie";

// import { logOut } from "@/services/thunks/authApis";

const handleStatus = (status: number | undefined, message: string) => {
  switch (status) {
    case 403:
    case 401:
      handleUnauthorize();
      break;
  }
  switch (message) {
    case "Network Error":
      handleUnauthorize();
      break;
  }
};

function handleUnauthorize(message?: string) {
  // Clear token cookie
  Cookies.remove("token", { path: "/" });
  console.log("message", message);

  // If using Redux logout action
  // store.dispatch(logOut());

  // Redirect to login
  window.location.href = "/login";
}

export { handleStatus };
