import mongoose from 'mongoose';

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/appname');
