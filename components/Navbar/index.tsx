import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/todos", label: "Todos" },
  { href: "/docs", label: "Docs" },
];

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="flex items-center gap-2">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
