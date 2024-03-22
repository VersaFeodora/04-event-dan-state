import Image from "next/image";
import Tombol1 from "@/components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto">
        <h2>Kuis Kota</h2>
        <Tombol1 />
      </div>
    </main>
  );
}
