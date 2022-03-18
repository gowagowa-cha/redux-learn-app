import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../actions/repos";
import "./Main.css";
import Repo from "./repo/Repo";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);
  const isFetching = useSelector((state) => state.repos.isFetching);

  React.useEffect(() => {
    dispatch(getRepos());
  }, []);

  return (
    <>
      <form className="search">
        <input className="search-input" type="text" placeholder="Input repo name ..." />
        <button className="search-btn">Search</button>
      </form>
      <div>
        {isFetching === false ? (
          repos.map((repo) => <Repo key={repo.id} repo={repo} />)
        ) : (
          <>
          <Skeleton height={100}/>
          <br />
          <Skeleton count={9} height={60}/>
          </>
        )}
      </div>
    </>
  );
};

export default Main;
