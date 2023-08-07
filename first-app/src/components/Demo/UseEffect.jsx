import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [toggle, setToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [counter, setCounter] = useState(0);
  const [repos, setRepos] = useState([]);
  //   useEffect(() => {
  //     console.log("Use effect works!");
  //     return () => {
  //       console.log("Clean up works!");
  //     };
  //   }, [counter]);

  useEffect(() => {
    let notifier = null;
    const fetchRepos = async () => {
      if (searchTerm.trim() !== "") {
        try {
          notifier = setTimeout(async () => {
            const resp = await fetch(
              `https://api.github.com/users/${searchTerm}/repos`
            );
            const repos = await resp.json();
            setRepos(repos);
          }, 1500);
        } catch (err) {
          console.error(err);
        }
      }
    };

    fetchRepos();

    return () => {
      clearTimeout(notifier);
    };
  }, [searchTerm]);

  return (
    <>
      <h1>UseEffect Demo</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <br />
      <button onClick={() => setToggle(!toggle)} className="btn btn-primary">
        Toggle
      </button>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-success"
      >
        {counter}
      </button>
      {toggle && <p>Toggle is true</p>}
      <hr />
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </>
  );
}
