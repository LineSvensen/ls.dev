import { create } from "zustand";

export const useProjectStore = create(() => ({
  projects: [
    {
      id: "booking",
      title: "Holidaze",
      image: "/src/assets/holidaze.png",
      description:
        "A online marketplace for short-and-long-term homestays. Registered users can book a venue and/or list a venue to be booked.",
      details: `Holidaze is a responsive and modern online marketplace for short and long homestays. The design is focused on accessability and minimalism (whitespace). Inspired by the popular websites today like Airbnb, booking.com, Finn.no and Trivago.

Altough i was inspired by Airbnb's many genius solution and UX, i was a bit dissapointed with some parts. On Holidaze, you will register and log in at the same page no matter if you are going to be a venue manager or customer that books trips. Same goes for the profile page - and - its very clear where to navigate. My trips or My venues. From my venues, you will find your customers. You will be naturally guided by this UX. This will make it a smooth experience for everyone.

My biggest focus with this project was to, as mentioned, make it smooth, fast and seamless.

Since this is a exam project, unfortunately the schools API didnt have everything set up for me to really make this a complete 10/10 product. Further down i will mention improvement (for myself and the API).`,
      website: "https://pe2025.onrender.com/",
      github: "https://github.com/LineSvensen/Project-exam-2",
    },
    {
      id: "auction",
      title: "BidBuddy",
      image: "/src/assets/bidbuddy.png",
      description:
        "Online auction site where registered users can use coins to bid on listings and create/update/delete listings. ",
      details: `Welcome to this repo! This is BidBuddy; a dynamic and user-friendly auction platform where users can list, bid, and manage listings seamlessly. Whether you're buying vintage treasures or selling valuable collectibles, BidBuddy ensures a smooth and engaging experience. As for now, users have to register with a @stud.noroff.no mail and will be given 1000 "credits" they can use to bid with. So no real payments... Yet ;) `,
      website: "https://js2-sp-auction-website.vercel.app/",
      github: "https://github.com/LineSvensen/js2-sp-auction-website",
    },
    {
      id: "store",
      title: "ShopDrop",
      image: "/src/assets/shopdrop.png",
      description:
        "An e-commerce store where users can contact trough form, filter products on sale, add and remove from cart.",
      details: `This is a React-based eCommerce application for browsing and purchasing products. The project includes features like contact trough form, search, sorting, adding items to a cart, and viewing product details. This website demonstrates the basics with using an online store, without the authentication-part.`,
      website: "https://shopdrop-online-store-react.netlify.app/",
      github: "https://github.com/LineSvensen/CA-react-online-store",
    },
    {
      id: "game",
      title: "FloppyFlap",
      image: "/src/assets/floppyy.png",
      description:
        "This is my first complete game. Help the little creature named Flob jump through the skies without hitting the pipes.",
      details: `How far can you go? Can you beat your last record? Inspired by the beloved and now-retired mobile game, Flappy Bird.

As the first complete game I've created, it's been a lot of fun watching it come together. Future plans include setting up a backend to support a public high score list. I'm open to adding more obstacles and challenges to make the game even more engaging.`,
      website: "https://floppy-flap.vercel.app/",
      github: "https://github.com/LineSvensen/floppy-flap",
    },
    {
      id: "blog",
      title: "Blog",
      image: "/src/assets/blogls.png",
      description:
        "My first fullstack project with my own backend (API, mySQL). Authorized login that will let admin (me) create posts.",
      details: `I made a blog for myself where i can create posts about my developer-journey and share advice. Visitors can read posts. The plan is to have full CRUD (its coming).

Theres some additional/unused code in this project, in case i want to scale up the blog (platforms, multiple users and admins).

The user experience and overall design will be more improved soon.

`,
      website: "https://ls-blog-eight.vercel.app/",
      github: "https://github.com/LineSvensen/ls-blog",
    },
    {
      id: "stickershop",
      title: "Elanetto Design",
      image: "/src/assets/elanetto.png",
      description:
        "Fullstack group project where we developed Anette's sticker shop using her own backend.",
      details: `A very fun school project, but also something our classmate Anette really needed. She makes and selles stickers, and it was about time she had her own website for it. We were a great team: Anette, Panida, Helene and me.`,
      website: "https://elanettodesign.onrender.com/",
      github: "https://github.com/elanetto/elanettoDesign",
    },
    {
      id: "app",
      title: "FoodFairy",
      image: "/src/assets/foodfairy.png",
      description:
        "Group project where we made an app that will suggest a recipe based on what you have in your fridge.",
      details: `Very fun project to make. We wanted to create something we could use day to day. Very handy.`,
      website: "https://foodfairy.netlify.app/",
      github: "https://github.com/FoodFairyFED1/FoodFairy",
    },
    {
      id: "museum",
      title: "Kids Science Museum",
      image: "/src/assets/museum.png",
      description: "CSS only website to demonstate basic CSS skills.",
      details: `This is a project on HTML and CSS only. No javascript at all. No react. Nothing. This project was a part of the first year at my front end education. It display what i learned: raw CSS.`,
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
