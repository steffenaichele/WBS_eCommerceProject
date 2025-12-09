import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
	name: string;
	description: string;
	price: number;
	categoryId: mongoose.Types.ObjectId;
}

const ProductSchema = new Schema<IProduct>(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		price: { type: Number, required: true },
		categoryId: {
			type: Schema.Types.ObjectId,
			ref: "Category",
			required: true,
		},
	},
	{ timestamps: true }
);

export const Product = mongoose.model<IProduct>("Product", ProductSchema);
