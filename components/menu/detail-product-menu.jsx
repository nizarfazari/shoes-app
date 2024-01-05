import { Select } from "@chakra-ui/react"
import Link from "next/link"

const DetailProductMenu = () => {
  return (
    <div className="mt-5 grid grid-cols-2">
    <div className="col-span-1">
        <h2 className="text-xl font-bold mb-3">Nike kyrie 6 tb white</h2>
        <div className="flex items-center gap-8">
            <h4>Warna</h4>
            <div className="flex items-center gap-5">
                <div className="square bg-pink"></div>
                <div className="square bg-grey-secondary"></div>
                <div className="square bg-yellow"></div>
                <div className="square bg-brown"></div>
            </div>
        </div>

        <div className="flex items-center gap-7 mt-5">
            <h4>Ukuran</h4>
            <div className="flex items-center gap-5">
                <div className="flex items-center justify-center square bg-grey-primary ">
                    <span>35</span>
                </div>
                <div className="flex items-center justify-center square bg-grey-primary ">
                    <span>36</span>
                </div>
                <div className="flex items-center justify-center square bg-grey-primary ">
                    <span>37</span>
                </div>
                <div className="flex items-center justify-center square bg-grey-primary ">
                    <span>38</span>
                </div>

            </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
            <span>Rp 600.000</span>
            <span className="line-through text-grey-tertiary">Rp 200.000</span>
            <span>Cicilan 0% dari 70.750/bln</span>
        </div>
    </div>
    <div className="col-span-1">
        <h4>Pengiriman Ke</h4>
        <Select placeholder='Pengiriman Ke'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </Select>
        <h5 className="my-4">Estimasi Pengiriman</h5>
        <h4 className="font-medium text-[18px]">Senin,06 September 2021</h4>
        <div className="flex items-center gap-x-3 mt-3">
            <div className="flex items-center justify-center square bg-grey-primary ">
                <span>-</span>
            </div>
            <span>35</span>
            <div className="flex items-center justify-center square bg-grey-primary ">
                <span>+</span>
            </div>

            <span>Stock 50</span>
        </div>
        <div className="flex items-center gap-4">
            <Link href={"/checkout"} className="mt-3 button-reverse-border rounded-lg">Tambah ke troli</Link>
            <Link href={"/checkout"} className="mt-3 button-rounded-none rounded-lg">Beli Sekarang</Link>
        </div>
    </div>
</div>
  )
}

export default DetailProductMenu
