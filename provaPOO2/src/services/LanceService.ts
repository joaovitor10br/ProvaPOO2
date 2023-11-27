import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class LanceService {
    constructor(){

    }
    
    async listLance(id?: string){
        try{
            if(id){
                const lance = await prisma.lance.findUnique({
                    where: {
                        id
                    }
                });
                return lance
            }else{
                const lances = await prisma.lance.findMany();
                return lances
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createLance(lance: Prisma.LanceCreateInput){
        try{
            const newLance = await prisma.lance.create({
                data: lance
            });
            return newLance
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateLance(id: string, lance: Prisma.LanceCreateInput){
        try{
            const updateLance = await prisma.lance.update({
                where: {
                    id
                },
                data: lance
            });
            return updateLance
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteLance(id: string){
        try{
            const deleteLance = await prisma.lance.delete({
                where: {
                    id
                }
            });
            return deleteLance
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LanceService;