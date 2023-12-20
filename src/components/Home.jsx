import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Home = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://user-json-server-10n4.onrender.com/user")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (id) => {
    const confirm = window.confirm("Do you Want to Delete?");
    if (confirm) {
      axios
        .delete("https://user-json-server-10n4.onrender.com/user/" + id)
        .then((res) => location.reload())
        .catch((err) => console.log(err));
    }
    return;
  };

  return (
    <div className=" mt-10 container mx-auto px-4 flex flex-col justify-center items-center ">
      <h1 className=" text-5xl mb-5">List of Users</h1>
      <div className=" w-full max-w-[1000px] rounded p-2 bg-white border shadow">
        <div className=" flex justify-end">
          <Link
            to="/create"
            className=" my-4 bg-green-700 px-3 py-2 font-bold rounded-md text-white "
          >
            Add +
          </Link>
        </div>
        <table className=" w-full rounded  overflow-hidden table">
          <thead>
            <tr className="bg-[#212529]">
              <th className=" text-white py-3">ID</th>
              <th className=" text-white py-3 ">Name</th>
              <th className=" text-white py-3 hidden sm:table-cell">Email</th>
              <th className=" text-white py-3 hidden md:table-cell">Phone</th>
              <th className=" text-white py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((d, i) => (
                <tr key={d.id} className=" border-t  text-gray-500  ">
                  <td className=" px-2  text-black font-semibold py-4 text-center">
                    {d.id}
                  </td>
                  <td className=" capitalize text-center">{d.name}</td>
                  <td className="hidden sm:table-cell text-center">
                    {d.email}
                  </td>
                  <td className="hidden md:table-cell text-center">
                    {d.phone}
                  </td>
                  <td>
                    <div className=" justify-center  flex gap-2">
                      <Link to={`/read/${d.id}`}>
                        {" "}
                        <Button text={"Read"} className={"bg-blue-500"} />
                      </Link>
                      <Link to={`/update/${d.id}`}>
                        <Button
                          className={"bg-yellow-400 text-gray-700"}
                          text={"Edit"}
                        />
                      </Link>

                      <Button
                        text={"Delete"}
                        className={" bg-red-600"}
                        onclick={() => handleDelete(d.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>
                  {" "}
                  <p className="text-center py-3 text-red-500 text-5xl">
                    User List is Empty
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
