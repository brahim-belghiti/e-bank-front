import logo1 from "../assets/logo1.png";
import hero_image_1 from "../assets/hero_image_1.jpg";

const Home = () => {
  return (
    <>
      <header className="lg:flex justfy-between">
        <img src={logo1} alt="company logo" className="w-12 h-auto absolute left-8 top-8 z-20" />
      </header>
      <main className="lg:flex-row flex flex-col w-full h-full justify-center items-center gap-4">
        <div className="relative flex justify-center items-center lg:w-3/6">
          <div className="bg-gradient-to-r from-orange-500 to-sky-500 flex justify-center items-center absolute z-10 h-full w-full opacity-15"></div>
          <img src={hero_image_1} alt="Votre partenaire de confiance pour le succès financier" />
          <h1 className="absolute lg:text-5xl text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            Votre partenaire de confiance pour le succès financier
          </h1>
        </div>
        <div className="h-full lg:w-3/6 w-full flex justify-center items-center">
        </div>
      </main>
    </>
  );
};

export default Home;
