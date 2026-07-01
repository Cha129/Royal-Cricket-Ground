import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  Camera,
  CircleDollarSign,
  Coffee,
  Crown,
  Droplets,
  Flag,
  Lamp,
  ListChecks,
  MapPinned,
  Medal,
  Phone,
  ShieldCheck,
  Store,
  Trophy,
  Users,
  UtensilsCrossed,
  Warehouse,
  Waves,
  Wifi,
} from "lucide-react";

import logoUrl from "@assets/image_1781620985747.png";
import groundSunsetWideUrl from "@assets/R1_1781620882635.webp";
import groundSunsetAngleUrl from "@assets/R2_1781620882634.webp";
import pavilionUrl from "@assets/R3_1781620882633.webp";
import loungeViewUrl from "@assets/Pitch_2_1781620865693.webp";
import inaugurationUrl from "@assets/Tournament_10_1781620865699.webp";
import groundDayWideUrl from "@assets/Pitch_3_1781620865691.webp";
import storefrontUrl from "@assets/R4_1781620882632.webp";
import ownerPortraitUrl from "@assets/Founder_2_1781620865690.webp";
import coFounderPortraitUrl from "@assets/image_1781702619294.png";
import ownerAwardUrl from "@assets/Award_1_1781620865697.webp";
import ownerMedalUrl from "@assets/Medal_1_1781620865695.webp";
import ownerTrophyUrl from "@assets/Award_2_1781620865696.webp";

import founderNew2Url from "@assets/Founder_2_1782830254784.webp";
import pitchNew3Url from "@assets/Pitch_3_1782830254785.webp";
import blooper4Url from "@assets/Blooper_4_1782830254786.webp";
import blooper3Url from "@assets/Blooper_3_1782830254786.webp";
import pitchNew2Url from "@assets/Pitch_2_1782830254786.webp";
import award3NewUrl from "@assets/Aeard_3_1782830254787.webp";
import medalNewUrl from "@assets/Medal_1_1782830254787.webp";
import trophy2NewUrl from "@assets/Award_2_1782830254787.webp";
import award1NewUrl from "@assets/Award_1_1782830254788.webp";
import tournament11Url from "@assets/Tornament_11_1782830254788.webp";
import tournament10NewUrl from "@assets/Tournament_10_1782830254789.webp";
import tournament9Url from "@assets/Tornament_9_1782830254789.webp";
import tournament4Url from "@assets/Tornament_4_1782830271242.webp";
import founder1NewUrl from "@assets/Founder_1_1782830271243.webp";
import tournament3Url from "@assets/Tornament_3_1782830271243.webp";
import r10Url from "@assets/R10_1782830271243.webp";
import tournament2Url from "@assets/Tornament_2_1782830271244.webp";
import tournament1Url from "@assets/Tournament_1_1782830271244.webp";

export const site = {
  name: "Royal Cricket Ground",
  shortName: "RCG",
  phone: "+91 90004 00411",
  whatsappNumber: "919550810878",
  whatsappDisplay: "+91 95508 10878",
  email: "royalcricketground@gmail.com",
  instagram: "https://www.instagram.com/royalcricketground/",
  youtube: "https://youtube.com/@royalcricketground?si=QXXmYGt7NfvNgGD1",
  address: "Road near Mango Villa Farm House, Peddamangalaram, Moinabad, Telangana 501504",
  mapEmbed:
    "https://maps.google.com/maps?q=17.342818,78.2379955&z=17&output=embed",
  mapLink:
    "https://www.google.com/maps/place/Royal+Cricket+Ground+(RCG)/@17.342818,78.2379955,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcbebc37e7790bd:0x2819a8e8f496e339!8m2!3d17.342818!4d78.2379955!16s%2Fg%2F11wy0fppw2?entry=ttu",
  openingHours: [
    "Morning slots · 6:00 AM – 10:00 AM",
    "Afternoon slots · 12:00 PM – 5:00 PM",
    "Evening & night slots · 6:00 PM – 12:00 AM",
  ],
};

