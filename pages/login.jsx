
import { PlainLayouts } from "@/layouts/PlainLayouts";
import { FaGoogle } from "react-icons/fa";


const Login = () => {
    return (
        <div className="grid grid-cols-2 min-h-[600px] mt-12">
            <div className="bg-secondary flex items-center justify-center">
                <div className="text-center text-white flex flex-col items-center gap-[30px]">
                    <h1 className="text-[48px] leading-[24px]">SELAMAT DATANG</h1>
                    <p className="max-w-[345px] text-[20px] leading-[24px]">Belum mempunyai akun? Klik tombol di bawah ini</p>
                    <a className="button-reverse text-[20px] font-medium" href="/register">Sign Up</a>
                </div>
            </div>
            <div className="bg-primary flex flex-col items-center justify-center">
                <h1 className="text-center text-[48px] leading-[24px] text-white mb-8">Login</h1>
                <div className="flex flex-col items-center gap-[25px]">
                    <input type="text" className="input-account" />
                    <input type="text" className="input-account" />
                    <a className="button-reverse text-[20px] font-medium" href="">Login</a>
                </div>
                <p className="text-white my-4">Atau gunakan email untuk login</p>
                <div className="button-reverse text-[20px] font-medium flex items-center">
                    <FaGoogle className="mr-4 text-primary" />
                    <a href="/register" >Sign Up With Google</a>
                </div>
            </div>
        </div>
    )
}

Login.layout = PlainLayouts

export default Login
