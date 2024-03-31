import { BACKEND_URL } from "@repo/common/config";
import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.json({
        message: BACKEND_URL
    });
})
app.listen(3003)