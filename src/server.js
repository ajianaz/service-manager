import app from "./app.js";
import checkServices from "./workers/HealthCheckWorker.js";

const PORT = process.env.PORT || 3001;

app.listen({ port: PORT }, () => {
    console.log(`Service Manager running on port ${PORT}`);
});

// Start Health Check Worker
checkServices();
