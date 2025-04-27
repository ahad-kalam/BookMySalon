
import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "haircut-women",
    name: "Women's Haircut",
    description: "Professional haircut service for women including wash, cut, and style.",
    price: 1200,
    duration: 60,
    image: "/Services_Images/Women's_Haircut.png",
    category: "Hair"
  },
  {
    id: "haircut-men",
    name: "Men's Haircut",
    description: "Professional haircut service for men including wash, cut, and style.",
    price: 800,
    duration: 45,
    image: "/Services_Images/Men's_Haircut.png",
    category: "Hair"
  },
  {
    id: "hair-color",
    name: "Hair Coloring",
    description: "Full hair coloring service including preparation, application, and styling.",
    price: 3500,
    duration: 120,
    image: "/Services_Images/Hair_coloring.png",
    category: "Hair"
  },
  {
    id: "highlights",
    name: "Highlights",
    description: "Partial or full highlights to add dimension and depth to your hair.",
    price: 3000,
    duration: 120,
    image: "/Services_Images/highlights.png",
    category: "Hair"
  },
  {
    id: "manicure",
    name: "Manicure",
    description: "Classic manicure including nail shaping, cuticle care, and polish.",
    price: 600,
    duration: 45,
    image: "/Services_Images/Nails_Shaping.png",
    category: "Nails"
  },
  {
    id: "pedicure",
    name: "Pedicure",
    description: "Relaxing pedicure including foot soak, exfoliation, and polish.",
    price: 800,
    duration: 60,
    image: "/Services_Images/Feet_soak.png",
    category: "Nails"
  },
  {
    id: "facial",
    name: "Facial Treatment",
    description: "Rejuvenating facial tailored to your skin type with cleansing, exfoliation, and mask.",
    price: 1800,
    duration: 60,
    image: "/Services_Images/Facial_treatment.png",
    category: "Skincare"
  },
  {
    id: "massage",
    name: "Relaxation Massage",
    description: "Full body massage to relieve tension and promote relaxation.",
    price: 2000,
    duration: 60,
    image: "/Services_Images/Relaxation_Massage.png",
    category: "Spa"
  },
  {
    id: "waxing",
    name: "Full Body Waxing",
    description: "Complete waxing service for smooth, hair-free skin.",
    price: 2500,
    duration: 90,
    image: "/Services_Images/Full_body_waxing.png",
    category: "Skincare"
  },
  {
    id: "makeup",
    name: "Makeup Application",
    description: "Professional makeup application for special events or everyday glamour.",
    price: 1500,
    duration: 45,
    image: "/Services_Images/Makeup_Application.png",
    category: "Makeup"
  }
];

export const categories = Array.from(new Set(services.map(service => service.category)));
