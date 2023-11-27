import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserService{
    constructor(){

    }

    async listUser(id?: string){
        try{
            if(id){
                const user = await prisma.user.findUnique({
                    where: {
                        id
                    }
                });
                return user
            }else{
                const users = await prisma.user.findMany();
                return users
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createUser(user: Prisma.UserCreateInput){
        try{
            const users = await prisma.user.create({
                data: user
            });
            return users
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateUser(id: string, user: Prisma.UserCreateInput){
        try{
            const updateUser = await prisma.user.update({
                where: {
                    id
                },
                data: user
            });
            return updateUser
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteUser(id: string){
        try{
            const deleteUser = await prisma.user.delete({
                where: {
                    id
                }
            });
            return deleteUser
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new UserService;