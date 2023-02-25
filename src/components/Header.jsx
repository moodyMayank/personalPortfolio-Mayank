import { LinkedIn, GitHub, PictureAsPdf } from "@mui/icons-material";
import { LinkedInURL, GitHubURL, PortfolioURL } from "../../constants";

const Link = ({ URL, Icon, IconName, style }) => {
  return (
    <div className="flex items-center justify-center space-x-10">
      <a
        className="cursor-pointer hover:scale-105 transition transform duration-150 ease-out text-[#13005A]"
        href={URL}
      >
        {<Icon style={style} />}
        <span className="hidden md:inline text-xl font-semibold p-2">
          {IconName}
        </span>
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-evenly px-2 h-20 bg-white shadow-xl ">
      <Link
        URL={LinkedInURL}
        Icon={LinkedIn}
        IconName={"LinkedIn"}
        style={{ height: "50px", width: "50px" }}
      />
      <Link
        URL={GitHubURL}
        Icon={GitHub}
        IconName={"GitHub"}
        style={{ height: "50px", width: "50px" }}
      />
      <Link
        URL={PortfolioURL}
        Icon={PictureAsPdf}
        IconName={"Resume"}
        style={{ height: "50px", width: "50px" }}
      />
    </header>
  );
};

export default Header;
