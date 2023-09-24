import React from "react";
import Back from "../components/Back";
import Identify from "../components/Identify";
import Knowmore from "../components/Knowmore";
import Ourapp from "../components/Ourapp";
import Safe from "../components/Safe";
import Form from "../components/Form";

const Home = () => {
  return (
    <>
      <Back />
      <Identify /> 
      <Safe />
      <Ourapp />
      <Knowmore />
      <Form />
    </>
  );
};

export default Home;