export const navItems = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Book a Slot", to: "/book-slot" as const },
  { label: "Pricing", to: "/pricing" as const },
  { label: "Facilities", to: "/facilities" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Tournaments", to: "/tournaments" as const },
  { label: "Contact", to: "/contact" as const },
];

export const heroStats = [
  { label: "Ground type", value: "Professional turf" },
  { label: "Daily play windows", value: "3 slot bands" },
  { label: "Tournament-ready setup", value: "Team events" },
];

export const highlights: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: "Premium Turf",
    description: "Well-maintained cricket surface built for practice sessions, friendlies, and serious match days.",
    icon: Crown,
  },
  {
    title: "Night Matches",
    description: "Play high-energy evening cricket with a stadium-style atmosphere.",
    icon: Lamp,
  },
  {
    title: "Online Slot Booking",
    description: "Explore timings, pricing, and contact options that make reserving your game fast and simple.",
    icon: CalendarDays,
  },
  {
    title: "Tournament Hosting",
    description: "Run club events, local competitions, and knockout weekends with organized ground support.",
    icon: Trophy,
  },
  {
    title: "Practice Nets",
    description: "Dedicated training-friendly spaces for batting reps, bowling rhythm, and focused prep.",
    icon: ShieldCheck,
  },
  {
    title: "Spacious Parking",
    description: "Easy arrival and exit with practical parking access for bikes, cars, teams, and guests.",
    icon: Warehouse,
  },
  {
    title: "Changing Rooms",
    description: "Clean, secure player areas that support pre-match prep and post-game cool-down routines.",
    icon: Users,
  },
  {
    title: "Refreshments & Café",
    description: "Snacks, hydration, and essentials close to the ground so players stay match-ready.",
    icon: Coffee,
  },
];

export const aboutCards = [
  {
    title: "Built for local cricket culture",
    description:
      "Royal Cricket Ground is designed as a premium playing space where regular players, clubs, and communities can compete in a professional environment.",
  },
  {
    title: "A premium match-day experience",
    description:
      "From turf quality and lighting to viewing angles and player amenities, every detail supports more enjoyable cricket for every age group.",
  },
  {
    title: "A growing community hub",
    description:
      "It's more than a booking venue — it's a destination for practice sessions, tournaments, celebrations, and weekend cricket energy.",
  },
];

export const groundDetails: Array<{ label: string; value: string; icon: LucideIcon }> = [
  { label: "Ground Type", value: "Professional cricket turf venue", icon: Flag },
  { label: "Turf Type", value: "Premium maintained turf surface", icon: Waves },
  { label: "Pitch Type", value: "Match-ready pitch with training support", icon: ListChecks },
  { label: "Match Formats", value: "Practice, box cricket, and organized fixtures", icon: Medal },
  { label: "Seating Capacity", value: "Player and spectator viewing areas", icon: Users },
  { label: "Night Matches", value: "Available for evening and night play", icon: Lamp },
];

export const facilitiesOverview: Array<{ title: string; description: string; icon: LucideIcon }> = [
  { title: "Parking", description: "Spacious parking for bikes and cars.", icon: Warehouse },
  { title: "Practice Nets", description: "Dedicated cricket practice space.", icon: ShieldCheck },
  { title: "Dressing Rooms", description: "Comfortable player prep areas.", icon: Users },
  { title: "Washrooms", description: "Clean and maintained utility spaces.", icon: Droplets },
  { title: "Drinking Water", description: "Hydration support for long sessions.", icon: Waves },
  { title: "Café & Snacks", description: "Refreshments available near the ground.", icon: UtensilsCrossed },
  { title: "Spectator Area", description: "Relaxed viewing zones for supporters and guests.", icon: Camera },
  { title: "Free WiFi", description: "Fast internet access for players and visitors — great for live streaming and score tracking.", icon: Wifi },
];

