import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const Create = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios
      .post("https://user-json-server-10n4.onrender.com/user/", values)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className=" mx-4  flex justify-center items-center h-screen ">
      <div className=" w-full  max-w-[800px] border bg-slate-200 shadow px-5 py-4 rounded">
        <h1 className=" text-4xl mb-3 text-center">Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className=" ml-2 text-lg font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className="w-full text-lg px-3 py-2 rounded border-black outline-blue-400"
              placeholder="Enter Name"
              type="text"
              name="name"
              id="name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label className=" ml-2  text-lg font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="w-full text-lg px-3 py-2 rounded border-black outline-blue-400"
              placeholder="Enter Email"
              type="email"
              name="email"
              id="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label className=" ml-2  text-lg font-semibold" htmlFor="name">
              Phone
            </label>
            <input
              className="w-full text-lg px-3 py-2 rounded border-black outline-blue-400"
              placeholder="Enter phone number"
              type="text"
              name="phone"
              id="phone"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>{" "}
          <Button
            className={"bg-yellow-400 text-gray-700"}
            type={"submit"}
            text={"Submit"}
          />
          <Link to="/" className="btn btn-primary ms-3">
            <Button text={"Back"} className={"bg-[#212529]"} />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;
