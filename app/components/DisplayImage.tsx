import React from "react";
import Image from "next/image";
import Hero from "./Hero";
import ListItem from "./ListItem";
interface UploadedImageProps {
   uploadedImage: string | null;
   colorPalette: string[] | null;
}

const DisplayImage = ({ uploadedImage, colorPalette }: UploadedImageProps) => {
   const toHex = (rgb: string | number): string => {
      const hexValue = typeof rgb === "number" ? rgb.toString(16).padStart(2, "0") : rgb;
      return `${hexValue}`;
   };

   // Calculate relative luminance of a color
   const getRelativeLuminance = (r: number, g: number, b: number) => {
      // const hexColor = color.replace('#', '');
      // const [r, g, b] = hexColor.match(/.{1,2}/g).map((c) => parseInt(c, 16));

      // Calculate relative luminance
      const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
      return luminance;
   };

   return (
      <div className="flex items-center justify-center flex-col gap-8">
         <div>
            {uploadedImage ? (
               <div className="m-4 p-4 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center border-2 border-gray-500 rounded-md overflow-hidden transition-transform duration-200 ease-in-out hover:shadow-md">
                  <Image src={uploadedImage} alt="uploaded" className="w-full h-full object-contain object-center rounded-md" width={300} height={300} />
               </div>
            ) : (
               <Hero />
            )}
         </div>

         {colorPalette && <span className="text-2xl">Palette:</span>}
         {colorPalette && (
            <ul className="flex items-center justify-center flex-wrap gap-4">
               {colorPalette.map((color, index) => {
                  const rgb = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
                  const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(color[2])}`;
                  const luminance = getRelativeLuminance(parseInt(color[0]), parseInt(color[1]), parseInt(color[2]));
                  // console.log(rgb, hex);
                  return <ListItem key={index} rgb={rgb} hex={hex} luminance={luminance} />;
               })}
            </ul>
         )}
      </div>
   );
}

export default DisplayImage;