import Sawo from "sawo";
import React from "react";
import { useEffect, useState } from "react";

function LoginPage() {
  const [userpayload, setUserpayload] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const onSuccessLogin = async (payload) => {
      setUserpayload(payload);
      setIsLoggedIn(true);
      sessionStorage.setItem("user_id", payload.user_id);
      console.log("payload Object: ", payload);
    };
    const sawoConfig = {
      containerID: "sawo_container",
      identifierType: "phone_number_sms",
      apiKey: "98aa6c1e-da0a-4064-84c6-a934c5607d55",
      onSuccess: onSuccessLogin,
    };
    let sawo = new Sawo(sawoConfig);
    sawo.showForm();
  }, []);
  return (
    <>
      {!isLoggedIn && (
        <div
          id="sawo-container"
          style={{ width: "300px", height: "100%", margin: "auto" }}
        ></div>
      )}
      {isLoggedIn && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "300px",
            margin: "auto",
          }}
        >
          <h2>You have logged in successfully</h2>
        </div>
      )}
    </>
  );
}

export default LoginPage;
