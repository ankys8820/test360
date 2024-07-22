import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [searchParam, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const emailToken = searchParam.get("emailToken");
  useEffect();
  return (
    <>
      <div></div>
    </>
  );
};

export default VerifyEmail;
