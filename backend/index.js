import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import router from "./route/DatabaseRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(router)

app.listen(5000, ()=> console.log('Server Up and Running...'));