import mongoose from 'mongoose';

export const Request = mongoose.model('Request', {
    value: String
});
