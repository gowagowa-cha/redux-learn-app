import React from "react";
import "./card.css";
import { Link, useParams } from "react-router-dom";
import { getContributers, getCurrentRepo } from "../actions/repos";
import { setReposAction } from "../redux/reposReducer";

const Card = (props) => {
  const { username, reponame } = useParams();
  console.log(username, reponame);
  const [repo, setRepo] = React.useState({ owner: {} });
  const [contributers, setContributers] = React.useState([]);
  console.log(repo.owner.avatar_url);

  React.useEffect(() => {
    getCurrentRepo(username, reponame, setReposAction);
    getContributers(username, reponame, setContributers);
  }, []);

  return (
    <div>
      <button className="back-btn">
        <Link to="/">Back</Link>
      </button>
      <div className="card">
        <img src={repo.owner.avatar_url} alt="" />
        <div className="name">{repo.name}</div>
        <div className="stars">{repo.stargazers_count}</div>
      </div>
      {contributers.map((el, index) => (
        <div>
          {index + 1}. {el.login}
        </div>
      ))}
    </div>
  );
};

export default Card;
