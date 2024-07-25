import { Button } from "@/components/ui/button"

import Link from "next/link";
import Image from "next/image";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/navbar">
        <Button>hello world</Button>
      </Link>
    </main>
  );
}
