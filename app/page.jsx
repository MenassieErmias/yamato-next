import Image from "next/image";
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Specs from './components/Specs';

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Specs />
    </>
  );
}
