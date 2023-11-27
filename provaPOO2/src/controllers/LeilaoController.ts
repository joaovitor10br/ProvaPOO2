import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LeilaoService from "../services/LeilaoService";

class LeilaoController{
    constructor(){

    }

    async listLeilao(req: Request, res: Response){
        const leiloes = LeilaoService.listLeilao();
        res.status(200).json({
            status: 'ok',
            leiloes: leiloes
        })
    }

    async createLeilao(req: Request, res: Response){
        const dadosLeilao : Prisma.LeilaoCreateInput = req.body;

        if(dadosLeilao.dono !== "" && dadosLeilao.produto !== ""){
            const newLeilao = await LeilaoService.createLeilao(dadosLeilao);
            res.status(200).json({
                status: 'ok',
                newLeilao: newLeilao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Por favor insira os dados do leilão novamente no campo de requisição'
            })
        }
    }

    async updateLeilao(req: Request, res: Response){
        res.send('Update leilão');
    }

    async deleteLeilao(req: Request, res: Response){
        res.send('Delete leilão');
    }
}

export default new LeilaoController;