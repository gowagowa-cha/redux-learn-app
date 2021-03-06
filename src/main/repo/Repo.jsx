import React from "react";
import { Link } from "react-router-dom";
import "./Repo.css";

const Repo = ({ repo }) => {
  
  return (
    <div className="repo">
      <div className="repo_header">
        <div className="repo_header-name"><Link to={`/card/${repo.owner.login}/${repo.name}`}>{repo.name}</Link></div>
        <div className="repo_header-stars">Количество звезд: {repo.stargazers_count}</div>
      </div>

      <div className="repo_last-commit">Последний коммит: {repo.updated_at}</div>
      <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo-link">
        Ссылка на репозиторий: {repo.html_url}
      </a>
    </div>
  );
};

export default Repo;
