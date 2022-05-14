import React from "react";
import MyHead from "../../components/MyHead";
import GithubProfile from "../../projects/GithubProfile/GithubProfile";

export default function GithubProfileApp() {
  const data = {
    name: "Github Profile",
    preview: "/projects/github-profile.png",
  };
  return (
    <>
      <MyHead data={data} />
      <GithubProfile />
    </>
  );
}
