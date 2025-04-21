export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Team", link: "#team" },
    { name: "Contact", link: "#contact" },
  ];

  // data/index.ts

export const testimonials = [
  {
    id: "top",
    text: "This platform has significantly enhanced our productivity by providing powerful tools that allow us to analyze blockchain data seamlessly. It's perfect for teams looking for a reliable and easy-to-use platform for efficient solutions.",
    name: "Karabo",
    role: "Blockchain Developer",
    image: "/reviewers/alex.jpg",
  },
  {
    id: "bottom",
    text: "The user interface is incredibly smooth and intuitive. We have been able to complete tasks faster and more efficiently. The platform's features are really well thought out and help us manage our projects seamlessly, even under tight deadlines.",
    name: "Denzel",
    role: "Product Manager",
    image: "/reviewers/sara.jpg",
  },
  {
    id: "left",
    text: "An amazing platform that’s both powerful and user-friendly. It has truly transformed the way we approach and execute blockchain-based projects. The customer support is outstanding, and the platform's reliability gives us confidence in our work.",
    name: "Sanidile M'remi",
    role: "UX Designer",
    image: "/reviewers/michael.jpg",
  },
  {
    id: "right",
    text: "Highly recommend this tool for anyone involved in blockchain development or smart contract auditing. It is not only reliable and secure but also has excellent customer support that resolves issues quickly, making it an indispensable tool for my work.",
    name: "Maite",
    role: "Smart Contract Auditor",
    image: "/reviewers/fatima.jpg",
  },
];


  export const heroImage = {
    src: "/header/ABC.png",
    alt: "Africa's Blockchain Club",
    width: 1000, 
    height: 10000,
  };
  
  export const projectsData = [
    {
      title: "SAM: Smart Asset Management",
      description: "A research paper exploring blockchain-driven solutions for automating asset lifecycle management.",
      image: "/abcWork/sam6.png",
      link: "/vision",
    },
    {
      title: "Gamification in Blockchain Education",
      description: "This research analyzes how game mechanics can enhance blockchain learning platforms for better engagement.",
      image: "/abcWork/gameMel.png",
      link: "/vision",
    },
    {
      title: "BioHealth DApp",
      description: "A software prototype focused on managing personal health records securely using decentralized storage.",
      image: "/abcWork/BioHealth.jpg",
      link: "/page3",
    },
    {
      title: "DeFi Strategies: A Case Study",
      description: "This paper evaluates popular decentralized finance mechanisms and their economic implications.",
      image: "/abcWork/bybit.jpg",
      link: "/vision",
    },
    {
      title: "Decentralized Voting System",
      description: "A secure and transparent platform enabling users to cast votes on various proposals and elections.",
      image: "/abcWork/cryptovote.svg",
      link: "https://cryptovotes.vercel.app/",
    },
    {
      title: "SpxceDrive - Sharing Encrypted Files",
      description: "A cutting-edge platform using advanced encryption to ensure your file-sharing remains secure and private.",
      image: "/abcWork/spxcedrive.png",
      link: "https://spxce.vercel.app/",
    },
    {
      title: "7EduPact - Decentralized Education",
      description: "Transforming global education with a secure and decentralized platform that empowers students and educators.",
      image: "/abcWork/7edupact.svg",
      link: "https://7-edu-pact.vercel.app/",
    },
    {
      title: "Decentralized Agriculture Marketplace",
      description: "Empowering farmers and streamlining the supply chain through a transparent blockchain marketplace.",
      image: "/abcWork/harvestchain.svg",
      link: "/ui.apple.com",
    },
  ];
  

export const aboutText = [
  {
    title1: "Our",
    title2: "Mission",
    description:
      "To empower developers with the knowledge and tools needed to build the decentralized future of Africa.",
  },
  {
    title1: "Our",
    title2: "Vision",
    description:
      "A world where blockchain technology is accessible to all and drives positive change in African societies.",
  },
];

export const aboutImages = [
  {
    src: "/About/whiteABC.png",
    inverted: "/About/ABC.png", 
    width: 300,
    height: 300,
    alt: "Our Mission",
  },
  {
    src: "/About/7.png",
    inverted: "/About/bg1.png", 
    width: 310,
    height: 310,
    alt: "Our Vision",
  },
];

  export const teamImages = [
    { src: "/team/1.JPG", alt: "Team Member 1" }, 
    { src: "/team/3.jpg", alt: "Team Member 3" },
    { src: "/team/4.jpg", alt: "Team Member 4" }, 
    { src: "/team/5.jpg", alt: "Team Member 5" }, 
    { src: "/team/6.jpg", alt: "Team Member 6" }, 
    { src: "/team/7.jpg", alt: "Team Member 7" },
    { src: "/team/8.jpg", alt: "Team Member 8" }, 
    { src: "/team/9.jpg", alt: "Team Member 9" },
    { src: "/team/10.jpg", alt: "Team Member 10" }, 
    { src: "/team/11.jpg", alt: "Team Member 11" }, 
  ];
  
  export const contactUsData = [
    {
      title: "Web3 Fundamentals",
      text: "A comprehensive guide to the basics of Web3 development.",
      avatarType: "BookOpen",
    },
    {
      title: "Smart Contract Development",
      text: "Learn how to write and deploy smart contracts on various blockchains.",
      avatarType: "Code",
    },
    {
      title: "DApp Architecture",
      text: "Understand the architecture of decentralized applications.",
      avatarType: "Video",
    },
  ];

