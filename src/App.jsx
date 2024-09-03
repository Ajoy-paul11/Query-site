import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./components/Search.jsx";
import Table from "./components/Table.jsx";
import Sort from "./components/Sort.jsx";
import Filter from "./components/Filter.jsx";
import Pagination from "./components/Pagination.jsx";

const base_url = import.meta.env.VITE_BASE_URL;

function App() {
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: "joining_date", order: "desc" });
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&department=${department}&search=${search}`;
        const { data } = await axios.get(url);
        setObj(data);
      } catch (error) {
        console.log("Error occurred while getting data", error.message);
      }
    };

    getData();
  }, [sort, page, search, department]);

  return (
    <>
      <div className=" h-screen w-full bg-[#A28089] text-gray-700 p-8">
        <div className=" max-w-[1000px] h-[90%] rounded-lg shadow-lg shadow-[#2f2628] mx-auto">
          <div className=" flex justify-between h-20 p-4 px-8 shadow-sm rounded-lg shadow-[#2f2628]">
            <div className=" font-bold text-2xl">
              Paul <span className=" text-blue-700">DEV</span>
            </div>
            <div className=" w-1/3">
              {/* Search component */}
              <Search setSearch={(search) => setSearch(search)} />
            </div>
          </div>
          <div className=" w-full pt-6">
            <div className="grid grid-cols-4 w-full grid-rows-2 content-center ">
              <div className=" col-span-3  row-span-2 w-full">
                {/* Table component */}
                <Table obj={obj.data ? obj.data : []} />
              </div>
              <div>
                {/* Sort component */}
                <Sort sort={sort} setSort={(sort) => setSort(sort)} />
              </div>
              <div className=" ">
                {/* Dept. filter component */}
                <Filter
                  setDepartment={(department) => setDepartment(department)}
                />
              </div>
            </div>
          </div>
          <div>
            {/* Pagination component */}
            <Pagination
              page={page}
              setPage={(page) => setPage(page)}
              obj={obj.data ? obj.data : []}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
