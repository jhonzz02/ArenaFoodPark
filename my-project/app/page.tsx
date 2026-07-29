import Navbar from "./components/layout/NavBar";
import SplashScreen from "./components/layout/SplashScreen";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Navbar />

      <main>
        <Hero />
      </main>
    </>
  );
}
