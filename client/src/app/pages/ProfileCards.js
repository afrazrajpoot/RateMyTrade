import React, { useEffect, useState } from "react";
import { useGetAllTradesmenQuery } from "../store/storeApi";
import { Link } from "react-router-dom";

import Form from "../Component/Form";

const ProfileCards = () => {
  let { data, isLoading, isError } = useGetAllTradesmenQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }

  return (
    <main className="overflow-x-hidden">
      <Form />

      <div className="grid grid-cols-4 place-content-center">
        {data.map((elem, index) => (
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
    </main>
  );
};

export default ProfileCards;
