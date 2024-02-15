import express from "express";
import { addData ,getAll,AddRating , updatedData} from "../controller/employee.js"

const router =express.Router();


router.post("/",addData);
router.get("/",getAll);
router.put("/:id",AddRating);
router.put("/edit/:id",updatedData)

export default router;