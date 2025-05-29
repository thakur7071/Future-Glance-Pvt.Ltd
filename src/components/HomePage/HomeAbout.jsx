import { Link } from 'react-router-dom';
import { aboutImg, bgImg } from '../../Assets';
function HomeAbout() {
  return (
    <div className=" bg-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#33277B] mb-6">
          About Future Glance Pvt. Ltd
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
          Future Glance Pvt. Ltd is committed to delivering innovative and future-ready solutions
          in real estate and infrastructure. With a vision to create sustainable developments,
          we blend technology, quality, and customer satisfaction to redefine modern living.
          Our team of professionals is passionate about excellence and driven by innovation. We strive
          to exceed expectations in every project, building trust through transparency and dedication.
          Whether it’s residential, commercial, or industrial, we believe in transforming ideas into
          impactful realities that stand the test of time and serve the community for generations.
        </p>
       <Link to="/about">
        <button className="mt-4 bg-[#33277B] text-white px-6 py-2 rounded hover:bg-[#251f5c] transition duration-300">
          Read More
        </button></Link>
      </div>

      {/* Why Choose Us Section with Image on Left (hidden on small screens) */}
      <div className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src={aboutImg}
            alt="Future Glance Overview"
            className="w-full h-80 object-cover rounded shadow"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-700">
          <h3 className="text-2xl font-semibold mb-4 text-[#33277B]">Why Choose Us</h3>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            We prioritize excellence, transparency, and customer satisfaction in every project we undertake.
            Our team ensures timely delivery, quality construction, and sustainable solutions tailored to your needs.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Partnering with us means investing in a future-ready, reliable, and forward-thinking real estate experience.
          </p>
        </div>
      </div>

      {/* Background Section */}
      <div
        className="mt-10 relative bg-fixed bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-black/60  py-24 px-4 md:px-10">
          <div className="max-w-5xl mx-auto text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Building Tomorrow, Today</h3>
            <p className="text-base md:text-lg leading-relaxed">
              We are redefining urban landscapes with technology-driven solutions that prioritize people,
              planet, and performance. Our commitment is to innovation, integrity, and impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
