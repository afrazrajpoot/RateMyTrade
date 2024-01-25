import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../UserContext/UserContext";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

const SearchUser = () => {
  const { query } = useGlobalContext();
  const [arr, setArr] = useState({});

  const fetchData = async (query1) => {
    try {
      const result = await axios.post(
        `http://localhost:5000/api/v1/tradesman/search?${query1}`
      );

      setArr(result);
      console.log(result.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    let query1 = localStorage.getItem("query");

    fetchData(query1);
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 place-content-center">
        {arr?.data?.data.map((elem) => (
          <div
            key={elem._id}
            className="text-vw w-full max-w-[20vw] shadow-lg rounded-md flex flex-col items-center p-[3vw] gap-[1.5vw] justify-center"
          >
            <img
              src={elem.image ? elem.image : "/img/man2.jpg"}
              alt="profileImage"
              className="w-full max-w-[8vw] rounded-full h-[8vw]"
            />
            <h1 className="font-semibold text-center text-[1.5vw]">
              {elem.username}
            </h1>
            <p>{elem.occupation}</p>
            <Link to={`/dynamicProfile/${elem._id}`}>
              <button className="bg-orange-500 text-white p-[0.9vw] mt-[2vw] rounded-full hover:bg-orange-600 hover:text-white transition  duration-300 shadow-md">
                view profile
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchUser;
