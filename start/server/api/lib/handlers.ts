import { fruits } from "./fruits";
import { Request, Response } from "express";

type RequestHandler = (request: Request, response: Response) => void;

export const postFruit: RequestHandler = (
  request: Request,
  response: Response
) => {
  const { food } = request.body;
  if (!food) {
    response.status(400).json({ error: "food property not in body" });
    return;
  }
  if (typeof food !== "string") {
    response.status(400).json({ error: "food property must be a string" });
    return;
  }
  fruits.data.push(food);
  response.status(201).json({ message: "food added" });
};

export const healthCheck: RequestHandler = (
  _request: Request,
  response: Response
) => {
  response.status(200).json({ message: "it is alive!" });
};

export const getFruits: RequestHandler = (
  _request: Request,
  response: Response
) => {
  console.log(_request.query);
  response.status(200).json({ fruits });
};

export const getFruitById: RequestHandler = (
  request: Request,
  response: Response
) => {
  const id = parseInt(request.params.id);
  const aFruit = fruits.data[id];
  if (!aFruit) {
    response.status(400).json({ error: "food not found" });
  } else {
    response.status(200).json({ fruit: aFruit });
  }
};

// ------
//
//
//
//
//
//
//
//
// -----
