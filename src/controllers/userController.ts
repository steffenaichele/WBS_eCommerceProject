import { Request, Response } from "express";
import { User } from "../models/User";

export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.find().select("-password");
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: "Server Fehler" });
	}
};

export const createUser = async (req: Request, res: Response) => {
	try {
		const user = new User(req.body);
		await user.save();
		const userResponse = user.toObject();
		delete userResponse.password;
		res.status(201).json(userResponse);
	} catch (error) {
		res.status(400).json({ message: "Fehler beim Erstellen" });
	}
};

// Weitere Funktionen: getById, update, delete
export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id).select("-password");