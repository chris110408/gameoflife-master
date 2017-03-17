/**
 * Created by leichen on 2017/2/26.
 */

import Team from '../models/team';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all teams
 * @param req
 * @param res
 * @returns void
 */
export function getTeams(req, res) {
    Team.find().sort('-dateAdded').exec((err, teams) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json({ teams });
    });
}

/**
 * Save a team
 * @param req
 * @param res
 * @returns void
 */
export function addTeam(req, res) {
    if (!req.body.team.name || !req.body.team.security) {
        res.status(403).end();
    }

    const newTeam = new Team(req.body.team);

    // Let's sanitize inputs

    newTeam.name = sanitizeHtml(newTeam.name);
    newTeam.security = sanitizeHtml(newTeam.content);

    newTeam.slug = slug(newTeam.name.toLowerCase(), { lowercase: true });
    newTeam.cuid = cuid();
    console.log(newTeam.name)
    console.log(newTeam.cuid)
    newTeam.save((err, saved) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json({ team: saved });
    });
}

/**
 * Get a single team
 * @param req
 * @param res
 * @returns void
 */
export function getTeam(req, res) {
    Team.findOne({ cuid: req.params.cuid }).exec((err, post) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json({ post });
    });
}

/**
 * Delete a team
 * @param req
 * @param res
 * @returns void
 */
export function deleteTeam(req, res) {
    Team.findOne({ cuid: req.params.cuid }).exec((err, team) => {
        if (err) {
            res.status(500).send(err);
        }

        team.remove(() => {
            res.status(200).end();
        });
    });
}
