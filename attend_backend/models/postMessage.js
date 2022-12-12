import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    gender: String,
    group: String,
    caucassian: String,
    newcomer: String,

    forFamily: String,
    title: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model("postmessage", postSchema);

export default PostMessage;