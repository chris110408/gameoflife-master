/**
 * Created by leichen on 2017/2/26.
 */
/**
 * Created by leichen on 2017/2/13.
 */
import { Router } from 'express';
import * as TeamController from '../controllers/team.controller';
const router = new Router();

// Get all Posts
router.route('/teams').get(TeamController.getTeams);

// Get one post by cuid
router.route('/teams/:cuid').get(TeamController.getTeam);

// Add a new Post
router.route('/teams').post(TeamController.addTeam);

// Delete a post by cuid
router.route('/teams/:cuid').delete(TeamController.deleteTeam);

export default router;
