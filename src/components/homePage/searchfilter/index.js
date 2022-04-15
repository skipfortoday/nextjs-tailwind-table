import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { genderOptions, initState } from "../../../constants/keys";
import { fetchUsers } from "../../../store/actions/home";

const SearchFilter = ({ setTableQuery, tableQuery }) => {
  const [gender, setGender] = useState(false);
  const [querySearch, setQuerySearch] = useState(false);
  const dispatch = useDispatch();
  const handleFilter = (gender) => {
    if (gender) {
      setGender(gender);
      dispatch(
        fetchUsers({
          page: 1,
          pageSize: 3,
          results: 10,
          inc: "gender,name,username,email,registered,login",
          page: 1,
          gender: gender,
        })
      );
    } else {
      setGender(false);
      setQuerySearch(false);
      dispatch(fetchUsers(initState));
    }
  };

  useEffect(() => {
    const timeOutId = setTimeout(
      () => setTableQuery({ ...tableQuery, keyword: querySearch }),
      500
    );
    return () => clearTimeout(timeOutId);
  }, [querySearch]);

  return (
    <div className=" m-5 flex gap-2">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Search</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered  input-sm w-full max-w-xs"
          value={querySearch ? querySearch : ""}
          onChange={(e) => setQuerySearch(e.target.value)}
          data-cy="search"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Filter by gender</span>
        </label>
        <select
          className="select select-bordered select-sm"
          onChange={(e) => {
            handleFilter(e.target.value);
          }}
          value={gender}
          data-cy="filter"
        >
          <option value={false}>All</option>
          {genderOptions?.map((item, index) => {
            return (
              <option key={index} value={item.value} data-cy={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
      <button
        className="btn align-bottom h-full btn-sm mt-9"
        onClick={() => handleFilter()}
        data-cy="reset"
      >
        Reset
      </button>
    </div>
  );
};

export default SearchFilter;
