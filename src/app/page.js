// Next.js App Router structure using JSX (NO TypeScript)
// File: app/page.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* ABOUT SECTION */}
      <section className="bg-gray-100 px-6  mx-auto">
        <div className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Woodcore</h2>
          <p className="text-lg leading-relaxed">
            Woodcore Manufacturing Ltd is a professional furniture and joinery
            company specializing in wooden doors, kitchen cabinets, wardrobes,
            and custom furniture for homes, estates, offices, and hospitality
            projects. We operate with manufacturing discipline, standardized
            production, and strict quality control.
          </p>
        </div>
      </section>

      {/* HERO SECTION
        <section className="bg-black text-white py-20 px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            WOODCORE MANUFACTURING LTD
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
            Precision-crafted doors, cabinets, and furniture built for strength,
            durability, and clean finishing.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#products"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded-xl font-semibold"
            >
              Request a Quote
            </a>
          </div>
        </section> */}

      {/* PRODUCTS SECTION */}
      <section id="products" className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Our Product Lines</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Flush Internal Doors
              </h3>
              <p>
                Standardized sizes with laminate, veneer, or paint finishes.
                Ideal for estates, hotels, and offices.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Security Wooden Doors
              </h3>
              <p>
                Reinforced solid-core doors designed for durability and safety
                in premium residential projects.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Cabinets & Wardrobes
              </h3>
              <p>
                Modular kitchen cabinets and wardrobes built for clean
                installation and long-term use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Why Choose Woodcore</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg">
          <li>• Standardized production = consistent quality</li>
          <li>• Transparent pricing with clear specifications</li>
          <li>• Professional project timelines</li>
          <li>• Built for developers, not trial-and-error clients</li>
        </ul>
      </section> */}

      {/* CONTACT SECTION
      <section id="contact" className="bg-black text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Request a Quote</h2>
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 rounded-xl text-black"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-4 rounded-xl text-black"
            />
            <textarea
              placeholder="Describe your project"
              rows="4"
              className="p-4 rounded-xl text-black"
            />
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section> */}

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
      </section> */}

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
      </section>

      <Footer />
    </main>
  );
}
