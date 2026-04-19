function Navbar() {
  return (
    <nav className="flex justify-between fixed top-0 left-0 right-0 z-50 items-center px-8 py-4 bg-white text-black">
      <h1 className="text-xl font-bold">Joell Alex</h1>

      <ul className="flex gap-6">
      <li className="cursor-pointer" onClick={()=>document.getElementById("experience").scrollIntoView({
      behavior: "smooth",
    })}>Experience </li>
      <li className="cursor-pointer" onClick={()=>document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
    })}>Projects</li>
        <li className="cursor-pointer" onClick={()=>document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    })}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;