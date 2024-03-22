import Image from "next/image";
import Tombol1, { Tombol2, Tombol3 } from "@/components/button";
import Gallery from "@/components/gallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto">
        <h2>Kuis Kota</h2>
        <Tombol1 />
        <hr /><hr />
        <div>
          <Tombol2 isiPesan="Ini Pesanku" namaTombol="Pesan"/>
          <Tombol3 isiPesan="Child Element : Tombol-1" namaTombol="Tombol-1"/>
          <Tombol3 isiPesan="Child Element : Tombol-2" namaTombol="Tombol-2"/>
        </div>
        <hr /><hr />
        <Gallery />
      </div>
    </main>
  );
}

