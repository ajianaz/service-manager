import Fastify from "fastify";
import dotenv from "dotenv";
import serviceRoutes from "./routes/serviceRoutes.js";

dotenv.config();

const app = Fastify({ logger: true });

// Register Routes
app.register(serviceRoutes);

export default app;
