import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./components/Search.jsx";

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
        setObj(data.data);
      } catch (error) {
        console.log("Error occurred while getting data", error.message);
      }
    };

    getData();
  }, [sort, page, search, department]);

  return (
    <>
      <div className=" h-screen w-full bg-[#A28089] text-white p-8">
        <div className=" max-w-[1000px] h-[90%] border-[1px] mx-auto">
          <div className=" flex justify-between h-20 p-4 px-8">
            <div className=" font-bold text-2xl">
              Paul <span className=" text-blue-700">DEV</span>
            </div>
            <div className=" w-1/3">
              {/* Search component */}
              <Search setSearch={(search) => setSearch(search)} />
            </div>
          </div>
          <div>{/* Table component */}</div>
          <div>{/* Sort component */}</div>
          <div>{/* Dept. filter component */}</div>
        </div>
        <div>{/* Pagination component */}</div>
      </div>
    </>
  );
}

export default App;
