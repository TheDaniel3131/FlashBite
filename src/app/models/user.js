import { Schema } from 'mongoose';

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {
        type: String, 
        required: true, 
        validate: () => {
           if (!pass?.length || pass.length < 5){
            new Error('Password must be minimum 5 characters.')
           }
        },
    },
}, {timestamps: true});

export const User =  models?.user || model('User', UserSchema);
