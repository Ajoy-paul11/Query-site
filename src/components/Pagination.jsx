import React from "react";

function Pagination({ page, setPage, obj }) {
  const totalPage = Math.ceil(obj.length / 10);
  console.log(totalPage);

  const changePage = (page) => {
    setPage(page + 1);
  };
  return (
    <div className=" w-24 h-8">
      {totalPage > 0 &&
        [...Array(totalPage)].map((val, index) => (
          <button
            key={index}
            onClick={changePage(index)}
            className={page === index + 1 ? `bg-blue-500 text-white` : ""``}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
}

export default Pagination;
