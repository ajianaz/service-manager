import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ServiceRepository {
    static async getAll() {
        return prisma.service.findMany();
    }

    static async getById(id) {
        return prisma.service.findUnique({ where: { id } });
    }

    static async updateStatus(id, status) {
        return prisma.service.update({
            where: { id },
            data: { status },
        });
    }
}
