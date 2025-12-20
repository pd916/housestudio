import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";


export const ICONS = [
  { icon: Instagram },
  { icon: Facebook },
  { icon: Twitter },
  { icon: Linkedin }
];

export const TEXT_DETAILS = [
    {
        id: 1,
        label: "TeachBoard SaaS",
        subLabel: "A platform where teaching meets technology — live video classes, recording, and interactive tools that make learning seamless.",
        color: ['#ffffff', '#8a2be2'], 
        image: '/images/bg-0.png',
        bg: "#000000" 
    },
    {
        id: 2,
        label: "Automation Pro",
        subLabel: "Smart workflow automation tailored for businesses, connecting apps and streamlining operations effortlessly.",
        color: ['#ff1493', '#00ffff'], 
        image: '/images/bg-1.jpg',
        bg: "#0000ff"
    },
    {
         id: 3,
        label: "Real Estate Hub",
        subLabel: "A full-stack solution for property management with role-based access, chat, and advanced filtering options.",
        color: ['#87cefa', '#0fffff'], 
        image: '/images/bg-3.png',
        bg: "#FFB347"
    },
    {
        id: 4,
        label: "TruckTrack App",
        subLabel: "Real-time logistics app for tracking trucks, routes, and deliveries with live updates.",
        color: ['#000000', '#e97451'], 
        image: '/images/bg-4.png',
        bg: "#A20F11"
    },
    {
        id: 5,
        label: "3D Interactive Website",
        subLabel: "Immersive 3D experiences combining animation, WebGL, and high-end UI to wow users.",
        color: ['#9370db', '#800080'], 
        image: '/images/bg-5.png',
        bg: "#87CEFA"
    },
    {
        id: 6,
        label: "Food Order Web App",
        subLabel: "A sleek, user-friendly platform for ordering food online — fast, intuitive, and fully integrated with payment and delivery tracking",
        color: ['#019194', '#ffff00'], 
        image: '/images/bg-5.jpg',
        bg: "#d8bfd8"
    },
]

export const  MENU = [
    {
        label:"Home",
        href: "/"
    },
    {
        label:"Work",
        href: "/work"
    },
    {
        label:"Contact",
        href: "/contact"
    },
]

export const heroSections = [
   {
    title: "Teachboardly",
    subtitle: "Live Teaching SaaS",
    description: "Teachboardly lets users teach live on a canvas during video calls, record lectures, and interact in real-time. Perfect for online classrooms and interactive sessions.",
    image: "/images/teach.png",
  },
  {
    title: "RealEstate Pro",
    subtitle: "Web App with Chat & Dashboard",
    description: "A full-featured real estate platform with role-based authentication, user dashboard, chat system, and property management.",
    image: "/images/estate.png",
  },
  {
    title: "Automation SaaS",
    subtitle: "Coming Soon",
    description: "A modern SaaS web application for automotive services, designed to simplify operations and enhance user experience.",
    image: "/images/bg-4.png",
  },
  {
    title: "Trucking App",
    subtitle: "Coming Soon",
    description: "A responsive 3D trucking management app to track logistics and operations in real-time. Optimized for desktop and mobile.",
    image: "/images/truck.png",
  },
  {
    title: "3D Responsive Web App",
    subtitle: "Next-Gen Experience",
    description: "An upcoming project showcasing fully responsive 3D web interactions, animations, and immersive user experiences.",
    image: "/images/anime.png",
  },
];
