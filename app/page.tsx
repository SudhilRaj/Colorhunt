'use client'

import { useState } from "react";
import ColorThief from "colorthief";
import Header from "./components/Header";
import DisplayImage from "./components/DisplayImage";

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState("");
  const [colorPalette, setColorPalette] = useState(null);

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();

    reader.onload = async (event) => {
      if (!event.target) return;
      const result: string = event.target.result as string;
      const img = new Image();

      // Wait for image to load
      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 10);
        // const dominantColor = colorThief.getColor(img);
        setUploadedImage(result);
        setColorPalette(colorPalette);
      };
      img.src = result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <section className="h-screen w-full bg-zinc-900">
      <Header uploadImage={uploadImage}/>

      <main className="py-10 flex items-center justify-center bg-zinc-900">
        <DisplayImage
          uploadedImage={uploadedImage}
          colorPalette={colorPalette}
        />
      </main>
    </section>
  )
}