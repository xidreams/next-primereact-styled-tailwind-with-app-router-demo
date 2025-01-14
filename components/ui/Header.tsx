import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/help">Help</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
