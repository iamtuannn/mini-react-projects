import dbConnect from "../../../lib/dbConnect";
import cors from "../../../lib/cors";
import MiniProject from "../../../models/MiniProject";

export default async function handler(req, res) {
  const { method } = req;

  await cors(req, res);

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const projects = await MiniProject.find(
          {}
        ); /* find all the data in our database */
        res
          .status(200)
          .json({ totalProjects: projects.length, projects: projects });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const project = await MiniProject.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: project });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