interface Field {
  name: string;
  placeholder: string;
  type: "text" | "email" | "select" | "textarea";
  options?: string[];
}

interface Form {
  text: string;
  fields: Field[];
}

type FormsData = {
  developer: Form;
  researcher: Form;
  partner: Form;
};
  

export const forms: FormsData = {
  developer: {
    text: "Hire a skilled developer for your project.",
    fields: [
      { name: "name", placeholder: "Your Name", type: "text" },
      { name: "email", placeholder: "Your Email", type: "email" },
      { name: "linkedin", placeholder: "LinkedIn Profile", type: "text" },
      { name: "association", placeholder: "Company/Organization", type: "text" },
      { name: "developerType", placeholder: "Type of Developer", type: "select", options: ["Frontend", "Backend", "Blockchain Developer", "Fullstack"] },
      { name: "employmentKind", placeholder: "Kind of Employment", type: "select", options: ["Remote", "On-site"] },
      { name: "employmentDuration", placeholder: "Duration of Employment", type: "select", options: ["0-6 months", "6-12 months", "More than 1 year"] },
      { name: "employmentType", placeholder: "Employment Type", type: "select", options: ["Part-time", "Full-time"] },
      { name: "message", placeholder: "Additional Message", type: "textarea" },
    ],
  },
  researcher: {
    text: "Collaborate with top researchers in your field.",
    fields: [
      { name: "name", placeholder: "Your Name", type: "text" },
      { name: "email", placeholder: "Your Email", type: "email" },
      { name: "linkedin", placeholder: "LinkedIn Profile", type: "text" },
      { name: "association", placeholder: "Company/Organization", type: "text" },
      { name: "workType", placeholder: "Type of Work", type: "select", options: ["Test Product", "Research Market", "Teach Blockchain", "Design a Curriculum", "Conduct Case Studies", "Analyze Blockchain Trends", "Develop Educational Content"] },
      { name: "message", placeholder: "Additional Message", type: "textarea" },
    ],
  },
  partner: {
    text: "Build strong partnerships with us.",
    fields: [
      { name: "name", placeholder: "Your Name", type: "text" },
      { name: "email", placeholder: "Your Email", type: "email" },
      { name: "linkedin", placeholder: "LinkedIn Profile", type: "text" },
      { name: "association", placeholder: "Company/Organization", type: "text" },
      { name: "partnershipType", placeholder: "Type of Partnership", type: "select", options: ["Host a Blockchain Function", "Be a Guest Speaker", "Sponsor Us", "Collaborate on Research", "Offer Internship Programs", "Provide Funding"] },
      { name: "message", placeholder: "Additional Message", type: "textarea" },
    ],
  },
};

  
  export const gridItems = [
    {
      id: 1,
      title: "We prioritize collaboration, fostering open communication within our community.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "collaboration.png",
      spareImg: "",
    },
    {
      id: 2,
      title: "Flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Tech stack",
      description: "We constantly improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a Decentralized Exchange",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/code.png",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to collaborate?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Decentralized Voting System",
      des: "A secure and transparent platform enabling users to cast votes on various proposals and elections.",
      img: "/cryptovote.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://cryptovotes.vercel.app/",
    },
    {
      id: 2,
      title: "SpxceDrive - Sharing Encrypted Files",
      des: "A cutting-edge platform for securely sharing and storing files. Utilizing advanced encryption technology, SxpceDrive ensures your data remains private and protected, offering a seamless and reliable solution for all your file-sharing needs.",
      img: "/spxcedrive.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg"],
      link: "https://spxce.vercel.app/",
    },
    {
      id: 3,
      title: "7EduPact - Decentralized Education",
      des: "A revolutionary platform transforming the education landscape by leveraging blockchain technology. 7EduPact enables secure, transparent, and decentralized learning environments, empowering educators and students to connect and collaborate globally while ensuring the integrity and accessibility of educational resources.",
      img: "/7edupact.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://7-edu-pact.vercel.app/",
    },
    {
      id: 4,
      title: "Decentralized Agriculture Marketplace",
      des: "A cutting-edge platform revolutionizing the agricultural sector by connecting farmers, buyers, and suppliers directly through blockchain technology. This marketplace ensures transparency, fair pricing, and secure transactions, empowering farmers and streamlining the supply chain for agricultural products.",
      img: "/harvestchain.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "/ui.apple.com",
    },
  ];
  
  export const team = [
    {
      quote:
          "Hello",
      name: "Karabo",
      title: "Software Dev",
    },
    {
      quote:
        "Welcome.",
      name: "Peter",
      title: "Researcher",
    },
    {
      quote:
        "Mr Luuuu",
      name: "Lucas",
      title: "Software Dev",
    },
    {
      quote:
        "Welcome",
      name: "Denzel",
      title: "Software Dev",
    },
    {
      quote:
        "Hello there",
      name: "Sandile",
      title: "Software Dev",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      link: "https://github.com/Africas-Blockchain-Club",
      img: "/git.svg",
    },
    {
      id: 2,
      link: "https://x.com/africasblock",
      img: "/twit.svg",
    },
    {
      id: 3,
      link: "https://www.linkedin.com/company/africa-s-blockchain-club/",
      img: "/link.svg",
    },
  ];
