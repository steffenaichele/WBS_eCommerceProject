import express from "express";
import "#db";

const port = process.env.PORT;
const app = express();

app.get("/", (req: any, res: any) => {
	res.send("Moingiorno World!");
});

app.listen(port, () => {
	console.log(`Server feuert ab auf Port http://localhost:${port} 🔥`);
});
