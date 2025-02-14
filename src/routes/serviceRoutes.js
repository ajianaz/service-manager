import { ServiceController } from "../controllers/ServiceController.js";

export default async function (fastify) {
    fastify.get("/services", ServiceController.getAll);
    fastify.get("/services/:id/status", ServiceController.checkStatus);
}
