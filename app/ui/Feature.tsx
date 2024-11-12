// components/sections/FeaturesSection.tsx

export default function Feature() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-12">主要功能</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">功能 {item}</h3>
              <p className="text-gray-600">
                这里是功能描述文本
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}