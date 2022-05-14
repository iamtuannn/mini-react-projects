import Link from "next/link";
import MyHead from "../components/MyHead";
import { projects } from "../utils/config";

export default function Home() {
  const data = {
    name: "Mini React Projects",
    preview: "/preview.jpg",
  };

  return (
    <>
      <MyHead data={data} />
      <div className=" project-box max-w-[768px]">
        <div className=" bg-box-00 min-h-[50vh] p-12 rounded-xl">
          {projects.map((project) => (
            <Link href={project.href} key={project.name}>
              <div className=" border-base p-2 rounded mt-6 cursor-pointer">
                <p className=" text-center">{project.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
