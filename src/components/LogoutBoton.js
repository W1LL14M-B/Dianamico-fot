import { useAuth0 } from "@auth0/auth0-react";

export const LogoutBoton = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="btn btn-primary"
      >
        Log Out{" "}
      </button>
      
    </div>
  );
};
