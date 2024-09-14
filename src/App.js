import logo from "./images/logo.svg";
import flag from "./images/india-flag.svg";
import heroImage from "./images/hero-illustration.jpg";
import heroShape from "./images/hero-shape.svg";

function App() {
  return (
    <div>
      {/* navbar */}
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

          <div className="flex  gap-3">
            <img src={flag} width="28px" height="20px"></img>

            <button className="py-3 px-5 font-mullish text-white  border-lightBlue border text-sm rounded-sm font-bold">
              Login
            </button>

            <button className="py-3 px-4 font-mullish rounded-sm text-sm font-bold text-lightBlue300 border transition-all duration-200 bg-white hover:text-lightBlue500">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* hero section */}

      <section className="relative bg-deepBlue">
        <div className="w-10/12 max-w-[1080px] flex flex-row justify-between items-center mx-auto">
          {/* left */}

          {/* the default property of flex strxh the width to that width of div */}
          <div className="space-y-6">
            <h1 className="font-mullish font-bold text-[40px] leading-[1.2] text-white">
              Power your buisness
            </h1>

            <p className="font-mullish text-[18px]  leading-7 text-white opacity-70">
              {" "}
              Accept payments from customers, Automate Payments to vendor $
              employees
            </p>
            <button className="bg-lightBlue text-white rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 py-[10px] px-[10px]">
              Sign Up Now
            </button>
          </div>

          {/* right part*/}

          <img src={heroImage} className="w-full max-w-[680px]"></img>
        </div>

        {/* hero shape */}

        {/* left-0 right-0  it will take whoel width */}
        <div className="absolute left-0 right-0 w-[101%]">
          <img src={heroShape} className="w-full object-fill scale-x-100"></img>
        </div>
      </section>
    </div>
  );
}

export default App;
