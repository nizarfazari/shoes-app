const Navbar = () => {
  return (
    <nav>
        <div className="container mx-auto flex items-center justify-between py-5">
          <div className="icon">
            <h3 className="text-[26px] font-black leading-[38px] text-primary">MyShoes</h3>
          </div>
          <div className="list-navbar">
            <ul className="flex gap-[60px] items-center">
              <li className="text-navbar">Home</li>
              <li className="text-navbar">Menu</li>
              <li className="text-navbar">Contact</li>
              <li className="button-rounded-none">Login</li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
