import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Breadcrumb from "../src/components/breadcrumb";
import SearchFilter from "../src/components/homePage/searchfilter";
import TableUsers from "../src/components/homePage/tableUsers";
import { initState } from "../src/constants/keys";
import { fetchUsers } from "../src/store/actions/home";

const pathName = {
  parent: "Home",
  child: "Example Page",
  route: "/",
};

export default function Home() {
  const dispatch = useDispatch();
  const [tableQuery, setTableQuery] = useState(initState);
  useEffect(() => {
    dispatch(fetchUsers(tableQuery));
  }, [tableQuery]);
  return (
    <>
      <Head>
        <title>Table Search & Filter</title>
        <meta name="description" content="Table Search & Filter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-4">
        <Breadcrumb pathName={pathName} />
        <h1 className="text-4xl font-bold mt-5">Table Search & Filter</h1>
        <SearchFilter tableQuery={tableQuery} setTableQuery={setTableQuery} />
        <TableUsers tableQuery={tableQuery} setTableQuery={setTableQuery} />
      </main>
    </>
  );
}
