const express = require("express");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Simulated in-memory storage
let measurements = [];

// ✅ GET: Fetch all measurements
app.get("/api/measurements", (req, res) => {
    res.json(measurements);
});

// ✅ POST: Add a new measurement
app.post("/api/measurements", (req, res) => {
    console.log("Received data:", req.body);

    if (!req.body.name || !req.body.value) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const newMeasurement = {
        id: measurements.length + 1, // Auto-increment ID
        name: req.body.name,
        value: req.body.value
    };

    measurements.push(newMeasurement);
    res.status(201).json({ message: "Measurement added successfully!", data: newMeasurement });
});

// ✅ DELETE: Remove a measurement by ID
app.delete("/api/measurements/:id", (req, res) => {
    const measurementId = parseInt(req.params.id);
    const index = measurements.findIndex(m => m.id === measurementId);

    if (index === -1) {
        return res.status(404).json({ error: "Measurement not found" });
    }

    measurements.splice(index, 1);
    res.json({ message: "Measurement deleted successfully!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
