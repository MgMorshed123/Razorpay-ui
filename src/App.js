import logo from "./images/logo.svg";

function App() {
  return (
    <div>
      <nav className="bg-deepBlue">
        <div className="relative w-[1080px] mx-auto flex items-center justify-evenly">
          {/* logo */}

          <a href="/" className="cursor-pointer py-7 pr-7 ">
            <img src={logo} width="125px" height="30px"></img>
          </a>

          <ul className="flex gap-2">
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="">Payments</a>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="">Banking</a>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="">Corporate Card</a>
            </li>
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="">Payroll</a>
            </li>
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="">Resources</a>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="">Support</a>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
            </li>
            <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
              <a href="">Pricing</a>
              <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
