import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import CardPrice from "./CardServices";

const Services = () => {
  return (
    <div>
      <h2 className="text-center lg:text-4xl text-4xl mb-4 mt-5" id="services">Services</h2>
      <div className="flex-wrap flex my-10">
        {pricingOptions.map((priceOption, index) => (
          <CardPrice priceOption={priceOption} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
