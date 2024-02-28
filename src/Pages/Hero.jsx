import AnimatedImage from "../components/image";
import HeroImage from "/src/assets/pexels-ovan-57690.jpg";



const Hero = () => {

  return (
    <>

      {/* <!-- hero section --!> */}
      <section id="home" className="relative py-32 lg:py-36">
        <div
          className="flex flex-col w-full gap-10 px-5 mx-auto lg:max-w-7xl sm:px-10 md:px-12 lg:px-5 lg:flex-row lg:gap-12">
          <div className="absolute inset-y-0 hidden w-full lg:w-1/2 lg:right-0 lg:block">
            <span
              className="absolute hidden w-24 h-24 rotate-90 skew-x-12 bg-white -left-6 md:left-4 top-24 lg:top-28 rounded-3xl blur-xl opacity-60 lg:opacity-95 lg:block"></span>
            <span className="absolute w-24 h-24 bg-white right-10 bottom-24 rounded-3xl blur-xl opacity-80"></span>
          </div>
          <span
            className="absolute w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 -top-5 lg:left-0 blur-2xl opacity-40"></span>
          <div className="relative flex flex-col items-center max-w-3xl mx-auto text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none lg:mx-0 lg:flex-1 lg:w-1/2">

            <h1 className="text-xl font-bold leading-tight text-fontGreen font-secondary sm:text-4xl md:text-5xl xl:text-6xl">
              Where <span
                className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">Creativity </span>
               Meets <span
                className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">Connectivity.</span>
            </h1>
            <p className="mt-8 text-3xl text-fontGreen">
            <span
                className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 font-bold">Connec2Art Media</span> isn&#8217;t just your average digital marketing agency. We&#8217;re a passionate team of storytellers, artists, and 
            tech wizards dedicated to <span
                className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 font-bold">transforming your brand into a masterpiece.</span> We don&#8217;t just create marketing campaigns, 
            we craft <span
                className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 font-bold">experiences</span> that resonate with your audience on a deeper level.
            </p>
            <div className="flex w-full max-w-md mx-auto mt-10 lg:mx-0">
            </div>
          </div>
          <div className="relative flex flex-1 max-w-3xl mx-auto lg:w-1/2 lg:h-auto lg:max-w-none lg:mx-0">
          <AnimatedImage
    src={HeroImage} alt="Hero image" width="2350" height="2350"
    className="object-cover shadow-2xl lg:absolute lg:w-full lg:h-full rounded-3xl lg:max-h-none max-h-96 saturate-0 hover:saturate-100"
    />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
