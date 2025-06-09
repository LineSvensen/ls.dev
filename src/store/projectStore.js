import { create } from "zustand";

export const useProjectStore = create(() => ({
  projects: [
    {
      id: "booking",
      title: "Holidaze",
      image: "/src/assets/gif-blog.gif",
      description:
        "A online marketplace for short-and-long-term homestays. Registered users can book a venue and/or list a venue to be booked.",
      website: "https://pe2025.onrender.com/",
      github: "https://github.com/LineSvensen/Project-exam-2",
    },
    {
      id: "auction",
      title: "BidBuddy",
      image: "/src/assets/gif-blog.gif",
      description:
        "Online auction site where registered users can use coins to bid on listings and create/update/delete listings. ",
      website: "https://js2-sp-auction-website.vercel.app/",
      github: "https://github.com/LineSvensen/js2-sp-auction-website",
    },
    {
      id: "shop",
      title: "ShopDrop",
      image: "/src/assets/gif-blog.gif",
      description:
        "An e-commerce store where users can contact trough form, filter products on sale, add and remove from cart.",
      website: "https://shopdrop-online-store-react.netlify.app/",
      github: "https://github.com/LineSvensen/CA-react-online-store",
    },
    {
      id: "game",
      title: "FloppyFlap",
      image: "/src/assets/gif-blog.gif",
      description:
        "This is my first complete game. Help the little creature named Flob jump through the skies without hitting the pipes.",
      website: "https://floppy-flap.vercel.app/",
      github: "https://github.com/LineSvensen/floppy-flap",
    },
    {
      id: "blog",
      title: "Blog",
      image: "/src/assets/gif-blog.gif",
      description:
        "My first fullstack project with my own backend (API, mySQL). Authorized login that will let admin (me) create posts.",
      website: "https://ls-blog-eight.vercel.app/",
      github: "https://github.com/LineSvensen/ls-blog",
    },
    {
      id: "shop",
      title: "Elanetto Design",
      image: "/src/assets/gif-blog.gif",
      description:
        "Fullstack group project where we developed Anette's sticker shop using her own backend.",
      website: "https://elanettodesign.onrender.com/",
      github: "https://github.com/elanetto/elanettoDesign",
    },
    {
      id: "app",
      title: "FoodFairy",
      image: "/src/assets/gif-blog.gif",
      description:
        "Group project where we made an app that will suggest a recipe based on what you have in your fridge.",
      website: "https://foodfairy.netlify.app/",
      github: "https://github.com/FoodFairyFED1/FoodFairy",
    },
    {
      id: "museum",
      title: "Kids Science Museum",
      image: "/src/assets/gif-blog.gif",
      description: "CSS only website to demonstate basic CSS skills.",
      website: "https://semester-project-xi.vercel.app/",
      github: "https://github.com/LineSvensen/semester-project",
    },

    // Add other projects here...
  ],
}));

// {
//   id: "blog",
//   title: "Blog with management system",
//   image: "/src/assets/gif-blog.gif",
//   description:
//     "Blog with authorized login that will let admin post, edit/delete posts and register new account.",
//   website: "https://project-exam-1-line-svensens-projects.vercel.app/",
//   github: "https://github.com/LineSvensen/project-exam-1",
// },
