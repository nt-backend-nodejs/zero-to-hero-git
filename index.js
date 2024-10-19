import express from "express"
import { router } from "./src/routes/log.routes.js"
const app = express()

app.use(express.json())

app.use("/users", router)


app.listen(3000, () => {
    console.log("server is running in 3000 port");
})