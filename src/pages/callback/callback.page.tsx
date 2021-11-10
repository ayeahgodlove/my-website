import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Redirect } from "react-router-dom";
import { SpinnerComponent } from "../../components/shared/spinner/spinner.component";

const CallbackPage: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <div className="w-full h-100 d-flex justify-content-center align-items-center">
        <SpinnerComponent />
      </div>
    );
  }
  return <Redirect to="/" />;
};

export default CallbackPage;
