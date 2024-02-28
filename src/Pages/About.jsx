import PropTypes from 'prop-types';

function AboutUs() {
    return (
      <div id='about' className="container flex flex-col items-center justify-center px-4 py-16 mx-auto">
        <h1 className="mb-8 font-bold text-center text-gray-700 lg:text-6xl sm:text-3xl font-secondary">About Connec2Art Media</h1>
  
        <div className="flex flex-col items-center justify-center gap-8 md:grid-cols-2">
          {/* Company Story */}
          <div className="space-y-24">
            <h2 className="text-5xl font-semibold text-gray-700 font-secondary">Our Story:</h2>
            <p className="text-4xl font-bold leading-loose text-fontGreen">
              Connec2Art Media was founded in 2023 by a team of passionate creatives
              with a mission to help businesses connect with their audience through
              the power of storytelling and design. We believe that every brand has
              a unique story to tell, and we are dedicated to helping you tell it in
              a way that resonates with your target audience.
            </p>
            <p className="text-4xl font-bold leading-loose text-fontGreen">
              Over the year, we have grown into a full-service digital marketing
              agency, offering a wide range of services from SEO and content
              marketing to social media management and graphic design. But no
              matter how much we grow, we remain committed to our core values:
              creativity, collaboration, and results.
            </p>
          </div>
  
          {/* Team Section */}
          <div className="my-16 space-y-24">
            <h2 className="text-5xl font-semibold text-center text-gray-700 font-secondary">Meet the Team</h2>
            <div className="grid grid-cols-2 gap-32">
              {/* Add individual team member cards here */}
              <TeamMemberCard
                name="Zeno"
                title="Creative Director"
                description="Shapes the creative direction of Connec2Art Media, ensuring all projects are visually stunning and strategically aligned."
              />
              <TeamMemberCard
                name="Pradeep"
                title="Marketing Manager"
                description="Develops and executes data-driven marketing campaigns to drive brand awareness, engagement, and growth."
              />
              {/* Add more team member cards as needed */}
            </div>
          </div>
        </div>
  
        {/* Call to Action */}
        <div className="mt-8 text-center">
          <button className="btn btn-primary">Ready to connect with us?</button>
        </div>

        <div className="flex items-center mt-36">
        <p className="text-sm font-medium text-black hover:text-fontGreen">&copy; {new Date().getFullYear()} Connec2Art Media. All rights reserved.</p>
        </div>
      </div>
    );
  }
  
  function TeamMemberCard({ name, title, description }) {
    return (
      <div className="flex flex-col items-center space-y-2">
        <h4 className="text-3xl font-semibold font-secondary text-fontGreen">{name}</h4>
        <p className="text-gray-700">{title}</p>
        <p className="text-center text-black">{description}</p>
      </div>
    );
  }

  TeamMemberCard.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }
  
  export default AboutUs;