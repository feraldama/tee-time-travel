const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold mb-4">
          Bienvenidos a Time Tee Travel
        </h1>
        <p className="text-xl mb-8">
          Experiencias exclusivas de golf en destinos impresionantes.
        </p>
        <button className="bg-green-600 px-8 py-3 rounded text-white hover:bg-green-700">
          Ver más
        </button>
      </div>
    </section>
  );
};

export default Hero;
