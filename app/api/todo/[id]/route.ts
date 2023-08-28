import db from "@/utils/db";
import { NextResponse } from "next/server";

interface IParams {
  params: {
    id: string;
  };
}

export const GET = async (_request: Request, { params }: IParams) => {
  const data = await db.todo.findUnique({ where: { id: params.id } });

  return NextResponse.json({ data });
};

export const DELETE = async (_request: Request, { params }: IParams) => {
  const todo = await db.todo.delete({ where: { id: params.id } });

  return NextResponse.json({ data: todo });
};
