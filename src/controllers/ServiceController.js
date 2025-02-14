import { ServiceService } from "../services/ServiceService.js";
import { resSuccess, resError } from "../utils/ResponseHelper.js";

export class ServiceController {
    static async getAll(req, reply) {
        try {
            const services = await ServiceService.getServices();
            return resSuccess(reply, services);
        } catch (error) {
            return resError(reply, error);
        }
    }

    static async checkStatus(req, reply) {
        try {
            const { id } = req.params;
            const result = await ServiceService.checkServiceStatus(id);
            return resSuccess(reply, result);
        } catch (error) {
            return resError(reply, error, 404);
        }
    }
}
