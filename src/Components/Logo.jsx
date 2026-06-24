import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to='/' className='flex gap-3 items-center'>
        <img src='/favicon-32x32.png' />
        <span className='text-xl font-bold text-textColor'>JUDEXIFY.</span>
      </Link>
    </div>
  );
}

export default Logo;
