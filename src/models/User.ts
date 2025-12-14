import { Schema, model } from "mongoose";
import { minLength } from "zod";

const UserSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true, minLength: 6 },
	},
	{ timestamps: true }
);

export default model("User", UserSchema);
