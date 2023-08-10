import { useRouter } from "next/router";
import React from "react";
import Button from "../components/button";
import { useStore } from "../services/store";

const Register: React.FC = () => {
  const router = useRouter();
  const {
    state: { contract },
  } = useStore();
  const handleParent = async () => {
    await contract.createParent();
    // TODO CHANGE USER TYPE TO PARENT
    router.push("/parent");
  };
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-hero text-blue-dark text-center mb-[8vh]">
        Are you a<br />
        Adult or child?
      </h1>
      <div className="flex">
        <Button className="mr-12 bg-blue-dark" onClick={handleParent}>
         I am an Adult 
    </div>
  );
};

export default Register;
