import { useState } from "react";
import LgButton from "../shared/Button/lgButton";
import PhoneNumber from "../shared/InputBox/phoneNumber";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { API_ENDPOINT } from "../../constants/APIEndpoint";

function Sigin() {
  const [phoneNumber, setPhoneNumber] = useState();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async () => {
    const payload = "+91" + phoneNumber;
    // const payload = { phoneNumber: phoneNumber };

    if (phoneNumber.length < 10) {
      alert("number is invalid");
    } else {
      setIsLoading(true);
      await axios({
        method: "POST",
        url: `${API_ENDPOINT}login`,
        data: { phoneNumber: payload },
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          const id = res.data.requestId;
          navigate("/verify", { state: { payload, id } });
        })
        .catch((err) => {
          alert("something went wrong");
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-col gap-4 w-[414px] items-start">
          <h1 className="m-0 text-[38px] font-semibold text-primary">
            Sign In
          </h1>
          <p className="text-default text-left">
            Please enter your mobile number to login. We will send an OTP to
            verify your number.
          </p>
          <PhoneNumber onChange={handleChange} value={phoneNumber} />
          <LgButton
            onButtonClick={handleSubmit}
            label={isLoading ? "Loading ..." : "Sign In"}
            disabled={isLoading}
          />
        </div>
      </div>
    </>
  );
}

export default Sigin;
