import { IServices } from 'src/services';
import { Request, Response } from 'express';

export interface MyContext {
  res: Response;
  req: Request;
  services: IServices;
}

export type Note = { id: string; text: string; date: string };
export type Resolver = (parent: any, args: any, context: MyContext, info: any) => any;
export interface ResolverMap {
  [key: string]: {
    [key: string]: Resolver;
  };
}

export type ID = { id: string };
export type NoteAddInput = { text: string };
