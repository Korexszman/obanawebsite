import Headding from './Headding';
import ServicesSlider from './ServicesSlider';

const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <Headding
          smallText="What We Do"
          headerText=" We Let You Focus On What’s Important—Your Business."
          subText="We make it easy to source, purchase, and pay vendors worldwide for your business."
          className=" max-w-[850px] text-center mx-auto"
        />
        <ServicesSlider />
      </div>
    </section>
  );
};

export default Services;
