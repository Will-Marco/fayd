import {
  About,
  Address,
  Footer,
  Gallery,
  Hero,
  Info,
  LeaveNumber,
  Reasons,
  Tours,
} from "@/components/views";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Info />
      <Tours />
      <LeaveNumber />
      <About />
      <Gallery />
      <Reasons />
      <Address />
      <Footer />
    </>
  );
}
