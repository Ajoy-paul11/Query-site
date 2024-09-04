import React from "react";

function Pagination({ page, setPage, objCount }) {
  const totalPage = Math.ceil(objCount / 10);

  const changePage = (nextPage) => {
    setPage(nextPage + 1);
  };

  return (
    <div className=" w-24 h-8">
      {totalPage > 0 &&
        [...Array(totalPage)].map((val, index) => (
          <button
            key={index}
            onClick={() => changePage(index)}
            className={` px-3 py-1 rounded-xl text-sm font-semibold ${
              page === index + 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
}

export default Pagination;