export const slotBands = [
  {
    label: "Morning",
    time: "6:00 AM – 10:00 AM",
    status: "Available",
    note: "Best for early practice and fresh turf sessions.",
  },
  {
    label: "Afternoon",
    time: "12:00 PM – 5:00 PM",
    status: "Limited slots",
    note: "Great for team nets, coaching, and shorter fixtures.",
  },
  {
    label: "Evening / Night",
    time: "6:00 PM – 12:00 AM",
    status: "Booked fast",
    note: "Prime-time cricket under lights with peak energy.",
  },
];

export const pricing = [
  {
    title: "Weekday Pricing",
    price: "₹1,500 / hour",
    points: ["Ideal for practice sessions", "Flexible daytime slots", "WhatsApp quick confirmation"],
  },
  {
    title: "Weekend Pricing",
    price: "₹2,000 / hour",
    points: ["Peak demand timing", "Best for team play", "Priority support for repeat groups"],
  },
  {
    title: "Tournament Pricing",
    price: "Custom package",
    points: ["Multi-slot planning", "Ground support coordination", "Night-match add-ons available"],
  },
];

export const galleryFilters = ["All", "Ground", "Matches", "Pavilion", "Events", "Trophies"] as const;

export const galleryItems = [
  { title: "Sunset match atmosphere", category: "Matches", image: groundSunsetWideUrl },
  { title: "Golden-hour boundary view", category: "Ground", image: groundSunsetAngleUrl },
  { title: "Pavilion and player zone", category: "Pavilion", image: pavilionUrl },
  { title: "Lounge view toward the pitch", category: "Pavilion", image: loungeViewUrl },
  { title: "Ground inauguration moment", category: "Events", image: inaugurationUrl },
  { title: "Wide ground daylight view", category: "Ground", image: groundDayWideUrl },
  { title: "Royal store and reception", category: "Pavilion", image: storefrontUrl },
  { title: "Aerial ground view", category: "Ground", image: r10Url },
  { title: "Pitch surface close-up", category: "Ground", image: pitchNew3Url },
  { title: "Ground from the boundary", category: "Ground", image: pitchNew2Url },
  { title: "Tournament finals action", category: "Matches", image: tournament1Url },
  { title: "Match-day energy", category: "Matches", image: tournament2Url },
  { title: "Competitive innings", category: "Matches", image: tournament3Url },
  { title: "Tournament face-off", category: "Matches", image: tournament4Url },
  { title: "Battle on the crease", category: "Matches", image: tournament9Url },
  { title: "High-intensity fixture", category: "Matches", image: tournament10NewUrl },
  { title: "Championship moments", category: "Matches", image: tournament11Url },
  { title: "Pre-match warm-up fun", category: "Events", image: blooper3Url },
  { title: "Team spirit behind the scenes", category: "Events", image: blooper4Url },
  { title: "Trophy presentation ceremony", category: "Trophies", image: trophy2NewUrl },
  { title: "Award and recognition", category: "Trophies", image: award1NewUrl },
  { title: "Best player award", category: "Trophies", image: award3NewUrl },
  { title: "Medal ceremony", category: "Trophies", image: medalNewUrl },
  { title: "Founder portrait", category: "Events", image: founderNew2Url },
  { title: "Ground leadership", category: "Events", image: founder1NewUrl },
];

export const tournaments = [
  {
    name: "Royal Weekend League",
    date: "July 20, 2026",
    prize: "₹25,000",
    fee: "₹3,500",
    capacity: "8 teams",
  },
  {
    name: "Night Warriors Cup",
    date: "August 2, 2026",
    prize: "₹40,000",
    fee: "₹5,000",
    capacity: "12 teams",
  },
  {
    name: "Corporate Turf Challenge",
    date: "August 18, 2026",
    prize: "Trophies + awards",
    fee: "Custom",
    capacity: "6 teams",
  },
];

