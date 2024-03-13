import mongoose from 'mongoose';
import { User } from '@/app/models/user';

export async function POST(req){
     const body = await req.json();
     mongoose.connect(process.env.MONGO_URI);
     const createdUser = await User.create(body);
     return Response.json(createdUser);
     // Default testing response
     // return Response.json('This is a message from Flashbite API!');
}