import Image from "next/image"
import { FaWindowClose } from "react-icons/fa";
import { BiSolidDiscount } from "react-icons/bi";
const Checkout = () => {
    return (
        <div className="h-screen">
            <div className="flex items-center justify-between my-10">
                <h4>Total Item ( 1 )</h4>
                <label class="checkbox-container">
                    Pilih Semua
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
            </div>

            <div className="grid grid-cols-3 border-y-[1px] py-10 justify-items-center">
                <div className="col-span-1 max-w-[350px] relative">
                    <label class="checkbox-container left-[-70px] top-[10px]">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
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
            <div className="flex items-center justify-between mt-10">
                <div className="flex items-center">
                    <div className="border-[1px] border-black-primary px-7 py-2 rounded-lg mr-4 flex items-center">
                        <BiSolidDiscount className="mr-4 text-2xl" />
                        <input className="outline-none" type="text" placeholder="Masukan Kode" name="" id="" />
                    </div>
                    <button className="button-rounded-none rounded-lg">Pakai</button>
                </div>

                <div>
                    <h4 className="mb-1">Total </h4>
                    <div>
                        <span className="mr-10">Rp. 600.000</span>
                        <button className="button-rounded-none rounded-lg">Checkout Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
