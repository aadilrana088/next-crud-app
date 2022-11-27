const MONGO_URI =
    'mongodb+srv://admin:admin@nextjscrud.bkqnkmw.mongodb.net/?retryWrites=true&w=majority';

import mongoose from 'mongoose';

let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}
const connectMongo = async () => {
    // console.log('Outside');
    // try {
    //     const { connection } = await mongoose.connect(MONGO_URI);
    //     if (connectMongo.readyState == 1) {
    //         console.log('Database Connected');
    //     }
    // } catch (errors) {
    //     Promise.reject(errors);
    //     console.log('ab');
    // }
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
            bufferMaxEntries: 0,
            useFindAndModify: true,
            useCreateIndex: true,
        };

        cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
            console.log('abc');
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
};

export default connectMongo;
