import React, { useState } from "react";

function Filter({ department, setDepartment }) {
  const dept = ["Finance", "HR", "IT", "Sales", "Marketing"];
  const [checkedValue, setCheckedValue] = useState("");
  const handleFilter = ({ currentTarget: input }) => {
    if (input.checked) {
      setCheckedValue(input.value);
      setDepartment(input.value);
    } else {
      setCheckedValue("");
      setDepartment("");
    }
  };
  return (
    <div>
      <h2>Filter By Department: </h2>
      <div className=" grid grid-cols-3 gap-x-2">
        {dept.map((item) => (
          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              value={item}
              checked={checkedValue === item}
              onChange={handleFilter}
            />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
