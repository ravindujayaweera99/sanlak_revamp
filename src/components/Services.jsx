import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import Service from "./Service";

const Services = () => {
  return (
    <div className="h-auto mt-5 md:h-screen flex flex-col md:justify-center md:items-center md:mt-0">
      <h1 className="text-center text-3xl md:text-5xl">Our Services</h1>
      <div className="md:container md:flex md:flex-row mx-auto justify-center items-center gap-10 md:gap-32 bg-white">
        <div className="flex flex-col justify-between items-center gap-10 md:gap-12 mt-10 md:mt-0">
          <Service
            service="Preparations of Architectural Drawings"
            img={service1}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum sit iste sapiente impedit facilis nihil. Impedit a alias eos labore quisquam itaque, quia molestias iusto minus sed laboriosam dolorum!"
          />
          <Service
            service="Preparations of Project Estimates"
            img={service2}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum sit iste sapiente impedit facilis nihil. Impedit a alias eos labore quisquam itaque, quia molestias iusto minus sed laboriosam dolorum!"
          />
        </div>
        <div className="my-10 md:my-0">
          <Service
            service="Preparations of Master Plan"
            img={service3}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum sit iste sapiente impedit facilis nihil. Impedit a alias eos labore quisquam itaque, quia molestias iusto minus sed laboriosam dolorum!"
          />
        </div>
        <div className="flex flex-col justify-between items-center gap-10 md:gap-12">
          <Service
            service="Preparations of Structural Drawings"
            img={service4}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum sit iste sapiente impedit facilis nihil. Impedit a alias eos labore quisquam itaque, quia molestias iusto minus sed laboriosam dolorum!"
          />
          <Service
            service="Preparations of Council Approval Drawings"
            img={service5}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum sit iste sapiente impedit facilis nihil. Impedit a alias eos labore quisquam itaque, quia molestias iusto minus sed laboriosam dolorum!"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
