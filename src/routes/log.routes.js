import express from "express"
import { getAllData } from "../controllers/main.controller.js"

const router  = express.Router()


router.get("/", getAllData)
