import { ServiceRepository } from "../repositories/ServiceRepository.js";

export class ServiceService {
    static async getServices() {
        return await ServiceRepository.getAll();
    }

    static async checkServiceStatus(id) {
        const service = await ServiceRepository.getById(id);
        if (!service) throw new Error("Service not found");

        return { status: service.status, message: service.is_maintenance ? "Maintenance" : "OK" };
    }
}
