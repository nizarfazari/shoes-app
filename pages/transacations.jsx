import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Input } from "@chakra-ui/react"
import Image from "next/image"
import { BiSolidDiscount } from "react-icons/bi"
import { FaWindowClose } from "react-icons/fa"

import { PiTruck } from "react-icons/pi";
const Transactions = () => {
  return (
    <div className="min-h-screen mb-20">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Shop</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Checkout</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="mt-7">
        <h4 className="mb-4">Alamat</h4>
        <div className="shadow p-8 rounded-lg">
          <div className="grid grid-cols-2 gap-x-10">
            <div className="col-span-1 flex flex-col gap-4">
              <div>
                <label htmlFor="nama-depan">Nama Depan</label>
                <Input placeholder='Basic usage' id="nama-depan" className="mt-2" />
              </div>
              <div>
                <label htmlFor="nama-belakang">Nama Belakang</label>
                <Input placeholder='Basic usage' id="nama-belakang" className="mt-2" />
              </div>
              <div>
                <label htmlFor="nomor-telepon">Nomor Telepon</label>
                <Input placeholder='Basic usage' id="nomor-telepon" className="mt-2" />
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
              <div>
                <label htmlFor="nama-rumah">Nama jln/gedung/no.rumah</label>
                <Input placeholder='Basic usage' id="nama-rumah" className="mt-2" />
              </div>
              <div className="grid grid-cols-2 gap-x-10">
                <div className="col-span-1">
                  <label htmlFor="provinsi">Provinsi</label>
                  <Input placeholder='Basic usage' id="provinsi" className="mt-2" />
                </div>
                <div className="col-span-1">
                  <label htmlFor="kota">Kota</label>
                  <Input placeholder='Basic usage' id="kota" className="mt-2" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-10">
                <div className="col-span-1">
                  <label htmlFor="kecamatan">Kecamatan</label>
                  <Input placeholder='Basic usage' id="kecamatan" className="mt-2" />
                </div>
                <div className="col-span-1">
                  <label htmlFor="kode-pos">Kode Pos</label>
                  <Input placeholder='Basic usage' id="kode-pos" className="mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-10" />

      <div className="flex justify-between">
        <div className="">
          <div className=" max-w-[350px] relative">
            <div className="flex items-center justify-center square bg-secondary text-white absolute left-[-70px] top-[10px] ">
              <span>1</span>
            </div>
            <div className="flex justify-between mb-4">
              <div>
                <h4>Nike Kyrie 6 tb white</h4>
                <p>Warna : White</p>
              </div>
              <FaWindowClose className="text-red rounded-lg text-3xl" />
            </div>
            <div className="card-shoes flex justify-center">
              <Image src='/assets/home/shoes.png' width={250} height={250} alt="sepatu " />
            </div>
            <div className="flex items-center justify-between mt-3">
              <h1>Rp. 600.000</h1>
              <div className="flex items-center gap-x-3 mt-3">
                <div className="flex items-center justify-center square bg-grey-primary ">
                  <span>-</span>
                </div>
                <span>1</span>
                <div className="flex items-center justify-center square bg-grey-primary ">
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" max-w-[350px] relative">
            <div className="flex items-center justify-center square bg-secondary text-white absolute left-[-70px] top-[10px] ">
              <span>1</span>
            </div>

            <div className="flex justify-between mb-4">
              <div>
                <h4>Nike Kyrie 6 tb white</h4>
                <p>Warna : White</p>
              </div>
              <FaWindowClose className="text-red rounded-lg text-3xl" />
            </div>
            <div className="card-shoes flex justify-center">
              <Image src='/assets/home/shoes.png' width={250} height={250} alt="sepatu " />
            </div>
            <div className="flex items-center justify-between mt-3">
              <h1>Rp. 600.000</h1>
              <div className="flex items-center gap-x-3 mt-3">
                <div className="flex items-center justify-center square bg-grey-primary ">
                  <span>-</span>
                </div>
                <span>1</span>
                <div className="flex items-center justify-center square bg-grey-primary ">
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex items-center">
            <div className="border-[1px] border-black-primary px-7 py-2 rounded-lg mr-4 flex items-center">
              <BiSolidDiscount className="mr-4 text-2xl" />
              <input className="outline-none" type="text" placeholder="Masukan Kode" name="" id="" />
            </div>
            <button className="button-rounded-none rounded-lg">Pakai</button>
          </div>
          <h1 className="mt-4">Liat Vorcher</h1>
          <hr className="my-4" />
          <h4 className="mb-4">Pengiriman</h4>
          <div className="border-[1px] border-black-primary p-4 flex  items-center gap-5 rounded-lg">
            <PiTruck className="text-4xl" />
            <div>
              <div className="flex justify-between">
                <h5>Reguler</h5>
                <h5>Rp. 10.000</h5>
              </div>
              <p>Akan diterima pada tanggal 18 Sep - 21 Sep</p>
            </div>
          </div>
          <hr className="my-4" />
          <h4 className="mb-4">Metode Pembayaran</h4>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex justify-center items-center col-span-1 bg-atm">
              <Image src='/assets/transactions/bca.png' width={70} height={70} alt="sepatu " />
            </div>
            <div className="flex justify-center items-center col-span-1 bg-atm">
              <Image src='/assets/transactions/bca.png' width={70} height={70} alt="sepatu " />
            </div>
          </div>

          <hr className="my-4" />
          <div className="mb-5">
            <div className="flex items-center justify-between">
              <h5>Subtotal Produk</h5>
              <h5>Rp 1.800.000</h5>
            </div>
            <div className="flex items-center justify-between">
              <h5>Subtotal Pengiriman</h5>
              <h5>Rp 10.000</h5>
            </div>
          </div>
          <div className="flex items-center justify-between font-semibold text-lg">
            <h5>Total Pembayaran</h5>
            <h5>Rp 1.810.000</h5>
          </div>
          <button className="button-rounded-none rounded-lg block text-center mt-5 w-full">Buat Pesanan</button>
        </div>
      </div>

    </div>
  )
}

export default Transactions
