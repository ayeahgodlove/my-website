import React from "react";
// import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { SpinnerComponent } from "../../components/shared/spinner.component";
import { useToken } from "../../hooks/token/token.hook";

const CallbackPage: React.FC = () => {
  const { loaded } = useToken();
  if (!loaded) {
    return (
      <div className="w-full h-100 d-flex justify-content-center align-items-center">
        <SpinnerComponent />
      </div>
    );
  }

  //   dispatch(fetchInitialDataAsync());
  return <Redirect to="/" />;
};

export default CallbackPage;
