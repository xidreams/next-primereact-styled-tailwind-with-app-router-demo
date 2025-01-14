import Link from "next/link";
import Image from 'next/image';
import logo from 'logo.png';


const Header = () => {
  return (
    <ul className="menu">
      <li className="logo">
        <Link href="/">
            <Image src="/assets/images/logo.png" alt="Logo" width={50} height={50} />
        </Link>
      </li>
      <li className="icon">
        <a href="javascript:void(0);" >☰</a>
      </li>
      <li><a href="#home">Applications</a></li>
      <li><a href="#news">Resources</a></li>
    </ul>
  );
};

export default Header;
