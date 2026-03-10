import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaBootstrap,
  FaCss3Alt,
  FaGithub
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiFirebase,
  SiNetlify,
  SiExpress,
  SiSvelte,
  SiMui,
  SiCloudinary,
  SiRender,
  SiRedux,
  SiHostinger,
  SiNginx,
  SiVitest,
  SiJest,
  SiPostman,
} from "react-icons/si";
import {
  FiServer,
  FiLayout,
  FiCode,
} from "react-icons/fi";

const skills = {
  frontend: [
    { name: "React.js / Next.js", icon: <FaReact />, level: 92 },
    { name: "Svelte.js", icon: <SiSvelte />, level: 88 },
    { name: "JavaScript", icon: <SiJavascript />, level: 95 },
    { name: "HTML5", icon: <FaHtml5 />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, level: 92 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
    { name: "Bootstrap", icon: <FaBootstrap />, level: 88 },
    { name: "Material UI", icon: <SiMui />, level: 85 },
    { name: "Sass / SCSS", icon: <SiSass />, level: 85 },
    { name: "Redux Toolkit", icon: <SiRedux />, level: 85 },
    { name: "Media Queries", icon: <FiLayout />, level: 90 },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs />, level: 90 },
    { name: "Express.js", icon: <SiExpress />, level: 88 },
    { name: "REST API", icon: <FiServer />, level: 92 },
    { name: "GraphQL", icon: <SiGraphql />, level: 85 },
  ],
  database: [
    { name: "MongoDB", icon: <SiMongodb />, level: 90 },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 88 },
    { name: "Firebase", icon: <SiFirebase />, level: 85 },
    { name: "Cloudinary", icon: <SiCloudinary />, level: 85 },
  ],
  devops: [
    { name: "Docker", icon: <FaDocker />, level: 85 },
    { name: "AWS", icon: <FaAws />, level: 80 },
    { name: "Render", icon: <SiRender />, level: 90 },
    { name: "Netlify", icon: <SiNetlify />, level: 90 },
    { name: "Nginx", icon: <SiNginx />, level: 85 },
    { name: "Hostinger", icon: <SiHostinger />, level: 85 },
  ],
  testing: [
    { name: "Vitest", icon: <SiVitest />, level: 85 },
    { name: "Jest", icon: <SiJest />, level: 85 },
  ],
  design: [
    { name: "Figma", icon: <FaFigma />, level: 90 },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt />, level: 95 },
    { name: "GitHub", icon: <FaGithub />, level: 92 },
    { name: "VS Code", icon: <FiCode />, level: 95 },
    { name: "Postman", icon: <SiPostman />, level: 90 },
  ],
};

export default skills;