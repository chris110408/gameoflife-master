/**
 * Created by leichen on 2017/2/26.
 */
import Team from './models/team';

export default function () {
    Team.count().exec((err, count) => {
        if (count > 0) {
            return;
        }




        const team1 = new Team({ name: 'chris test', security: 1, slug: 'hello-chris', cuid: 'cikqgkv4q01ck7453ualdn3hd' });
        const team2 = new Team({ name: 'my best team', security: 1, slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf' });

        Team.create([team1, team2], (error) => {
            if (!error) {
                // console.log('ready to go....');
            }
        });
    });
}
