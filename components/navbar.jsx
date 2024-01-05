const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between py-5">
        <div className="icon">
          <h3 className="text-[26px] font-black leading-[38px] text-primary">MyShoes</h3>
        </div>
        <div className="list-navbar">
          <ul className="flex gap-[60px] items-center">
            <li className="text-navbar">
            <a href="/">Home</a>
            </li>
            <li className="text-navbar">
            <a href="/catalog">Menu</a>
            </li>
            <li className="text-navbar">
              <a href="/contact">Contact</a>
              </li>
            <li className="button-rounded-none">
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
