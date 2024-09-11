import logo from "./images/logo.svg";

function App() {
  return (
    <div>
      <nav className="bg-deepBlue">
        <div className="relative w-[1080px] mx-auto flex items-center justify-between">
          {/* logo */}

          <a href="/" className="cursor-pointer py-7 pr-7 ">
            <img src={logo} width="125px" height="30px"></img>
          </a>

          <ul className="flex">
            <li></li>
            <li></li>

            <li></li>

            <li></li>

            <li></li>

            <li></li>
            <li></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
