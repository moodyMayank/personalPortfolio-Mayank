import { LinkedIn, GitHub, PictureAsPdf } from "@mui/icons-material";
import { LinkedInURL } from "../../constants";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-evenly px-2 h-20 bg-white shadow-xl ">
      <a className="" href={LinkedInURL}>
        <LinkedIn style={{ height: "50px", width: "50px" }} />
        <span className="hidden">Linkedin</span>
      </a>
      <span className="cursor-pointer hover:scale-105 transition transform duration-150 ease-out">
        <GitHub style={{ height: "50px", width: "50px", color: "13005A" }} />
        <a className="hidden lg:inline">Github</a>
      </span>
      <span className="cursor-pointer hover:scale-105">
        <PictureAsPdf style={{ height: "50px", width: "50px" }} />
        <a className="hidden lg:inline">Resume</a>
      </span>
    </header>
  );
};

export default Header;
