import { Request, Response } from 'express';

export const createProject = (req: Request, res: Response) => {
    const { name, description } = req.body;
    // Lógica para crear proyecto en MongoDB
    res.status(201).json({ message: "Project created" });
};
