import React from "react";
import SearchUser from "./SearchUser";
import UserCard from "./UserCard";
import Navbar from "../../components/Navbar";
import { GithubProfileProvider } from "./GithubProfileContext";

export default function GithubProfile() {
  return (
    <GithubProfileProvider>
      <div className=" project-box max-w-[768px]">
        <Navbar projectName="Github Profiles" />
        <SearchUser />
        <UserCard />
      </div>
    </GithubProfileProvider>
  );
}
