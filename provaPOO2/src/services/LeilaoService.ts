import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class LeilaoService{
    constructor(){

    }

    async listLeilao(id?: string){
        try{
            if(id){
                const leilao = await prisma.leilao.findUnique({
                    where: {
                        id
                    }
                });
                return leilao
            }else{
                const leiloes = await prisma.leilao.findMany();
                return leiloes
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createLeilao(leilao: Prisma.LeilaoCreateInput){
        try{
            const newLeilao = await prisma.leilao.create({
                data: leilao
            });
            return newLeilao
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateLeilao(id: string, leilao: Prisma.LeilaoCreateInput){
        try{
            const updateLeilao = await prisma.leilao.update({
                where: {
                    id
                },
                data: leilao
            });
            return updateLeilao
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteLeilao(id: string){
        try{
            const deleteLeilao = await prisma.leilao.delete({
                where: {
                    id
                }
            });
            return deleteLeilao
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LeilaoService;