import {
  FiPenTool,
  FiCode,
  FiAward,
  FiGithub,
} from "react-icons/fi";
import {
  FaReact,
  FaAws,
} from "react-icons/fa";

const achievements = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: <FaAws />,
    credential: "AWS-12345",
    link: "#",
  },
  {
    title: "Google UX Design Certificate",
    issuer: "Google",
    date: "2022",
    icon: <FiPenTool />,
    credential: "GUX-67890",
    link: "#",
  },
  {
    title: "Meta Full Stack Developer",
    issuer: "Meta",
    date: "2022",
    icon: <FiCode />,
    credential: "META-54321",
    link: "#",
  },
  {
    title: "Best Innovation Award",
    issuer: "TechCrunch Disrupt",
    date: "2023",
    icon: <FiAward />,
    description: "For AI-powered analytics platform",
  },
  {
    title: "Speaker at React Summit",
    issuer: "React Community",
    date: "2023",
    icon: <FaReact />,
    description: 'Presented on "Building Scalable React Apps"',
  },
  {
    title: "Open Source Contributor",
    issuer: "Various Projects",
    date: "2020 - Present",
    icon: <FiGithub />,
    description: "Contributed to 20+ open source projects",
  },
];

export default achievements;