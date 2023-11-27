import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceService from "../services/LanceService";

class LanceController{
    constructor(){

    }

    async listLance(req: Request, res: Response){
        const lances = LanceService.listLance();
        res.status(200).json({
            status: 'ok',
            lances: lances
        })
    }

    async createLance(req: Request, res: Response){
        const dadosLance : Prisma.LanceCreateInput = req.body;

        if(dadosLance.comprador !== "" && dadosLance.id !== ""){
            const newLance = await LanceService.createLance(dadosLance);
            res.status(200).json({
                status: 'ok',
                newLance: newLance
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Por favor insira os dados de lance novamente no campo de requisição'
            })
        }
    }

    async updateLance(req: Request, res: Response){
        res.send('Update lance');
    }

    async deleteLance(req: Request, res: Response){
        res.send('Delete lance');
    }
}

export default new LanceController;