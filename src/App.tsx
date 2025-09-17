import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/login";
import ProtectedRoute from "./routes/protectedRoute";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/notfound/notFound";
import Layout from "./components/layout/layout";
import PublicRoute from "./routes/publicRoute";
import BioDiversityMapArea from "./components/bioDiversityMapArea/bioDiversityMapArea";
import KeycloakCallback from "./pages/callback/KeycloakCallback";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PublicRoute />}>
              <Route index element={<Login />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="area-map" element={<BioDiversityMapArea />} />
            </Route>
          </Route>

          <Route path="/callback" element={<KeycloakCallback />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