export const tournamentResults = [
  {
    title: "RCG Launch Trophy",
    winner: "Royal Strikers",
    runnerUp: "Boundary Kings",
    summary: "An energetic opening event with close finishes and strong local crowd support.",
  },
  {
    title: "Evening Light Series",
    winner: "Powerplay XI",
    runnerUp: "Pitch Invaders",
    summary: "Fast-paced night fixtures showcased the ground's premium playing atmosphere.",
  },
];

export const testimonials = [
  {
    quote:
      "One of the most polished local cricket venues we've played on — excellent lighting and a very smooth booking experience.",
    name: "Aditya R.",
    role: "Weekend team captain",
  },
  {
    quote:
      "The ground feels premium, especially for evening matches. Parking and player facilities make it easy for full squads.",
    name: "Sai Teja",
    role: "Tournament organizer",
  },
  {
    quote:
      "We booked quickly on WhatsApp and had all our slot details confirmed fast. Perfect for repeat practice sessions.",
    name: "Vamsi K.",
    role: "Club player",
  },
];

export const faqs = [
  {
    question: "How do I book a slot at Royal Cricket Ground?",
    answer:
      "Choose your preferred timing, fill in your basic details, and use the quick WhatsApp or call action to confirm your slot fast.",
  },
  {
    question: "Are night matches available?",
    answer:
      "Yes. Royal Cricket Ground supports evening and late-night play, subject to slot availability.",
  },
  {
    question: "Can we register a full team for tournaments?",
    answer:
      "Yes. The tournaments page includes a team registration form for upcoming competitions and event announcements.",
  },
  {
    question: "What facilities are available on-site?",
    answer:
      "The venue includes parking, changing areas, refreshment access, spectator spaces, practice-friendly infrastructure, and maintained utilities.",
  },
];

export const quickLinks = [
  { label: "Book a slot", to: "/book-slot" as const },
  { label: "Pricing", to: "/pricing" as const },
  { label: "View facilities", to: "/facilities" as const },
  { label: "See gallery", to: "/gallery" as const },
  { label: "Upcoming tournaments", to: "/tournaments" as const },
  { label: "Contact us", to: "/contact" as const },
];

export const socialLinks = [
  { label: "Instagram", href: site.instagram },
  { label: "YouTube", href: site.youtube },
  { label: "WhatsApp", href: `https://wa.me/${site.whatsappNumber}` },
];

export const images = {
  logo: logoUrl,
  hero: groundSunsetWideUrl,
  sunset: groundSunsetAngleUrl,
  pavilion: pavilionUrl,
  lounge: loungeViewUrl,
  inauguration: inaugurationUrl,
  wide: groundDayWideUrl,
  store: storefrontUrl,
  r10: r10Url,
  pitchNew: pitchNew3Url,
  pitchNew2: pitchNew2Url,
  tournament1: tournament1Url,
  tournament10: tournament10NewUrl,
  founder1New: founder1NewUrl,
  blooper3: blooper3Url,
};

export const owner = {
  name: "Shaik Lal Ahmad",
  role: "Founder & Owner · Royal Cricket Ground",
  tagline: "Star bowler, all-round player, and on-field fighter behind countless match-day wins.",
  bio: "Shaik Lal Ahmad is the heart of Royal Cricket Ground — the founder who built this venue from the ground up and one of the most respected players in the local cricket circuit. Known for his sharp bowling, fearless batting, and never-back-down attitude, he has led teams to victory in countless matches and tournaments.",
  achievements: [
    "Best bowler across multiple local tournaments",
    "All-rounder with match-winning performances",
    "On-field fighter known for clutch overs and finishes",
    "Mentor and host to teams playing at RCG",
  ],
  portrait: ownerPortraitUrl,
  gallery: [
    { url: ownerTrophyUrl, caption: "Lifting silverware after a tournament final" },
    { url: ownerAwardUrl, caption: "Receiving a player-of-the-match honour" },
    { url: ownerMedalUrl, caption: "Sharing the podium with young talent at RCG" },
    { url: trophy2NewUrl, caption: "Another trophy for the RCG cabinet" },
    { url: award1NewUrl, caption: "Player recognition at a major local event" },
    { url: award3NewUrl, caption: "Excellence award from the cricket community" },
    { url: medalNewUrl, caption: "Medal ceremony with the winning squad" },
    { url: founderNew2Url, caption: "Shaik Lal Ahmad — on the field" },
    { url: founder1NewUrl, caption: "Leading from the front at RCG" },
  ],
};

