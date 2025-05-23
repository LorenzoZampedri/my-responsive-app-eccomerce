export default function HeroSection() {
  return (
    <div
      data-aos="fade-up"
      className="relative bg-cover bg-center h-[100vh] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/exportacion.jpg)` }} // agregá tu imagen en public/images
    >
      <div className=" p-6 rounded-lg text-center shadow-xl text-gray-800">
        <h1 className="text-4xl font-bold mb-2 ">Tu socio global en exportaciones</h1>
        <p className="text-lg">Productos de calidad, listos para cruzar fronteras</p>
      </div>
    </div>
  );
}
