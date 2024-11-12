export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Free Sprunky Online, Play Sprunki Incredibox Game
        </h1>
        <h2 className="text-3xl font-semibold mb-6">
          Welcome to Sprunki Incredibox Play Sprunky Music Game
        </h2>
        <p className="text-xl mb-10">
          Create, mix, and groove with the spunkiest beats around!
        </p>
        <a
          href="#play-now"
          className="bg-yellow-400 text-red-900 font-bold text-xl py-4 px-10 rounded-full hover:bg-yellow-300 transition duration-300 inline-block hover:shadow-lg transform hover:-translate-y-1"
        >
          <i className="fas fa-play mr-2"></i> Play Sprunki Now
        </a>
      </div>
    </section>
  );
}
