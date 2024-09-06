import BestServices from "./Components/PageComponents/BestServices";
import ContactArea from "./Components/PageComponents/ContactArea";
import DownloadApp from "./Components/PageComponents/DownloadApp";
import FaqArea from "./Components/PageComponents/FaqArea";
import HeroSlider from "./Components/PageComponents/HeroSlider";
import IconBoxArea from "./Components/PageComponents/IconBoxArea";
import ProductsCategory from "./Components/PageComponents/ProductsCategory";
import ServiceArea from "./Components/PageComponents/ServiceArea";
import WhyChoose from "./Components/PageComponents/WhyChoose";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <ProductsCategory />
      <ServiceArea />
      <WhyChoose />
      <IconBoxArea />
      <BestServices />
      <DownloadApp />
      <FaqArea />
      <ContactArea />
    </main>
  );
}
