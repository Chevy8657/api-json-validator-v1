import express from "express";

const app = express();
app.use(express.json());

app.post("/v1/validate-json", (req, res) => {
  const { input } = req.body;

  if (typeof input !== "string") {
    return res.json({ valid: false, error: "Input must be a string" });
  }

  try {
    JSON.parse(input);
    return res.json({ valid: true, error: null });
  } catch (e) {
    return res.json({ valid: false, error: e.message });
  }
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`JSON Validator running on port ${port}`);
});
