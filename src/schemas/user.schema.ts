import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  email!: string;
  @Prop()
  passwordHash!: string;
  @Prop()
  firstName!: string;
  @Prop()
  lastName!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
