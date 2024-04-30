import React from 'react'
import Link from 'next/link';

type UploadImageFunction = (e: React.ChangeEvent<HTMLInputElement>) => void;

const Header = ({uploadImage}: {uploadImage: UploadImageFunction}) => {
   return (
      <header className="p-4 md:p-8 w-full min-h-1/10 bg-zinc-900 flex items-center justify-between gap-12">
        <Link href="/" className="font-extrabold bg-gradient-to-r from-blue-500 to-orange-400 text-transparent bg-clip-text text-shadow-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Color-hunt</Link>

        <div className="flex justify-center items-center">
          <label htmlFor="file" className="p-2 border-[1px] rounded-lg border-white bg-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-orange-400 px-4 cursor-pointer flex items-center justify-center gap-4">Upload Image</label>
          <input type="file" id="file" accept="image/*" hidden onChange={uploadImage} />
        </div>
      </header>  
   )
}

export default Header;