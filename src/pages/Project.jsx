
import { useParams } from 'react-router-dom';
import { drinagesystem, entrygate, greenvalley, HomepageImg, HomepageImg2, keyplan, layout, park, playarea, security, shoppingcomplex, skyline, streetlight, wideroad } from '../Assets';

function Project() {
  const { projectId } = useParams();

  const projectData = {
    skyline: {
      title: 'Skyline Residency',
      location: 'Sector 45, New City',
      banner: HomepageImg2,
      image: skyline,
      description: `Skyline Residency is a modern residential complex designed for luxury living.
      With state-of-the-art architecture and world-class amenities, the project offers spacious apartments,
      landscaped gardens, a swimming pool, gym, and 24/7 security. Ideal for families seeking comfort and style.`,
      gallery: [
       { img: entrygate, title: 'Entry Gate' },
        { img: wideroad, title: 'Wide Road' },
        { img: drinagesystem, title: 'Draunage System' },
        { img: security, title: '24x7 Security' },
        { img: streetlight, title: 'Street Lights' },
        { img: playarea, title: 'Kids Play Area' },
        { img: park, title: 'Green Park' },
        { img: shoppingcomplex, title: 'Shopping Complex' }
      ],
      additionalImages: [
        { img: layout, title: 'Layout Plan' },
        { img: keyplan, title: 'KeyPlan' },
      ],
    },
    'green-valley': {
      title: 'Green Valley Towers',
      location: 'Hillview Road, EcoTown',
      banner: HomepageImg,
      image: greenvalley,
      description: `Green Valley Towers is an eco-friendly housing society with premium amenities.
      Emphasizing sustainability, it features solar power, rainwater harvesting, and green open spaces.
      Residents enjoy a serene lifestyle with a clubhouse, jogging tracks, and excellent connectivity.`,
      gallery: [
       { img: entrygate, title: 'Entry Gate' },
        { img: wideroad, title: 'Wide Road' },
        { img: drinagesystem, title: 'Draunage System' },
        { img: security, title: '24x7 Security' },
        { img: streetlight, title: 'Street Lights' },
        { img: playarea, title: 'Kids Play Area' },
        { img: park, title: 'Green Park' },
        { img: shoppingcomplex, title: 'Shopping Complex' }
      ],
      additionalImages: [
        { img: layout, title: 'Layout Plan' },
        { img: keyplan, title: 'KeyPlan' },
      ],
    },
  };

  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="text-center py-20 px-4 text-2xl font-semibold text-gray-600">
        Project not found
      </div>
    );
  }

  return (
    <div>
      {/* Top Banner with Title Overlay */}
      <div className="relative w-full">
        <img
          src={project.banner}
          alt={`${project.title} Banner`}
          className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 ">
          <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-[#33277B]">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mb-4">{project.location}</p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </div>
      </div>

      {/* Gallery of images */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h3 className="text-2xl font-bold mb-6 text-[#33277B]">Amenities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {project.gallery.map(({ img, title }, index) => (
            <div key={index} className="text-center">
              <img
                src={img}
                alt={title}
                className="w-full h-32 object-cover rounded-md shadow-md"
              />
              <p className="mt-2 text-sm font-medium text-gray-700">{title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Images Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h3 className="text-2xl font-bold mb-6 text-[#33277B]">Layout Plan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {project.additionalImages.map(({ img, title }, index) => (
            <div key={index} className="text-center">
              <img
                src={img}
                alt={title}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <p className="mt-3 text-lg font-semibold text-gray-800">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
