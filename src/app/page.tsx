import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-center flex justify-center py-24 text-lg">
        <Link href="/posts/1">Goto Dog Post</Link>
      </div>
    </>
  );
}
