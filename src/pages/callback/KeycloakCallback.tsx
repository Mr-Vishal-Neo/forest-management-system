import { useDispatch } from "react-redux";
import { setTokens } from "../../store/authSlice"; // adjust path as needed
import { useNavigate } from "react-router";
import { useEffect } from "react";

const KeycloakCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      fetch(`${import.meta.env.VITE_KEYCLOAK_URL}/realms/fms-ui/protocol/openid-connect/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
          code: code,
          redirect_uri: "https://frs-plsgsl46p-vishal-gangdes-projects.vercel.app/callback"
        })
      })
      .then(res => res.json())
      .then(data => {
        dispatch(setTokens({
          access_token: data.access_token,
          refresh_token: data.refresh_token
        }));
        navigate("/dashboard", { replace: true });
      });
    }
  }, [dispatch, navigate]);

  return <div>Logging you in...</div>;
};

export default KeycloakCallback;
