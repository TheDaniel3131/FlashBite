import { model, models, Schema } from 'mongoose';

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {
        type: String, 
        required: true, 
        validate: pass => {
           if (!pass?.length || pass.length < 5){
            throw new Error('Password must be minimum 5 characters.')
           }
        // validate: function() {
        //    if (!this.password?.length || this.password.length < 5){
        //     throw new Error('Password must be minimum 5 characters.')
        //    }
        },
    },
}, {timestamps: true});

// Not working because no document

// UserSchema.pre('save', (next, ...rest) => {
//     console.log(rest);
//     next();
// })

export const User = models?.User || model('User', UserSchema);
