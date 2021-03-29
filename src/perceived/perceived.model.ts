import * as mongoose from 'mongoose';

export const PerceivedSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  description: { type: String, required: true },
});

export interface Perceived extends mongoose.Document {
  id: string;
  userName: string;
  description: string;
}