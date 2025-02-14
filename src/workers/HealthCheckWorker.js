import { ServiceRepository } from "../repositories/ServiceRepository.js";
import axios from "axios";
import Redis from "ioredis";

const redis = new Redis();
const CHECK_INTERVAL = process.env.HEALTH_CHECK_INTERVAL || 300000; // Default 5 menit

async function checkServices() {
    const services = await ServiceRepository.getAll();

    for (const service of services) {
        try {
            const response = await axios.get(service.url, { timeout: 5000 });
            await redis.set(`service:${service.id}:status`, response.status === 200);
            await ServiceRepository.updateStatus(service.id, true);
        } catch (error) {
            await redis.set(`service:${service.id}:status`, false);
            await ServiceRepository.updateStatus(service.id, false);
        }
    }

    setTimeout(checkServices, CHECK_INTERVAL);
}

export default checkServices;
