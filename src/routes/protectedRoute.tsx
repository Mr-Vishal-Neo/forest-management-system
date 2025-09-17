import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { getItem } from '../utils/sessionStorageUtils';

const ProtectedRoute = () => {
  const [token, setToken] = useState<unknown>(null);

  useEffect(() => {
    const storedToken = getItem("access_token");
    setToken(storedToken);
  }, []);

  console.log("Token from protected route:", token);

  if (token === null) {
    // While token is being loaded, you can show a spinner or null
    return null;
  }

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