export const coFounder = {
  name: "Mohammad Nazeer",
  role: "Co-Founder · Royal Cricket Ground",
  tagline: "A passionate cricketer and driving force behind Royal Cricket Ground's vision.",
  bio: "Mohammad Nazeer is the co-founder of Royal Cricket Ground, bringing boundless passion for the sport and a shared vision of creating a world-class cricket facility in Moinabad. Together with Shaik Lal Ahmad, he has helped turn that vision into the premium venue it is today.",
  achievements: [
    "Co-founded Royal Cricket Ground from the ground up",
    "Passionate player and ambassador for local cricket",
    "Instrumental in building the tournament hosting culture at RCG",
    "Committed to growing grassroots cricket in Moinabad",
  ],
  portrait: coFounderPortraitUrl,
  gallery: [] as Array<{ url: string; caption: string }>,
  comingSoon: false,
};

export function buildWhatsAppMessage(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type PricingCard = {
  label: string;
  time: string;
  price: string;
  includes?: string[];
  highlight?: boolean;
  badge?: string;
};

export const weekdayPricing: PricingCard[] = [
  {
    label: "Whole Day Package",
    time: "9:00 AM – 6:00 PM",
    price: "₹6,000",
    badge: "Best Value",
    highlight: true,
    includes: [
      "Live Streaming on YouTube",
      "CricHeroes Support",
      "2 Premium Leather Balls",
      "Medals",
      "Free WiFi",
    ],
  },
  { label: "Morning Slot", time: "6:45 AM – 10:15 AM", price: "₹3,000" },
  { label: "Midday Slot", time: "10:45 AM – 2:15 PM", price: "₹2,500" },
  { label: "Evening Slot", time: "2:30 PM – 6:00 PM", price: "₹2,500" },
];

export const weekendPricing: PricingCard[] = [
  {
    label: "Morning Slot",
    time: "6:45 AM – 10:15 AM",
    price: "₹9,000",
    includes: ["Medals", "Free WiFi"],
  },
  {
    label: "Midday Slot",
    time: "10:45 AM – 2:15 PM",
    price: "₹7,000",
    includes: ["Medals", "Free WiFi"],
  },
  {
    label: "Evening Slot",
    time: "2:30 PM – 6:00 PM",
    price: "₹7,000",
    includes: ["Medals", "Free WiFi"],
  },
];

export const slotTimings = {
  weekday: [
    { label: "Whole Day", time: "9:00 AM – 6:00 PM", price: "₹6,000" },
    { label: "Morning Slot", time: "6:45 AM – 10:15 AM", price: "₹3,000" },
    { label: "Midday Slot", time: "10:45 AM – 2:15 PM", price: "₹2,500" },
    { label: "Evening Slot", time: "2:30 PM – 6:00 PM", price: "₹2,500" },
  ],
  weekend: [
    { label: "Morning Slot", time: "6:45 AM – 10:15 AM", price: "₹9,000" },
    { label: "Midday Slot", time: "10:45 AM – 2:15 PM", price: "₹7,000" },
    { label: "Evening Slot", time: "2:30 PM – 6:00 PM", price: "₹7,000" },
  ],
};

export const defaultBookingMessage = buildWhatsAppMessage(
  "Hi Royal Cricket Ground, I want to book a cricket slot.",
);

export const icons = {
  phone: Phone,
  map: MapPinned,
  price: CircleDollarSign,
  store: Store,
};
