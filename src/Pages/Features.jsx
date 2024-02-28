import PropTypes from 'prop-types';

const features = [
  {
    title: "SEO & Content Marketing",
    description:
      "Increase your website's organic traffic and visibility with search engine optimization and engaging content creation.",
    icon: "fas fa-search",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build a strong social media presence, connect with your audience, and drive engagement through targeted campaigns.",
    icon: "fab fa-facebook-f",
  },
  {
    title: "Paid Advertising (PPC)",
    description:
      "Reach your ideal customers with targeted pay-per-click advertising campaigns across various platforms.",
    icon: "fas fa-bullseye",
  },
  {
    title: "Email Marketing",
    description:
      "Nurture leads, engage customers, and drive conversions with strategic email marketing campaigns.",
    icon: "fas fa-envelope",
  },
  {
    title: "Graphic Design",
    description:
      "Elevate your brand identity with captivating graphics, logos, and visual elements.",
    icon: "fas fa-palette",
  },
  {
    title: "Photography & Videography",
    description:
      "Showcase your products and services in a professional light with high-quality photography and videography.",
    icon: "fas fa-camera",
  },
  {
    title: "Printing & Signage",
    description:
      "Make a lasting impression with high-quality printed materials and signage solutions.",
    icon: "fas fa-print",
  },
];

const FeatureCard = ({ title, description }) => (
  <div className="w-full px-16 py-8 mb-8 shadow-md bg-yellow-50 rounded-3xl md:w-1/2 lg:w-full hover:shadow-lg">
    <h3 className="mb-2 text-lg font-bold font-secondary text-fontGreen">{title}</h3>
    <p className="leading-relaxed text-gray-700">{description}</p>
  </div>
);

const FeaturesPage = () => {
  return (
    <div id='features' className="container px-4 py-16 mx-auto">
      <h1 className="mb-16 text-3xl font-bold text-center text-fontGreen">Our Comprehensive Features</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
  }

export default FeaturesPage;
