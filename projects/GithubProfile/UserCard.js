import React, { useContext } from "react";
import { FaBuilding, FaLink, FaTwitter } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { GoRepo } from "react-icons/go";
import { GithubProfileContext } from "./GithubProfileContext";
import Image from "next/image";

export default function UserCard() {
  const { info, repos, isError } = useContext(GithubProfileContext);

  return (
    <>
      {!isError && (
        <div className=" bg-box-00 rounded-xl mt-4 p-4 w-full">
          <div className=" grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className=" flex gap-4 order-1">
              <div className=" h-20 w-20 rounded-full overflow-hidden">
                <Image
                  alt="avatar"
                  src={info.avatar_url}
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </div>
              <div className=" flex flex-col justify-around py-2">
                <p className=" text-3xl md:text-4xl mb-1">{info.name}</p>
                <a
                  href={info.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" italic text-xl"
                >
                  @{info.login}
                </a>
              </div>
            </div>
            <div className=" order-3 overflow-hidden w-full">
              <p className=" mb-2">{info.bio}</p>
              {info.location && (
                <div className=" flex items-center mb-2">
                  <HiLocationMarker className=" mr-2" />
                  <p> {info.location}</p>
                </div>
              )}
              {info.company && (
                <div className=" flex items-center mb-2">
                  <FaBuilding className=" mr-2" /> <p>{info.company}</p>
                </div>
              )}
              {info.twitter_username && (
                <div className=" flex items-center mb-2">
                  <FaTwitter className=" mr-2" />
                  <a
                    href={`https://twitter.com/${info.twitter_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {info.twitter_username}
                  </a>
                </div>
              )}
              {info.blog && (
                <div className=" flex items-center mb-2">
                  <FaLink className=" mr-2" />
                  <a href={info.blog} target="_blank" rel="noopener noreferrer">
                    {info.blog}
                  </a>
                </div>
              )}
            </div>
            <div className=" flex items-center order-2">
              <div className=" bg-box-01 flex justify-around rounded-lg p-2 w-full text-center">
                <p>
                  Repos
                  <span className=" block text-2xl">{info.public_repos}</span>
                </p>
                <p>
                  Followers
                  <span className=" block text-2xl">{info.followers}</span>
                </p>
                <p>
                  Following
                  <span className=" block text-2xl">{info.following}</span>
                </p>
              </div>
            </div>
            <div className=" order-4">
              {repos.slice(0, 5).map((repo) => (
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={repo.id}
                >
                  <div className=" flex items-center border-base mb-2 p-2 rounded-lg">
                    <GoRepo className=" mr-4" />
                    <p className=" break-all">{repo.name}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
