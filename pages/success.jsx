import Link from "next/link"

const Success = () => {
    return (
        <div className="h-screen">
            <div className="text-center flex justify-center items-center h-full flex-col gap-3">
                <h4 className="text-[28px] leading-8">Terima Kasih Pesanan Anda Sedang Diproses</h4>
                <p className="text-lg text-balance max-w-[420px]">Silahkan tunggu konfirmasi email dari kami dan kami akan menginformasikan resi secept mungkin!</p>
                <div className="flex items-center gap-10">
                    <button className="button-rounded-none rounded-lg">Cek Detail Pesanan</button>
                    <Link href={"/"} className="button-reverse-border rounded-lg">Kembali</Link>
                </div>
            </div>

        </div>
    )
}

export default Success
