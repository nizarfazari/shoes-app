import { PlainLayouts } from "@/layouts/PlainLayouts"
import { FaGoogle } from "react-icons/fa";
const Register = () => {
  return (
    <>
      <div className="grid grid-cols-2 min-h-[600px] mt-12">
        <div className="bg-secondary flex items-center justify-center">
          <div className="text-center text-white flex flex-col items-center gap-[30px]">
            <h1 className="text-[48px] leading-[24px]">SELAMAT DATANG</h1>
            <p className="max-w-[345px] text-[20px] leading-[24px]">Untuk tetap terhubung dengan kami, silahkan masuk dengan akun anda</p>
            <a className="button-reverse text-[20px] font-medium" href="">Login</a>
          </div>
        </div>
        <div className="bg-primary flex flex-col items-center justify-center">
          <h1 className="text-center text-[48px] leading-[24px] text-white mb-8">Buat Akun</h1>
          <div className="flex flex-col items-center gap-[25px]">
            <input type="text" className="input-account" />
            <input type="text" className="input-account" />
            <input type="text" className="input-account" />
            <input type="text" className="input-account" />
            <a className="button-reverse text-[20px] font-medium" href="">Register</a>
          </div>
          <p className="text-white my-4">Atau gunakan email untuk registrasi</p>
          <div className="button-reverse text-[20px] font-medium flex items-center">
          <FaGoogle className="mr-4 text-primary" />
            <a href="" >Sign Up With Google</a>
          </div>
        </div>
      </div>
    </>
  )
}

Register.layout = PlainLayouts

export default Register

