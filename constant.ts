import { IProfile } from "./types";

export const profileData: IProfile = {
    hero: {
        name: "Ahmed Abbasi",
        title: "MERN Stack Developer",
        subtitle: "Building scalable web applications with modern technologies",
        resume: "https://drive.google.com/file/d/1MvzfdLa1st-ws77YH0trEmL1ODiaPoMM/view?usp=sharing",
        social_links: {
            github: "https://github.com/Ahmed-Abbasi-Official",
            linkedin: "https://www.linkedin.com/in/ahmed-abbasi-9419012b2/",
        },
    },
    about: {
        description: "Passionate MERN Stack Developer with expertise in React, Node.js, and MongoDB. Dedicated to writing clean and scalable code, optimizing application performance, and mentoring aspiring developers.",
        expertise: [
            {
                icon: "Palette",
                title: "Frontend Development",
                skills: ["React.js", "Next.js", "TailwindCSS", "Bootstrap", "Ant Design", "Material UI"],
            },
            {
                icon: "Server",
                title: "Backend Development",
                skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "Cloudinary", "ImageKit"],
            },
            {
                icon: "Code2",
                title: "Cloud & DevOps",
                skills: ["Git", "GitHub", "Vercel", "Render", "Netlify", "Firebase"],
            },
        ],
    },
    experiences: [
        {
            title: "Web & App Development Trainer",
            company: "SMIT, Karachi",
            period: "Feb 2025 - Present",
            description: "Conducted training sessions, mentored students, and developed course content.",
            skills: ["Teaching", "Mentorship", "Curriculum Development"],
        },
        {
            title: "Full Stack Developer",
            company: "FoxMindTech",
            period: "Dec 2024 - Feb 2025",
            description: "Designed and developed full-stack applications using MERN stack.",
            skills: ["MERN", "API Integration", "Frontend Development", "Backend Development", "Cloud Deployment"],
        },
        {
            title: "Frontend Intern",
            company: "UxBolt",
            period: "Sep 2024 - Nov 2024",
            description: "Worked on UI development and optimized frontend performance.",
            skills: ["React.js", "Next.js", "TailwindCSS", "Ant Design"],
        },
    ],
    projects: [
        {
            title: "Stream-Based Video Chat App",
            description: "A real-time video calling app using React and Stream SDK, with secure authentication via Clerk and modern UI built with Tailwind and Radix UI.",
            images: ["/assets/videoCalling.png"],
            technologies: [
                "Next.js 14",
                "React 18",
                "TypeScript",
                "Clerk Auth",
                "Stream Video SDK",
                "Tailwind CSS",
                "Radix UI",
                "Lucide React",
                "React Datepicker"
            ],
            links: {
                live: "https://code-sync-one-nu.vercel.app/",
                github: "https://github.com/Ahmed-Abbasi-Official/Loom-Clone"
            }
        },
        {
            title: "Video Sharing Platform",
            description: "A fully responsive YouTube clone built with React and RapidAPI, offering video playback, channel browsing, and category-based filtering.",
            images: ["/assets/yt.png"], // Replace with actual image path
            technologies: [
              "Express.js",
              "MongoDB",
              "JWT",
              "Cloudinary",
              "Nodemailer",
              "Multer",
              "React.js",
              "Vite",
              "Tailwind CSS",
              "React Hook Form",
              "React Router",
              "React Query",
              "Axios",
              "Lucide Icons",
              "React Toastify"
            ],
            links: {
              live: "https://ahmii-play.vercel.app/", // Replace with actual live link
              github: "https://github.com/your-username/mega_project" // Replace with GitHub repo link
            }
          },
        {
            title: "Blogging Site",
            description: "A feature-rich MERN blogging platform for seamless reading, writing, and management with modern design and smooth performance.",
            images: ["/assets/Blogging Site Mockup.png"],
            technologies: ["MERN", "React.js", "MongoDB", "Express.js", "Node.js", "Zustand", "ImageKit"],
            links: {
                live: "https://ahmed-bloggify.vercel.app/",
                github: "https://github.com/Ahmed-Abbasi-Official/Blogging-APP"
            }
        },
        {
            title: "Animated-Website",
            description: "A fully responsive React project built with GSAP and Tailwind CSS, showcasing smooth animations and modern design.",
            images: ["/assets/Animated Website Mockup.png", "/assets/Animated Website Mobile Devices Mockup.png"],
            technologies: ["React.js", "GSAP", "Tailwind CSS", "Three.js"],
            links: {
                live: "https://gaming-animated-one.vercel.app/",
                github: "https://github.com/Ahmed-Abbasi-Official/Animated-Website"
            }
        },
        {
            title: "Chat App",
            description: "A responsive, real-time chat app built with React, Firebase, and Appwrite, featuring emoji support, live search, and state management with Redux Toolkit.",
            images: ["/assets/chatApp.png"],
            technologies: ["React.js", "Firebase", "Appwrite", "Redux Toolkit", "Vite", "Tailwind CSS", "React Router", "Emoji Picker"],
            links: {
              live: "https://abbasi-chatapp.netlify.app/",
              github: "https://github.com/Ahmed-Abbasi-Official/Chat_Application-Whatsapp-React"
            }
          }
          
          ,
        // {
        //     title: "RestaurantHub",
        //     description: "A streamlined restaurant website allowing users to explore restaurants and menus, with secure sign-in for adding items to the cart.",
        //     images: ["/assets/RestaurantHub Mockup.png"],
        //     technologies: ["React.js", "Firebase", "Authentication", "Storage"],
        //     links: {
        //         live: "https://restauranthub.vercel.app/",
        //         github: "https://github.com/Huzaifa-Khan-Official/RestaurantHub"
        //     }
        // },
        // {
        //     title: "Agency Website",
        //     description: "A web agency homepage showcasing services like design, speed optimization, and customization, with client testimonials and an app download CTA.",
        //     images: ["/assets/Agency Website Mockup.png"],
        //     technologies: ["React.js", "Next.js", "Framer Motion", "React Bootstrap"],
        //     links: {
        //         live: "https://next-agency-web.vercel.app/",
        //         github: "https://github.com/Huzaifa-Khan-Official/next-agency-web"
        //     }
        // },
        {
            title: "React Portfolio Maker",
            description: "An eye-catching portfolio site built with React, featuring dynamic animations and seamless transitions.",
            images: ["/assets/reactfolio.png"],
            technologies: ["React.js", "Framer Motion", "React Responsive Carousel", "React Toastify", "React Type Animation"],
            links: {
                live: "https://ahmedabbasi.netlify.app/",
                github: "https://github.com/Ahmed-Abbasi-Official/My-Portfolio"
            }
        },
        // {
        //     title: "Assignment Submission Portal",
        //     description: "A web-based platform designed for streamlined assignment submissions and management, featuring user authentication and real-time updates.",
        //     images: ["/assets/Assignment Submission Portal Mockup.png"],
        //     technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
        //     links: {
        //         live: "https://assignment-submission-portal.vercel.app/",
        //         github: "https://github.com/Ahmed-Abbasi-Official/My-Portfolio"
        //     }
        // },
    ],
    services: [
        {
            title: "Website Development",
            description: "Development of responsive and interactive websites for individuals, businesses, or organizations using HTML5, CSS3, JavaScript, and Bootstrap. Ensures mobile-friendly and optimized performance across all devices.",
            icon: "Globe"
        },
        {
            title: "Frontend Development",
            description: "Specialized in building intuitive user interfaces (UIs) and seamless user experiences (UX) with HTML5, CSS3, JavaScript, and React.js. Delivers fast, responsive single-page applications (SPAs).",
            icon: "Layout"
        },
        {
            title: "Custom Web Applications",
            description: "Creation of custom web applications using React.js with backend technologies like Node.js and Express.js. Integrates Firebase for real-time data, authentication, and hosting.",
            icon: "Code"
        },
        {
            title: "Web Hosting and Deployment",
            description: "Assistance in deploying websites and web applications on platforms like Firebase Hosting, Netlify, or traditional servers. Optimizes performance and ensures secure HTTPS connections.",
            icon: "Server"
        },
        {
            title: "Maintenance and Updates",
            description: "Ongoing maintenance services, including security patches, performance optimizations, and feature updates. Provides backups and uptime monitoring.",
            icon: "Settings"
        },
        {
            title: "Responsive Design Audits",
            description: "Evaluation of existing websites for responsiveness across devices and browsers. Implementation of improvements using CSS3 media queries and modern design principles.",
            icon: "TabletSmartphone"
        },
        {
            title: "API Integrations",
            description: "Integration of third-party APIs (social media, payment gateways, etc.) into web applications using JavaScript and React.js. Ensures secure and efficient data handling.",
            icon: "Link"
        },
        {
            title: "MERN Stack Development",
            description: "Full-stack application development using MongoDB, Express.js, React.js, and Node.js. Builds scalable solutions with secure authentication and database management.",
            icon: "Database"
        },
        // {
        //     title: "Mobile App Development",
        //     description: "Development of cross-platform mobile apps using React Native or Flutter. Focuses on responsive UI, real-time data, and smooth API integrations.",
        //     icon: "Smartphone"
        // },
        {
            title: "E-commerce Solutions",
            description: "Creation of custom e-commerce platforms with the MERN stack, including secure payments, shopping carts, and order management systems.",
            icon: "ShoppingCart"
        }
    ],
    certificates: [
        // {
        //     title: "Web & Mobile App Development",
        //     issuer: "S.M.I.T (Saylani Mass I.T Training)",
        //     date: "February 2025",
        //     image: "/assets/certificates/Web & App Development SMIT Certificate.png",
        // },
        // {
        //     title: 'JavaScript Essentials 1',
        //     issuer: 'CISCO Networking Academy',
        //     date: 'November 2024',
        //     image: '/assets/certificates/JavaScript_Essentials_1.png',
        // },
        // {
        //     title: 'JavaScript Essentials 2',
        //     issuer: 'CISCO Networking Academy',
        //     date: 'November 2024',
        //     image: '/assets/certificates/JavaScript_Essentials_2.png',
        // },
        {
            title: 'Responsive Web Design',
            issuer: 'freeCodeCamp',
            date: 'October 2025',
            image: '/assets/certificates/Responsive Web Design Certificate.png',
        },
        {
            title: 'Front End Development Libraries',
            issuer: 'freeCodeCamp',
            date: 'October 2025',
            image: '/assets/certificates/frontend libraries.png',
        },
        {
            title: 'React JS',
            issuer: 'Great Stack',
            date: 'October 2025',
            image: '/assets/certificates/reactjs.png',
        },
        // {
        //     title: 'JavaScript Algorithms and Data Structures (Beta)',
        //     issuer: 'freeCodeCamp',
        //     date: 'August 2024',
        //     image: '/assets/certificates/JavaScript Algorithms and Data Structures (Beta) Certificate.png',
        // },
        // {
        //     title: 'Communication & Soft Skils',
        //     issuer: 'DigiSkills',
        //     date: 'October 2022',
        //     image: '/assets/certificates/communication & soft skils certificate.png',
        // },
        // {
        //     title: 'Google Soft Skills',
        //     issuer: 'Google',
        //     date: 'Descember 2024',
        //     image: '/assets/certificates/google-soft-skills-program-certificate.png',
        // },
        // {
        //     title: 'Python Fundamentals Diploma',
        //     issuer: 'Alison',
        //     date: 'February 2023',
        //     image: '/assets/certificates/Python Fundamentals Diploma Certificate.png',
        // },
        // {
        //     title: 'Python Programming Essential',
        //     issuer: 'CISCO Networking Academy',
        //     date: 'March 2022',
        //     image: '/assets/certificates/Python-Programming Essential-certificate.png',
        // },
    ],
    contact: {
        email: "aymi.coding@gmail.com",
        phone: "+92-3231835011",
        address: "Baldia, Karachi, Pakistan",
    },
    year: new Date().getFullYear(),
};