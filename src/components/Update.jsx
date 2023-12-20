import axios from "axios";

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "./Button";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://user-json-server-10n4.onrender.com/user/" + id, values)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("https://user-json-server-10n4.onrender.com/user/" + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" px-4 flex justify-center items-center h-screen ">
      <div className=" w-full max-w-[800px] border bg-slate-200 shadow px-5 py-4 rounded">
        <h1 className=" text-4xl mb-3 text-center">Update User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              className="w-full text-lg px-3 py-2 rounded border-black outline-blue-400"
              placeholder="Enter Name"
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <input
              className="w-full text-lg px-3 py-2 rounded border-black outline-blue-400"
              placeholder="Enter Email"
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className=" mb-3">
            <input
              className="w-full text-lg px-3 py-2 rounded border-black outline-blue-400"
              placeholder="Enter phone number"
              type="text"
              name="phone"
              id="phone"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>{" "}
          <Button
            className={"bg-yellow-400 text-gray-700"}
            type={"submit"}
            text={"Update"}
          />
          <Link to="/" className="btn btn-primary ms-3">
            <Button text={"Back"} className={"bg-[#212529]"} />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
