export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">WOODCORE</h1>
      <div className="space-x-6">
        <a href="#" className="hover:text-gray-600">
          Home
        </a>
        <a href="#" className="hover:text-gray-600">
          Products
        </a>
        <a href="#" className="hover:text-gray-600">
          Contact
        </a>
      </div>
    </nav>
  );
}
