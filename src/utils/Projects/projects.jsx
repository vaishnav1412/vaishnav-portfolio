import bloodDonationImg from "../../assets/blood-donation-app.png";
import kooliApp from "../../assets/kooli.app.png";
import mentorBro from "../../assets/mentorbo.png";
import fitnessApp from "../../assets/Health-management.png";
import carRentals from "../../assets/car-rental.png";
import ecommerce from "../../assets/ecommerce.png";
import watchShop from "../../assets/watch-shop.png";

const projects = [
  {
    title: "Virtual Blood Bank System",
    category: "Full Stack Web Application",
    description:
      "A full-stack blood donation platform that connects blood donors and recipients. Users can register as donors, search donors by district and blood group, and manage requests. Includes authentication, donor management, and admin features.",
    image: bloodDonationImg,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Tailwind CSS",
      "SCSS",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/vaishnav1412/Blood-Bank-frontend",
    featured: true,
    gradient: "linear-gradient(135deg, #ff6a6a 0%, #ff4757 100%)",
  },

  {
    title: "YourMentorBro Platform",
    category: "Web Application",
    description:
      "YourMentorBro is a mentorship platform focused on coding and WordPress development. The platform includes a custom-built review system and mentorship program features. Designed and developed by me and currently under active development.",
    image: mentorBro,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
    ],
    liveUrl: "https://yourmentorbro.com/",
    githubUrl: "#",
    featured: true,
    gradient: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
  },

  {
    title: "Kooli App",
    category: "Web Application",
    description:
      "Kooli App is a platform designed to connect users with workers for daily labor services. The application provides a simple interface for service discovery, request management, and user interaction.",
    image: kooliApp,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    liveUrl: "https://kooliapp.in/",
    githubUrl: "#",
    featured: true,
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },

  {
    title: "Weight Management Web Application",
    category: "Full Stack Web Application",
    description:
      "A MERN stack fitness and weight management platform that includes workout videos, personalized diet plans, BMI calculator, and live training sessions through video calls.",
    image: fitnessApp,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },

  {
    title: "Car Rental System",
    category: "MERN Stack Application",
    description:
      "A car rental platform that allows users to browse vehicles, apply filters, and book cars online. Includes user management, admin dashboard, offer management, and integrated chat support.",
    image: carRentals,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },

  {
    title: "E-Commerce Platform",
    category: "Full Stack Web Application",
    description:
      "A complete e-commerce platform featuring product listing, cart management, checkout process, order management, and payment integration with a fully functional admin panel.",
    image: ecommerce,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "REST API",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "linear-gradient(135deg, #fccf31 0%, #f55555 100%)",
  },

  {
    title: "Watch Shop",
    category: "Frontend Web Application",
    description:
      "A responsive watch store website built with modern frontend technologies showcasing product listings, categories, and responsive UI design.",
    image: watchShop,
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
];

export default projects;