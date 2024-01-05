import Carousel from "@/components/carousel";
import { Avatar } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";

const index = () => {
  return (
    <div>
      {/* banner */}
      <div className="grid grid-cols-2 mt-20">
        <div className="col-span-1">
          <h2 className="text-[50px] text-secondary leading-[66px] font-light">WELCOME TO</h2>
          <h2 className="font-bold text-[96px] leading-[100px] text-secondary mb-[35px]">MyShoes</h2>
          <p className="font-normal text-[18px] leading-[30px] mb-[25px]">MyShoes merupakan toko sepatu online yang menjual berbagai macam sepatu, mulai dari sneakers, sepatu futsal, sepatu running, heels, dan berbagai macam sepatu lainnya.</p>
          <p className="font-normal text-[18px] leading-[30px] ">Tertarik untuk belanja di MyShoes? Langsung klik aja tombol di bawah ini</p>
          <button className="mt-3 button-reverse-border">Buat Akun</button>
        </div>
        <div className="col-span-1 flex justify-end">
          <div className="">
            <img src='/assets/home-banner.png' alt="sepatu " />
          </div>
        </div>
      </div>

      {/* Kategori */}
      <div>
        <h1 className="text-secondary h1">Kategori</h1>
        <div className="card-category">
          <Image src='/assets/home/kategori_1.png' width={500} height={400} alt="sepatu " />
          <p className="text-center mt-[25px] text-secondary text-[24px] font-medium">Sneaker</p>
        </div>
      </div>

      {/* Produk Unggulan */}
      <div className="mt-[60px]">
        <div className="flex justify-between items-center">
          <h1 className="h1 text-secondary">Produk Unggulan</h1>
          <Link href={"/catalog"} className="text-[18px] leading-[20px] underline text-black-primary underline-offset-2">Lihat lainnya</Link>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <Link href={"/menu"} className="card-product col-span-1">
            <div className="flex justify-center">
              <Image src='/assets/home/shoes.png' width={200} height={200} alt="sepatu " />
            </div>
            <div className="flex justify-between items-center mt-5">
              <p>Nike kyrie flytrap...</p>
              <BsCartPlus />
            </div>
            <div className="flex justify-between items-center mt-2">
              <p>Rp 1.150.000</p>
              <MdFavoriteBorder />
            </div>
          </Link>
          <Link href={"/menu"} className="card-product col-span-1">
            <div className="flex justify-center">
              <Image src='/assets/home/shoes.png' width={200} height={200} alt="sepatu " />
            </div>
            <div className="flex justify-between items-center mt-5">
              <p>Nike kyrie flytrap...</p>
              <BsCartPlus />
            </div>
            <div className="flex justify-between items-center mt-2">
              <p>Rp 1.150.000</p>
              <MdFavoriteBorder />
            </div>
          </Link>
          <Link href={"/menu"} className="card-product col-span-1">
            <div className="flex justify-center">
              <Image src='/assets/home/shoes.png' width={200} height={200} alt="sepatu " />
            </div>
            <div className="flex justify-between items-center mt-5">
              <p>Nike kyrie flytrap...</p>
              <BsCartPlus />
            </div>
            <div className="flex justify-between items-center mt-2">
              <p>Rp 1.150.000</p>
              <MdFavoriteBorder />
            </div>
          </Link>
          <Link href={"/menu"} className="card-product col-span-1">
            <div className="flex justify-center">
              <Image src='/assets/home/shoes.png' width={200} height={200} alt="sepatu " />
            </div>
            <div className="flex justify-between items-center mt-5">
              <p>Nike kyrie flytrap...</p>
              <BsCartPlus />
            </div>
            <div className="flex justify-between items-center mt-2">
              <p>Rp 1.150.000</p>
              <MdFavoriteBorder />
            </div>
          </Link>
          

        </div>
      </div>

      {/* Testimoni */}
      <div className="mt-[60px]">
        <h1 className="h1 text-secondary">Apa Kata Mereka</h1>
        <Carousel />

      </div>
    </div>
  );
};

export default index;