import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser,FaFacebookMessenger, FaMapMarkerAlt, FaPaperPlane,FaFacebook, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";

import { SiRedux,SiSpring,SiNextdotjs,SiMongodb,SiTailwindcss,SiJava,SiVisualstudio,SiFirebase} from "react-icons/si";
import { DiJavascript, DiVim } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
// import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/proj1.png";
import work2 from "./assets/proj2.png";
import work3 from "./assets/proj3.png";
import work4 from "./assets/proj4.png";
import work5 from "./assets/proj5.png";
import work6 from "./assets/proj6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <a href="https://www.facebook.com/sailik.sarkar.9" target="_blank"> <FaFacebook /></a>
 ,
 <a href="https://www.instagram.com/its.sailik/" target="_blank"> <FaInstagram /></a>
  ,
  <a href="https://www.linkedin.com/in/sailik-sarkar-175b551b9/" target="_blank"> <FaLinkedin /></a>
 ,
  <a href="https://www.messenger.com/t/100081591113084/" target="_blank"> <FaFacebookMessenger /></a>
 
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Sailik Sarkar"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+919903887703"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "sarkarsailik1995@gmail.com"
  }
]

export const icons = [

  < SiRedux />



,
 <SiSpring />

, <SiNextdotjs />
, <FaSass />,
<SiTailwindcss/>,
<SiMongodb/>,
<SiJava/>,
<SiVisualstudio/>
,<SiFirebase/>
, <SiTypescript />

, <FaReact />

, 



, <FaFigma />]

export const experiences = [
  {
    
    id: 1,
    year: "2022",
    position: "Web Developer / App Developer",
    company: "Freelancing"
  },
  {
    id: 2,
    year: "2021",
    position: " Web Developer / App Developer",
    company: "rohsan enterprise"
  },
  {
    id: 3,
    year: "2019",
    position: " Web Developer",
    company: "rohsan enterprise"
  }
]

export const educations = [
  {
    
    id: 1,
    year: "2021-23 (ongoing)",
    Degree: "8.52 CGPA",
    Insitute: "Adamas University"
  },
  {
    id: 2,
    year: "2018-21",
    Degree: " Class 10 - 7.32 CGPA",
    Insitute: "Eminent college of management and technology"
  },
  {
    id: 3,
    year: "2017-18",
    Degree: " Class 12 - 60 %",
    Insitute: "Kalyani Public School"
  },
  {
    id: 4,
    year: "2016-17",
    Degree: " Class 10 - 82 %",
    Insitute: "Kalyani Public School"
  }
]
export const finishes = [


  {
    id: 3,
    number: "100+",
    itemName: "Designed Items"
  },
  {
    id: 2,
    number: "27+",
    itemName: "Satisfied Customers"
  },
  {
    id: 1,
    number: '3+',
    itemName: "Years Of Experience"
  },
  {
    id: 4,
    number: "50+",
    itemName: "Clients Served"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
    Gitlink:"https://github.com/SailikSarkar/ressa-main",
    Viewlink:"https://sailiksarkar.github.io/ressa-main/",
    Name:"Ressa / Web development solutions",
    Desc:"a startup app for web solutions   :-     ● Made Using react ● Designed using tailwind css ● backend used node js (fully responsive for mobile and tablets)  "
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "app",
    Gitlink:"https://github.com/SailikSarkar/Android-Social-media-app/tree/main/freshchatapp",
    Viewlink:"https://github.com/SailikSarkar/Android-Social-media-app/tree/main/freshchatapp",
    Name:"A social media app based on android ",
    Desc:"A social media app based on android  :-     ● Database used firebase ● Storage used firebase ● Authentication used ( google auth )  "
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
    Gitlink:"https://github.com/SailikSarkar/Faculty-feedback-system/tree/main/Faculty_feedback_system",
    Viewlink:"https://github.com/SailikSarkar/Faculty-feedback-system/tree/main/Faculty_feedback_system",
    Name:"Faculty feedback system ",
    Desc:"Facultu feedback system  :-     ● HTML 5 used ● Styled using Bootstrap  ● PHP used for backend ● mySQL used for Database (fully responsive for mobile and tablets) "
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "web",
    Gitlink:"",
    Viewlink:"",
    Name:"Netflix clone based on react",
    Desc:"Netflix clone :- ● made using react and firebase   ● Designed using tailwind css and SASS  ●  backend used node js (fully responsive for mobile and tablets) "
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: 'web',
    Gitlink:"",
    Viewlink:"",
    Name:"E-commerce website basedon react",
    Desc:"MERN  E-commerce website:- ● made on react   ● Designed using tailwind css and SASS  ●  backend used node js ● Mongo DB (fully responsive for mobile and tablets)"
  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
    Gitlink:"",
    Viewlink:"",
    Name:"Dark type portfolio website  ",
    Desc:"A portfolio website:- ● made on react   ● Designed using tailwind css and SASS    (fully responsive for mobile and tablets)"
  }
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Barasat , kolkata 743248"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "sarkarsailik1995@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91-9903887703"
  }
]
