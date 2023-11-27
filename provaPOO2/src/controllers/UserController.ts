import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController{
    constructor(){

    }

    async listUser(req: Request, res: Response){
        const users = UserService.listUser();
        res.status(200).json({
            status: 'ok',
            users: users
        })
    }

    async createUser(req: Request, res: Response){
        const dados : Prisma.UserCreateInput = req.body;

        if(dados.email !== "" && dados.name !== ""){
            const newUser = await UserService.createUser(dados);
            res.status(200).json({
                status: 'ok',
                newUser: newUser
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Por favor insira seus dados novamente no campo de requisição'
            })
        }
    }

    async updateUser(req: Request, res: Response){
        res.send('Update user');
    }

    async deleteUser(req: Request, res: Response){
        res.send('Delete user');
    }
}

export default new UserController;