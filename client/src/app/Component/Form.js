import React, { useState } from "react";
import { advancedSearch } from "../Data";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({});

  const nevi = useNavigate();
  function handleQuery(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const queryString = new URLSearchParams(formData).toString();

    console.log("Serialized Query String:", queryString);
    localStorage.setItem("query", queryString);

    nevi("/searchUser");
  }
  return (
    <>
      <div className="transform translate-y-[4vw] translate-x-[5vw] ">
        <p className="">Hello, Guest!</p>

        <h1 className="font-bold text-[1.5vw] transform translate-y-[1.3vw] ">
          Find the Best Trademen Near You
        </h1>
      </div>
      <div className="ml-[20vw] mt-[5vw] ">
        <form className=" p-[2vw] flex items-center " onSubmit={onSubmit}>
          {advancedSearch?.map((item, index) => {
            return (
              <main className="w-full max-w-[15vw]" key={index}>
                {item?.type === "select" ? (
                  <select
                    placeholder={item?.placeholder}
                    name={item?.name}
                    onChange={handleQuery}
                    className="text-vw p-vw border-[1px]"
                  >
                    <option value="default">Select Occupation</option>
                    {item?.options?.map((opt, idnex) => (
                      <option value={opt?.value}>{opt?.label}</option>
                    ))}
                  </select>
                ) : (
                  <>
                    <input
                      type="text"
                      onChange={handleQuery}
                      placeholder={item?.placeholder}
                      className="text-vw p-vw w-full border-[1px] rounded-md"
                      name={item?.name}
                    />
                  </>
                )}
              </main>
            );
          })}
          <button type="submit" className="p-vw bg-blue-500 ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
