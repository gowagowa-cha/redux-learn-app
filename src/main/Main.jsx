import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../actions/repos";
import "./Main.css";
import Repo from "./repo/Repo";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { setCurrentPageAction } from "../redux/reposReducer";
import { createPages } from "../utils/createPages";

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);
  const isFetching = useSelector((state) => state.repos.isFetching);
  const currentPage = useSelector((state) => state.repos.currentPage);
  const perPage = useSelector((state) => state.repos.perPage);
  const totalCount = useSelector((state) => state.repos.totalCount);
  const isFetchError = useSelector((state) => state.repos.isFetchError);
  const [searchValue, setSearchValue] = React.useState("");
  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = [];

  createPages(pages, pagesCount, currentPage);

  React.useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage));
  }, [currentPage]);

  const searchHandler = () => {
    dispatch(setCurrentPageAction(1));
    dispatch(getRepos(searchValue, currentPage, perPage));
  };

  return (
    <>
      {isFetchError && (
        <div class="alert alert-info" role="alert">
          Произошла ошибка! Пожалуйста перезагрузите страницу!
        </div>
      )}
      <form className="search">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
          type="text"
          placeholder="Input repo name ..."
        />
        <button onClick={() => searchHandler()} className="search-btn">
          Search
        </button>
      </form>
      <div>
        {isFetching === false ? (
          repos.map((repo) => <Repo key={repo.id} repo={repo} />)
        ) : (
          <>
            <Skeleton height={100} />
            <br />
            <Skeleton count={9} height={60} />
          </>
        )}
      </div>
      <div className="pages">
        {pages.map((page, index) => (
          <span
            className={currentPage === page ? "activ-page" : "page"}
            key={index}
            onClick={() => dispatch(setCurrentPageAction(page))}>
            {page}
          </span>
        ))}
      </div>
    </>
  );
};

export default Main;
