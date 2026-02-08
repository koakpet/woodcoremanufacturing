import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <Hero /> */}

      {/* <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">What We Manufacture</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Doors</h3>
            <p>Flush doors, panel doors, and reinforced security doors.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Cabinets</h3>
            <p>Kitchen cabinets, wardrobes, and storage systems.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Furniture</h3>
            <p>Tables, chairs, beds, and custom joinery.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Why Woodcore?</h2>
          <ul className="space-y-2">
            <li>• Precision manufacturing</li>
            <li>• Durable materials</li>
            <li>• On-time delivery</li>
            <li>• Clear pricing & contracts</li>
          </ul>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
