import { Request, Response } from 'express';

export const createTask = (req: Request, res: Response) => {
    const { title, assignedTo } = req.body;
    // Lógica para crear tarea en MongoDB
    res.status(201).json({ message: "Task created" });
};
