import { Link } from 'react-router-dom';
import { HomepageImg, HomepageImg2, project1, project2 } from '../../Assets';
function HomeProjects() {
  return (
    <div className="bg-white  px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-[#33277B] mb-10 text-center">
        Our Projects
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {/* Card 1 */}
        <div className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300">
          <Link to="/project/skyline"><img
            src={project1}
            alt="Project 1"
            className="w-full h-60 object-cover rounded-t-lg"
          />
          </Link>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#33277B] mb-2">Skyline Residency</h3>
            <p className="text-gray-600">Noida Sector 76, Uttar Pradesh</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition duration-300">
          <Link to="/project/green-valley"><img
            src={project2}
            alt="Project 2"
            className="w-full h-60 object-cover rounded-t-lg"
          /></Link>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#33277B] mb-2">Green Valley Towers</h3>
            <p className="text-gray-600">Gurugram Sector 45, Haryana</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProjects;
