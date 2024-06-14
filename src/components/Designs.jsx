import Marquee from "react-fast-marquee";
import design1 from "../assets/Proposed Designs/1.jpg";
import design2 from "../assets/Proposed Designs/2.jpg";
import design3 from "../assets/Proposed Designs/3.jpg";
import design4 from "../assets/Proposed Designs/4.jpg";
import design5 from "../assets/Proposed Designs/5.jpg";
import design6 from "../assets/Proposed Designs/6.jpg";
import design7 from "../assets/Proposed Designs/7.jpg";
import design8 from "../assets/Proposed Designs/8.jpg";
import design9 from "../assets/Proposed Designs/9.jpg";
import design10 from "../assets/Proposed Designs/10.jpg";
import design11 from "../assets/Proposed Designs/11.jpg";
import design12 from "../assets/Proposed Designs/12.jpg";
import design13 from "../assets/Proposed Designs/13.jpg";

const Designs = () => {
  const designs = [
    {
      id: 1,
      img: design1,
    },
    {
      id: 2,
      img: design2,
    },
    {
      id: 3,
      img: design3,
    },
    {
      id: 4,
      img: design4,
    },
    {
      id: 5,
      img: design5,
    },
    {
      id: 6,
      img: design6,
    },
    {
      id: 7,
      img: design7,
    },
    {
      id: 8,
      img: design8,
    },
    {
      id: 9,
      img: design9,
    },
    {
      id: 10,
      img: design10,
    },
    {
      id: 11,
      img: design11,
    },
    {
      id: 12,
      img: design12,
    },
    {
      id: 13,
      img: design13,
    },
  ];
  return (
    <div className="mt-10 md:mt-0 bg-blue pb-10">
      <h1 className="text-center text-white text-3xl md:text-5xl mb-10 pt-10">
        Proposed Designs
      </h1>
      <Marquee>
        {/* {designs.map((d) => {
        <div>
          <img src={d.img} alt="" />
        </div>;
      })} */}
        <img
          src={design1}
          alt=""
          className="h-72 aspect-square mr-12 border-[5px] border-orange "
        />
        <img
          src={design2}
          alt=""
          className="h-72 aspect-square mr-12 border-[5px] border-orange "
        />
        <img
          src={design3}
          alt=""
          className="h-72 aspect-square mr-12 border-[5px] border-orange "
        />
        <img
          src={design4}
          alt=""
          className="h-72 aspect-square mr-12 border-[5px] border-orange "
        />
        <img
          src={design5}
          alt=""
          className="h-72 aspect-square mr-12 border-[5px] border-orange "
        />
        <img
          src={design6}
          alt=""
          className="h-72 aspect-square mr-12 border-[5px] border-orange "
        />
        <img
          src={design7}
          alt=""
          className="h-72 aspect-square mr-12 border-[5px] border-orange "
        />
        <img
          src={design8}
          alt=""
          className="h-72 aspect-square mr-12 border-[5px] border-orange "
        />
        <img
          src={design9}
          alt=""
          className="h-72 aspect-square mr-12 border-[5px] border-orange "
        />
        <img
          src={design10}
          alt=""
          className="h-72 aspect-square mr-12 border-[5px] border-orange "
        />
        <img
          src={design11}
          alt=""
          className="h-72 aspect-square mr-12 border-[5px] border-orange "
        />
        <img
          src={design12}
          alt=""
          className="h-72 aspect-square mr-12 border-[5px] border-orange "
        />
        <img
          src={design13}
          alt=""
          className="h-72 aspect-square mr-12 border-[5px] border-orange "
        />
      </Marquee>
    </div>
  );
};

export default Designs;
