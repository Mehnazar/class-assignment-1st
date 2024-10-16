import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between bg-slate-400	text-cyan-700">
      {/* Logo */}
      <div>
        <h2 className="text-3xl font-semibold bg-slate-400 text-cyan-700"> My Website </h2>
      </div>

      {/* Links */}
      <nav>
        <ul className="flex gap-x-4">
          <li>
            <Link href="/profile">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>

          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;