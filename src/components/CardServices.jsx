import React from "react";
import { CheckCircle2 } from "lucide-react";

const CardServices= ({ priceOption, index }) => {
  return (
    <>
      <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 hover:-translate-y-10 transition duration-600">
        <div className="p-10 border border-neutral-700 rounded-xl">
          <p className="text-4xl mb-4">
            {priceOption.title}
            {priceOption.title === "Pro" && (
              <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                (Most Popular)
              </span>
            )}
          </p>
          
          <ul>
            {priceOption.features.map((feature, index) => (
              <li key={index} className="mt-8 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">{feature}</span>
              </li>
            ))}
          </ul>
        
        </div>
      </div>
    </>
  );
};

export default CardServices;
