import { useSelector } from "react-redux";
import { formatDate } from "../../../constants/utility";
import { BiSortAlt2 } from "react-icons/bi";
import { headerTableUser } from "../../../constants/keys";

const TableUsers = ({ setTableQuery, tableQuery }) => {
  const { results, info } = useSelector((state) => state.home.users);
  const pages = [...Array(info?.totalPage || 3).keys()].map((p) => p + 1);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full ">
          <thead>
            <tr>
              <th></th>
              {headerTableUser?.map((item, index) => {
                return (
                  <th key={index}>
                    <span
                      className="flex gap-2 cursor-pointer"
                      onClick={() => {
                        setTableQuery({
                          ...tableQuery,
                          sort: {
                            sortBy: item.name,
                            sortOrder:
                              tableQuery?.sort?.sortOrder === "ascend"
                                ? "descend"
                                : "ascend",
                          },
                        });
                      }}
                    >
                      {item.label}
                      <BiSortAlt2 className="mt-1" />
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {results?.map((item, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1 + (info?.page - 1) * 10}</th>
                  <td>{item.login?.username}</td>
                  <td>
                    {item.name?.first} {item.name?.last}
                  </td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{formatDate(item.registered?.date)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="btn-group my-2 justify-center ">
        <button
          className="btn btn-sm"
          onClick={() => {
            if (tableQuery.page > 1) {
              setTableQuery({ ...tableQuery, page: tableQuery.page - 1 });
            }
          }}
          disabled={tableQuery.page > 1 ? false : true}
        >
          Prev
        </button>
        {pages.map((page, index) => (
          <button
            className={`btn btn-sm ${page == tableQuery.page && "btn-active"} `}
            onClick={() => setTableQuery({ ...tableQuery, page: page })}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="btn btn-sm"
          disabled={tableQuery.page >= pages.length ? true : false}
          onClick={() => {
            if (tableQuery.page != pages.length) {
              setTableQuery({ ...tableQuery, page: tableQuery.page + 1 });
            }
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default TableUsers;
