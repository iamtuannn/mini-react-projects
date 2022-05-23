import { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import Comboboxes from "../components/Comboboxes";
import { Context } from "../components/Context";
import MyHead from "../components/MyHead";
import dbConnect from "../lib/dbConnect";
import MiniProject from "../models/MiniProject";
import SweetAlert from "../models/SweetAlert";
import Link from "next/link";

export default function Index({ projectsList, adminCode }) {
  const data = {
    name: "Mini React Projects",
    preview: "/preview.png",
  };

  const alertWarning = new SweetAlert();
  const alertError = new SweetAlert();
  const alertSuccess = new SweetAlert();
  alertError.icon = "error";
  alertSuccess.icon = "success";
  alertSuccess.confirmButtonText = "OK";
  alertSuccess.showCancelButton = false;
  alertSuccess.timer = 1500;

  const contentType = "application/json";

  const { isAdmin, setAdmin } = useContext(Context);
  const [inputAdmin, setInputAdmin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputAdmin === adminCode) {
      return setAdmin(true);
    }

    return alert("Invalid Code");
  };

  const [projects, setProjects] = useState(projectsList);
  const [project, setProject] = useState(projects[0]);

  const getProjects = () =>
    fetch("/api/mini-projects")
      .then((res) => res.json())
      .then((res) => res.projects.reverse())
      .then((res) => {
        setProjects(res);
        setProject(res[0]);
      });

  const initialInput = {
    _id: "",
    name: "",
    website: "",
    preview: "",
  };

  const [input, setInput] = useState({
    _id: project._id,
    name: project.name,
    website: project.website,
    preview: project.preview,
  });

  const formData = {
    name: input.name.replace(/\s+/g, " ").trim(),
    website: input.website.replace(/\s+/g, " ").trim(),
    preview: input.preview.replace(/\s+/g, " ").trim(),
  };

  useEffect(() => {
    setInput({
      _id: project._id,
      name: project.name,
      website: project.website,
      preview: project.preview,
    });
  }, [project]);

  const reset = () => setInput(initialInput);

  const createProject = async () => {
    if (
      input._id !== "" ||
      input.name.trim() === "" ||
      input.website.trim() === "" ||
      input.preview.trim() === ""
    ) {
      return Swal.fire({ ...alertWarning });
    }

    try {
      await fetch(`/api/mini-projects`, {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(formData),
      });

      alertSuccess.title = "Create Success";
      Swal.fire({
        ...alertSuccess,
        didDestroy: getProjects(),
      });
    } catch (error) {
      console.log("Error: ", error);
      alertError.title = "Failed to create new project";
      return Swal.fire({ ...alertError });
    }
  };

  const updateProject = async () => {
    if (
      input._id === "" ||
      input.name.trim() === "" ||
      input.website.trim() === "" ||
      input.preview.trim() === ""
    ) {
      return Swal.fire({ ...alertWarning });
    }

    console.log(formData);

    alertWarning.title = `Do you want to update ${formData.name}`;

    Swal.fire({ ...alertWarning }).then(async (res) => {
      if (res.isConfirmed) {
        try {
          await fetch(`/api/mini-projects/${input._id}`, {
            method: "PUT",
            headers: {
              Accept: contentType,
              "Content-Type": contentType,
            },
            body: JSON.stringify(formData),
          });

          alertSuccess.title = "Update Success";
          Swal.fire({
            ...alertSuccess,
            didDestroy: getProjects(),
          });
        } catch (error) {
          console.log("Error: ", error);
          alertError.title = `Failed to update ${formData.name}`;
          return Swal.fire({ ...alertError });
        }
      }
    });

    document.body.style.paddingRight = 0;
  };

  const deleteProject = async () => {
    if (input._id === "") {
      return Swal.fire({ ...alertWarning });
    }

    alertWarning.title = `Do you want to delete ${formData.name}`;

    Swal.fire({ ...alertWarning }).then(async (res) => {
      if (res.isConfirmed) {
        try {
          await fetch(`/api/mini-projects/${input._id}`, {
            method: "Delete",
          });

          alertSuccess.title = "Delete Success";
          Swal.fire({
            ...alertSuccess,
            didDestroy: getProjects(),
          });
        } catch (error) {
          console.log("Error: ", error);
          alertError.title = `Failed to delete ${formData.name}`;
          Swal.fire({ ...alertError });
        }
      }
    });

    document.body.style.paddingRight = 0;
  };

  const Input = ({ label, value, onChange, disabled = false }) => (
    <>
      <label className=" mr-4 w-[75px]">{label}: </label>
      <input
        type="text"
        value={value}
        disabled={disabled}
        onChange={onChange}
        className="w-full p-2 outline-none rounded-md text-black disabled:bg-box-01 disabled:text-white disabled:opacity-50 mb-2 disabled:cursor-pointer"
      />
    </>
  );

  const Button = ({ content, onClick }) => (
    <div className=" flex-center">
      <button
        onClick={onClick}
        className=" bg-transparent border-base rounded-md shadow-password cursor-pointer"
      >
        <p className=" px-4 py-1 text-xl md:text-2xl text-center">{content}</p>
      </button>
    </div>
  );

  const Login = () => (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter admin code"
        value={inputAdmin}
        onChange={(e) => setInputAdmin(e.target.value)}
        className="w-[300px] p-2 outline-none rounded-md text-black"
      />
    </form>
  );

  return (
    <>
      <MyHead data={data} />
      <div className=" project-box max-w-[500px]">
        {isAdmin ? (
          <div className=" bg-box-00 p-4 rounded-xl">
            <Comboboxes
              selected={project}
              setSelected={setProject}
              projects={projects}
            />
            <form className=" w-full mt-4">
              <Link href={`/projects/${input.website}`}>
                <a>
                  {Input({
                    label: "Project ID",
                    value: input._id,
                    disabled: true,
                  })}
                </a>
              </Link>
              {Input({
                label: "Project Name",
                value: input.name,
                inputKey: "name",
                onChange: (e) => setInput({ ...input, name: e.target.value }),
              })}
              {Input({
                label: "Project Website",
                value: input.website,
                onChange: (e) =>
                  setInput({ ...input, website: e.target.value }),
              })}
              {Input({
                label: "Project Preview",
                value: input.preview,
                onChange: (e) =>
                  setInput({ ...input, preview: e.target.value }),
              })}
            </form>
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
              {Button({ content: "Create", onClick: createProject })}
              {Button({ content: "Update", onClick: updateProject })}
              {Button({ content: "Reset", onClick: reset })}
              {Button({ content: "Delete", onClick: deleteProject })}
            </div>
          </div>
        ) : (
          Login()
        )}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const adminCode = process.env.ADMIN;

  /* find all the data in our database */
  const result = await MiniProject.find({});
  const projectsList = result.reverse().map((doc) => {
    const project = doc.toObject();
    project._id = project._id.toString();
    return project;
  });

  return { props: { projectsList, adminCode } };
}
