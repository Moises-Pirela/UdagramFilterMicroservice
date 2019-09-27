import { Router, Request, Response } from 'express';
import {filterImageFromURL, deleteLocalFiles} from '../../util/util';
import { filter } from 'bluebird';

const router: Router = Router();

//router.get('/', async (req: Request, res: Response) => {
//});

router.get('/filteredimage?image_url={{}}', async (req: Request, res: Response) => {
    let { image_url } = req.params;
    const item = await filterImageFromURL(image_url);
    res.sendFile(item);
});

export const FilterRouter: Router = router;