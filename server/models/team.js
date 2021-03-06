/**
 * Created by leichen on 2017/2/26.
 */
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: { type: 'String', required: true },
    security: { type: 'String', required: true },
    slug: { type: 'String', required: true },
    cuid: { type: 'String', required: true },
    dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Team', teamSchema);
