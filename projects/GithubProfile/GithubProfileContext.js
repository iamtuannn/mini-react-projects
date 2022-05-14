import axios from "axios";
import { createContext, useState, useEffect } from "react";

const GithubProfileContext = createContext();

const GithubProfileProvider = ({ children }) => {
  const [user, setUser] = useState({
    info: {},
    repos: [],
  });

  const [isError, setError] = useState(true);

  const [username, setUsername] = useState("tuanhngf");

  const { info, repos } = user;

  useEffect(() => {
    (async () => {
      try {
        const info = await axios.get(
          `https://api.github.com/users/${username}`
        );

        const repos = await axios.get(
          `https://api.github.com/users/${username}/repos?sort=updated`
        );

        setUser({ info: info.data, repos: repos.data });
        setError(false);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    })();
  }, [username]);

  return (
    <GithubProfileContext.Provider
      value={{ info, repos, isError, setUsername }}
    >
      {children}
    </GithubProfileContext.Provider>
  );
};

export { GithubProfileContext, GithubProfileProvider };
