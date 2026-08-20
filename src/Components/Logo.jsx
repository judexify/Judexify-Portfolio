import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/" className="flex gap-3 items-center ">
        <img src="/pfp.jpeg" height={32} width={32} className="rounded-full" />
        <span className="text-xl font-bold text-textColor">JUDEXIFY.</span>
      </Link>
    </div>
  );
}

export default Logo;
