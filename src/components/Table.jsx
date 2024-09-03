import React from "react";

function Table({ obj }) {
  return (
    <div className=" flex flex-col">
      <div className=" px-6 flex justify-between items-center">
        <p>Name</p>
        <p>Age</p>
        <p>Department</p>
        <p>Salary</p>
        <p>Joining-Date</p>
      </div>
      <div className=" flex gap-x-8">
        <div className=" px-6">
          {obj.map((item) => (
            <>
              <div key={item._id} className="">
                <div className=" flex justify-start text-center items-center w-full">
                  <div className=" ">
                    <p>{item.name}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className=" px-6">
          {obj.map((item) => (
            <>
              <div key={item._id} className="">
                <div className=" flex justify-start text-center items-center w-full">
                  <div className=" flex justify-start">
                    <p>{item.age}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className=" px-6">
          {obj.map((item) => (
            <>
              <div key={item._id} className="">
                <div className=" flex justify-start text-center items-center w-full">
                  <div className=" flex justify-start">
                    <p>{item.department}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className=" px-6">
          {obj.map((item) => (
            <>
              <div key={item._id} className="">
                <div className=" flex justify-start text-center items-center w-full">
                  <div className=" flex justify-start">
                    <p>{item.salary}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className=" px-6">
          {obj.map((item) => (
            <>
              <div key={item._id} className="">
                <div className=" flex justify-start text-center items-center w-full">
                  <div className=" flex justify-start">
                    <p>{item.joining_date.split("T")[0]}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
