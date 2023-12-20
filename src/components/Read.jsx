import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "./Button";

const Read = () => {
  const { id } = useParams();
  const [data, setdata] = useState({});
  useEffect(() => {
    axios
      .get("https://user-json-server-10n4.onrender.com/user/" + id)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" px-4  flex justify-center items-center h-screen">
      <div className=" container gap-y-1 w-full max-w-[800px] rounded-md bg-slate-200 shadow   py-3 px-4 flex flex-col ">
        <h1 className=" text-center text-4xl mb-3">Detail of User</h1>
        <strong className=" capitalize">Name: {data.name}</strong>
        <strong>Email: {data.email}</strong>
        <strong>Phone: {data.phone}</strong>
        <div className=" pt-2 flex gap-3">
          <Link to={`/update/${id}`}>
            <Button className={"bg-yellow-400 text-gray-700"} text={"Edit"} />
          </Link>
          <Link to={"/"}>
            {" "}
            <Button text={"Back"} className={"bg-[#212529]"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Read;
