/**
 * Created by leichen on 2017/2/26.
 */
const path = require('path');

export function getRooms(req, res) {
        console.log('1')
        res.sendFile(path.join(__dirname, '../../room.html'));

}