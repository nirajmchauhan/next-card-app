"use client";

import { useTransition } from "react";
import { dislike, like } from "./actions";

export default function Likes({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  return (
    <>
      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
        <button
          onClick={() => startTransition(() => like(id))}
          className="inline-block align-middle transition duration-100 ease transform hover:scale-150"
        >
          👍🏼
        </button>
      </span>
      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
        <button
          onClick={() => startTransition(() => dislike(id))}
          className="inline-block align-middle transition duration-100 ease transform hover:scale-150"
        >
          👎🏼
        </button>
      </span>
    </>
  );
}
