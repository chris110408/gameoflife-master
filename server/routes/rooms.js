/**
 * Created by leichen on 2017/2/26.
 */
import { Router } from 'express';
import * as RoomController from '../controllers/rooms';
const router = new Router();



// Get one post by cuid
router.route('/:cuid').get(RoomController.getRooms);


export default router;
