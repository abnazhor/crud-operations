import mongoose from "mongoose";

export default async () => {
    const url = "mongodb://localhost:27017/consumption";
    const connection = await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    global.mongoose = mongoose;
}