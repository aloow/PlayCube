export default function Hero() {
  return (
    <section className="w-full bg-[#1E0F2F] text-white pb-16">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
        <p className="text-lg mb-8 text-gray-300">
          简单而强大的解决方案
        </p>
        <button className="bg-white text-[#1E0F2F] px-8 py-3 rounded-lg font-medium hover:bg-gray-100">
          开始使用
        </button>
      </div>
    </section>
  );
}