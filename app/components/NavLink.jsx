//props for navbar
import Link from "next/link";

const NavLink = ({ href, title }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Link
      onClick={handleClick}
      href={href}
      className="block py-2 pl-3 pr-4 text-first sm:text-xl rounded md:p-0 hover:text-primary"
    >
      {title}
    </Link>
  );
};

export default NavLink;
