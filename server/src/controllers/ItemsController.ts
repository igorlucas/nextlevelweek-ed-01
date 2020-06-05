import knex from '../db/connection';
import {Request, Response} from 'express';

class ItemsController {

    async index (req: Request, res: Response){
        const items = await knex('items').select('*');
        const serializedItems = items.map(i => {
            return {
                id: i.id,
                titulo: i.title,
                imagem_url: `http://localhost:3333/uploads/${i.image}`
            }
        });
        return res.json(serializedItems);
    };
}
export default ItemsController;