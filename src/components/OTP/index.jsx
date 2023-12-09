import { useState } from "react";
import OTPInput from "otp-input-react";
import LgButton from "../shared/Button/lgButton";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_ENDPOINT } from "../../constants/APIEndpoint";

const Verification = () => {
  const [OTP, setOTP] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const { payload, id } = location.state;

  const payloadData = {
    phoneNumber: payload,
    requestId: id,
    otp: OTP,
  };

  const handleVerify = async () => {
    if (OTP !== "5678") {
      alert("Invalid OTP");
    } else {
      await axios({
        method: "post",
        url: `${API_ENDPOINT}verify_otp`,
        data: payloadData,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          alert("success");
          navigate("/song");
        })
        .catch((err) => {
          console.log(err);
          alert("invalid OTp");
        });
    }
  };

  const handleResendOTP = async () => {
    await axios({
      method: "post",
      url: `${API_ENDPOINT}login`,
      data: { phoneNumber: payload },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        alert("Something Went wrong", err);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-col gap-4 w-[414px] items-start">
          <h1 className="m-0 text-[38px] font-semibold text-primary">
            OTP Verification
          </h1>
          <p className="text-default text-left">
            We have sent and OTP to {payload}. Please enter the code received to
            verify.
          </p>

          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
            secure
            inputStyles={{
              border: "1px solid #D0D3D4",
              outline: "none",
              color: "black",
              width: "52",
            }}
          />

          <LgButton label="Verfiy" onButtonClick={handleVerify} />
          <div className="flex flex-col gap-2 justify-center w-full">
            <p className="underline cursor-pointer" onClick={handleResendOTP}>
              Resend OTP
            </p>
            <p
              className="underline cursor-pointer disabled"
              onClick={() => navigate("/")}
            >
              Use another Number
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
