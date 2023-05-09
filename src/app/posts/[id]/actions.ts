"use server";

import kv from "@vercel/kv";
import { revalidatePath } from "next/cache";

export async function like(id: string) {
  await kv.incr(`post:${id}:likes`);
  revalidatePath(`/posts/${id}`);
}

export async function dislike(id: string) {
  await kv.decr(`post:${id}:likes`);
  revalidatePath(`/posts/${id}`);
}
