import logo1 from "../assets/logo1.png";
import hero_image_1 from "../assets/hero_image_1.jpg";
import Login from "../components/Login";

const Home = () => {
  return (
    <>
      <header className="flex justfy-between">
        <img src={logo1} alt="company logo" className="w-12 h-auto absolute left-8 top-8 z-20" />
      </header>
      <main className="flex w-full h-full justify-center items-center">
        <div className="relative flex justify-center items-center w-3/6">
          <div className="bg-gradient-to-r from-orange-500 to-sky-500 flex justify-center items-center absolute z-10 h-full w-full opacity-15"></div>
          <img src={hero_image_1} alt="Votre partenaire de confiance pour le succès financier" />
          <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            Votre partenaire de confiance pour le succès financier
          </h1>
        </div>
        <div className="h-full w-3/6 flex justify-center items-center">
          <Login />
        </div>
      </main>
    </>
  );
};

export default Home;
