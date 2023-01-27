import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import UserDetailsTAble from "../Components/UserDetailsTAble";
import FlexComponent from "../Components/FlexComponent";
import EmptyCard from "../Components/EmptyCard";
import Pagenation from "../Components/Pagenation";

const UserProfile = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [dataall, setDataall] = useState([]);


  
  const fetchUsers = () => {
    fetch(`http://localhost:8080/?limit=10&page=${page}&filter=${filter}`)
      .then((response) => response.json())
      .then((data) => {

        setData(data);
      });
  };


  const fetchUsersall = () => {
    fetch(`http://localhost:8080/alldata?filter=${filter}`)
      .then((response) => response.json())
      .then((data) => {

        setDataall(data);
      });
  };
  useEffect(() => {
    fetchUsers();
    fetchUsersall();
  }, [page, filter]);

  useEffect(() => {
    fetchUsers();
    fetchUsersall();
  }, []);

  return (
    <div>
      <FlexComponent filter={filter} setFilter={setFilter} setPage={setPage} />

      {
        data.length == 0 ? <><EmptyCard /></>
          : <>
            <UserDetailsTAble page={page} setPage={setPage} data={data} number={Math.ceil(dataall.length / 10)} />
            <Pagenation currentpage={page} handlePage={setPage} totalPages={Math.ceil(dataall.length / 10)} />
          </>
      }
    </div>
  );
};

export default UserProfile;
