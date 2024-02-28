import DigitalMArketing from "/src/assets/icons/digitalMarketing.png";
import GraphicDesign from "/src/assets/icons/graphicDesign.png";
import ProductShoot from "/src/assets/icons/productShoot.png";

//Animations

export const transition = () => {
    return {
      duration: 2.50,
      delay: 0.2,
      ease: "easeIn",
    };
  };
  
  export const fadeIn = (direction) => {
    return {
      hidden: {
        opacity: 0,
        x: direction === "left" ? -85 : 85,
      },
      visible: { opacity: 1, x: 0 },
    };
  };
  
  
  export const scale = () => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      visible: { scale: 1, opacity: 1 },
    };
  };
  
  export const reveal = () => {
    return {
      hidden: {
        left: 0,
      },
      visible: { left: "100%" },
    };
  };

//Service Page Data
export const services = [
    {
      title: "Digital Marketing",
      description: "Drive targeted traffic, engagement, and conversions through strategic online marketing campaigns.",
      icon: DigitalMArketing,
    },
    {
      title: "Graphic Design",
      description: "Create visually appealing and impactful graphics to elevate your brand identity and communication.",
      icon: GraphicDesign,
    },
    {
      title: "Product Shoot",
      description: "Increase product understanding, attract customers, and boost sales.",
      icon: ProductShoot,
    },
  ];