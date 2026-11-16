
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary border-2 border-secondary">
      <div className="container-custom flex justify-between items-center py-5">
        <h2 className="text-white text-xl md:text-3xl font-bold">
          Nishanth<span className="text-secondary"> Sekar</span>
        </h2>

        <ul className="hidden md:flex gap-6 text-white">
          {[["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Projects", "projects"], ["Contact", "contact"]].map(([label, id]) => (
            <li key={id}><a className="transition-colors hover:text-secondary" href={`#${id}`}>{label}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
