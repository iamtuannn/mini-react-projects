import dbConnect from "../../../lib/dbConnect";
import cors from "../../../lib/cors";
import MiniProject from "../../../models/MiniProject";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await cors(req, res);

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const project = await MiniProject.findById(id);
        if (!project) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json(project);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const project = await MiniProject.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!project) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json(project);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedProject = await MiniProject.deleteOne({ _id: id });
        if (!deletedProject) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
