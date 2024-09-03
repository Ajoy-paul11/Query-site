import React from "react";

function Sort({ sort, setSort }) {
  const onSelectChange = ({ currentTarget: input }) => {
    setSort({ sort: input.value, order: sort.order });
  };

  const handleOrder = () => {
    if (sort.order === "asc") {
      setSort({ sort: sort.sort, order: "desc" });
    } else {
      setSort({ sort: sort.sort, order: "asc" });
    }
  };

  return (
    <div className=" flex items-center gap-2">
      <p className=" text-lg font-semibold">SortBy : </p>
      <select
        defaultValue={sort.sort}
        onChange={onSelectChange}
        className=" text-center outline-none w-20 rounded-md"
      >
        <option value="salary">Salary</option>
        <option value="joining_date">Joining_Date</option>
        <option value="age">Age</option>
        <option value="createdAt">CreateAt</option>
      </select>
      <button onClick={handleOrder} className=" flex gap-0.5">
        <p>⬆</p>
        <p>⬇</p>
      </button>
    </div>
  );
}

export default Sort;
