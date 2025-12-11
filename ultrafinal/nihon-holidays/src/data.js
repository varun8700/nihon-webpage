// src/data.js
import { Globe, Mountain, Ship, MapPin, Sun } from "lucide-react";

// ----------- COMPANY DETAILS -----------
export const COMPANY_DETAILS = {
  name: "Nihon Holidays",
  phone: "+91 98765 43210",
  email: "info@nihonholidays.com",
  address: "Hyderabad, Telangana, India",
  motto: "Commit Less & Deliver More",
  years: "18",
  memberships: "TOAT & IATTE",
  type: "B2B & B2C Services"
};

// ----------- DOMESTIC PACKAGES (India) -----------
export const domesticPackageData = {
  kashmir: {
    id: "kashmir",
    name: "Kashmir: Paradise on Earth",
    intro: "Explore majestic valleys, serene lakes, and snow-capped peaks.",
    icon: Mountain,
    // Main Cover: Snow Mountains (Roshni Ray)
    cover: "https://images.pexels.com/photos/35058743/pexels-photo-35058743.jpeg?auto=compress&cs=tinysrgb&w=800", 
    description: "Srinagar, Gulmarg, Pahalgam, Sonmarg.",
    gallery: [
      "https://images.pexels.com/photos/35058743/pexels-photo-35058743.jpeg?auto=compress&cs=tinysrgb&w=800", // Cover
      "https://images.pexels.com/photos/3974089/pexels-photo-3974089.jpeg?auto=compress&cs=tinysrgb&w=800",   // Man in Snow
      "https://images.pexels.com/photos/16182232/pexels-photo-16182232.jpeg?auto=compress&cs=tinysrgb&w=800" // Lake Paddling
    ],
    options: [
      {
        duration: "5 Days / 4 Nights",
        title: "Srinagar, Gulmarg & Pahalgam",
        highlights: "Houseboat stay, Dal Lake, Gondola ride, saffron fields.",
        itinerary: [
          "Arrival in Srinagar, check-in to houseboat.",
          "Srinagar sightseeing – Mughal Gardens & local markets.",
          "Drive to Gulmarg – optional Gondola ride.",
          "Drive to Pahalgam via saffron fields.",
          "Free time in Pahalgam, then transfer to Srinagar airport.",
        ],
      },
    ],
  },
  
  vizag: {
    id: "vizag",
    name: "Vizag & Araku Valley",
    intro: "Jewel of the East Coast. Pristine beaches meet the Eastern Ghats.",
    icon: MapPin,
    // Cover: Aerial Beach View (Pexels)
    cover: "https://images.pexels.com/photos/4253835/pexels-photo-4253835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Beaches, Araku, Borra Caves.",
    gallery: [
      "https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1699336539/bbj/dyoflojm5avnwmybtunb.jpg", // Aerial Beach
      "https://framedventures.com/wp-content/uploads/2022/04/vizag-to-araku-valley-distance-1024x512.jpg", // Araku Valley
      "https://s7ap1.scene7.com/is/image/incredibleindia/varaha-lakshmi-narasimha-temple-visakhapatnam-andhra-pradesh-3-attr-hero?qlt=82&ts=1742150840314" //simhachalm temple 
    ],
    options: [
      {
        duration: "4 Days / 3 Nights",
        title: "Vizag, Araku & Borra Caves",
        highlights: "RK Beach, Kailasagiri, Araku Valley viewpoints, coffee estates.",
        itinerary: [
          "Arrive Vizag – RK Beach, Submarine Museum.",
          "Drive to Araku – waterfalls & coffee plantations.",
          "Borra Caves visit & return to Vizag.",
          "Free time for beach / shopping – departure.",
        ],
      },
    ],
  },

  kerala: {
    id: "kerala",
    name: "Kerala: God's Own Country",
    intro: "Lush green landscapes, tranquil backwaters, and pristine beaches.",
    icon: Ship,
    cover: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Backwaters, Munnar, Varkala.",
    gallery: [
      "https://s7ap1.scene7.com/is/image/incredibleindia/1-jatayu-rock-kumarakom-kerala-2-city-hero?qlt=82&ts=1726672494503", // jayathu earth centre
      "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/14785/production/_113354838_4900f398-a00f-42a2-8c23-9f5c332dbc0c.jpg.webp", // Padmanabhaswamy Temple
      "https://www.clubmahindra.com/blog/media/section_images/banner1920-827ba76d7063797.webp"  // Munnar Tea Gardens
    ],
    options: [
      {
        duration: "7 Days / 6 Nights",
        title: "Backwaters, Hills & Coastal Vibes",
        highlights: "Houseboat, Athirapally falls, Varkala beach.",
        itinerary: [
          "Arrive Cochin – drive to Athirapally waterfalls.",
          "Proceed to Munnar – tea gardens & viewpoints.",
          "Munnar sightseeing – Eravikulam, Top Station.",
          "Drive to Alleppey – houseboat backwater cruise.",
          "Drive to Kollam, visit Munroe Island.",
          "Head to Varkala – cliff beach, sunset point.",
          "Departure from Trivandrum.",
        ],
      },
    ],
  },

  karnataka: {
    id: "karnataka",
    name: "Karnataka: Heritage & Hills",
    intro: "Heritage palaces, coffee plantations, and misty hills.",
    icon: MapPin,
    cover: "https://images.pexels.com/photos/4134644/pexels-photo-4134644.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Coorg, Mysore, Wayanad.",
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/97/73/07/photo4jpg.jpg?w=900&h=500&s=1", // cubbon park
      "https://www.easeindiatrip.com/blog/wp-content/uploads/2025/02/Karnataka-Coorg-04.jpg", // Coorg
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0od-8Sx0JtC9a4H94eSRfoRdoZrCwD061xg&s"  // Hampi/Heritage
    ],
    options: [
      {
        duration: "6 Days / 5 Nights",
        title: "Bangalore, Mysore & Coorg",
        highlights: "Mysore Palace, coffee estates, Dubare Elephant Camp.",
        itinerary: [
          "Arrive Bangalore – Lalbagh, Cubbon Park.",
          "Drive to Mysore – Srirangapatna, Palace.",
          "Mysore sightseeing – Chamundi Hills, Zoo.",
          "Drive to Coorg – Dubare Elephant Camp.",
          "Coorg sightseeing – Abbey Falls, coffee plantations.",
          "Drive back to Bangalore – departure.",
        ],
      },
    ],
  },

  tamilnadu: {
    id: "tamilnadu",
    name: "Tamilnadu: Temple Trails",
    intro: "Ancient Dravidian masterpieces and cool hill stations.",
    icon: Sun,
    cover: "https://images.pexels.com/photos/1128408/pexels-photo-1128408.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Madurai, Rameswaram, Ooty.",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1IrQAJug1min652sFlXnIJUFeVMWbZHiqw&s", // french city
      "https://rameswaramtravelguide.com/wp-content/uploads/2015/03/Ramanathswamy-third-corridor.jpg", // Rameswaram Corridor
      "https://cdn.thedecorjournalindia.com/wp-content/uploads/2022/03/Brihadeshwara-Temple-A-structure-conceived-with-grace-and-Magnificence-1.jpg"  // Brihadeeswarar Temple
    ],
    options: [
      {
        duration: "11 Days / 10 Nights",
        title: "Great Temple Circuit",
        highlights: "Mahabalipuram shore temple, Meenakshi temple.",
        itinerary: [
          "Arrive Chennai – Kapaleeshwarar Temple.",
          "Drive to Kanchipuram & Mahabalipuram.",
          "Proceed to Pondicherry – French colony.",
          "Drive to Kumbakonam – Navagraha Temples.",
          "Transfer to Tanjore – Brihadeeswarar Temple.",
          "Drive to Trichy – Rock Fort Temple.",
          "Proceed to Rameswaram – Ramanathaswamy Temple.",
          "Dhanushkodi excursion.",
          "Drive to Madurai – Meenakshi Amman Temple.",
          "Free time & Departure.",
        ],
      },
    ],
  },

  himachal: {
    id: "himachal",
    name: "Himachal: Mountains Calling",
    intro: "Majestic Himalayan mountains, lush green valleys, and waterfalls.",
    icon: Mountain,
    cover: "https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Shimla, Manali, Rohtang.",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZPBCvd1hRcHh8uhNvcbA7_OZSse_2I23Teg&s", // Shimla
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZV2iSY6QOCC3u629ibl_aoPcEV5ApowZMw&s", // Manali Valley
      "https://manalitourism.co.in/images/places-to-visit/headers/hadimba-himachal-park-manali-header-manali-tourism.jpg.jpg"  // Hadimba Temple
    ],
    options: [
      {
        duration: "6 Days / 5 Nights",
        title: "Shimla & Manali Highlights",
        highlights: "Mall Road, Kufri, Solang Valley, Hadimba Temple.",
        itinerary: [
          "Arrive Chandigarh – drive to Shimla.",
          "Shimla & Kufri sightseeing.",
          "Drive to Manali via scenic Kullu Valley.",
          "Manali sightseeing – Hadimba Temple.",
          "Excursion to Solang Valley / Rohtang.",
          "Drive back to Chandigarh – departure.",
        ],
      },
    ],
  },

  hyderabad: {
    id: "hyderabad",
    name: "Hyderabad: City of Pearls",
    intro: "A fusion of Nizam's glory and modern marvels.",
    icon: Globe,
    cover: "https://assets.cntraveller.in/photos/67e6325b66045922dcc66c11/master/w_1600%2Cc_limit/GettyImages-142605497.jpg0",
    description: "Charminar, Ramoji, Srisailam.",
    gallery: [
      "https://traveltradejournal.com/wp-content/uploads/2024/07/Ramoji-Film-City-_Movie-Magic-Top-View.jpg", // ramoji film city
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Birla_Mandir%2C_Hyderabad.png", // Birla Mandir
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqHCQSv2C5B6SgcdJCGvFTcc2BvjUdEtQ2A&s"  // Golconda Fort
    ],
    options: [
      {
        duration: "4 Days / 3 Nights",
        title: "Hyderabad & Ramoji Film City",
        highlights: "Charminar, Hussain Sagar, Ramoji Film City.",
        itinerary: [
          "Arrive Hyderabad – Charminar & Laad Bazaar.",
          "City tour – Birla Mandir, Hussain Sagar.",
          "Full-day Ramoji Film City guided tour.",
          "Optional Srisailam trip / shopping – departure.",
        ],
      },
    ],
  },

  lakshadweep: {
    id: "lakshadweep",
    name: "Lakshadweep Islands",
    intro: "India's Coral Paradise. Turquoise lagoons and untouched beaches.",
    icon: Ship,
    cover: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Agatti, Bangaram Islands.",
    gallery: [
      "https://seasontours.org/wp-content/uploads/2024/04/4-29.webp", // random
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkok8-Tv0K0jV1_Qt9UgDFo3aJWiP08wq8w&s", // Palm Trees
      "https://cdn.tripuntold.com/media/photos/location/2024/02/08/d75c66d4-866d-435b-9cdf-3ce2a92d0343.jpg"  // Lagoon
    ],
    options: [
      {
        duration: "5 Days / 4 Nights",
        title: "Agatti, Kavaratti & Bangaram",
        highlights: "Snorkeling, lagoon cruise, coral watching.",
        itinerary: [
          "Arrive Agatti – lagoon stroll.",
          "Boat transfer to Kavaratti – water sports.",
          "Full-day Bangaram excursion.",
          "Leisure day – optional snorkeling.",
          "Departure from Agatti.",
        ],
      },
    ],
  },
};

export const domesticPackages = Object.values(domesticPackageData);

// ----------- INTERNATIONAL PACKAGES (Outside India) -----------
export const internationalPackageData = {
  bali: {
    id: "bali",
    name: "Bali: Island of the Gods",
    region: "asia",
    duration: "6 Days / 5 Nights",
    cover: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Rice terraces & Temples",
    intro: "Experience Bali’s serene temples, lush rice terraces, vibrant beach clubs and café culture.",
    gallery: [
        "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1031700/pexels-photo-1031700.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1643130/pexels-photo-1643130.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    options: [
      {
        duration: "6D / 5N – Ubud & Kuta",
        title: "Highlights of Bali",
        itinerary: [
          "Arrival in Denpasar – transfer to Ubud.",
          "Ubud sightseeing – Monkey Forest, rice terraces.",
          "Kintamani & Tirta Empul Temple.",
          "Transfer to Kuta / Seminyak. Beach time.",
          "Full-day Nusa Penida tour.",
          "Shopping, checkout and airport drop."
        ],
      },
    ],
  },
  dubai: {
    id: "dubai",
    name: "Dubai: Desert & Skyscrapers",
    region: "middle-east",
    duration: "5 Days / 4 Nights",
    cover: "https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Desert Safari & Shopping",
    intro: "Classic Dubai combo with city tour, desert safari with BBQ dinner, and Marina cruise.",
    gallery: [
        "https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4492650/pexels-photo-4492650.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3763789/pexels-photo-3763789.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    options: [
      {
        duration: "5D / 4N – Dubai City",
        title: "Signature Dubai",
        itinerary: [
          "Arrive in Dubai, evening Dhow Cruise.",
          "Half-day city tour with Jumeirah Beach.",
          "Desert safari with dune bashing & BBQ.",
          "Day free / Optional: Burj Khalifa.",
          "Checkout and airport drop."
        ],
      },
    ],
  },
  maldives: {
    id: "maldives",
    name: "Maldives: Overwater Bliss",
    region: "beach",
    duration: "4 Days / 3 Nights",
    cover: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Private Island Resort",
    intro: "Short and sweet escape to a Maldivian island resort with transfers by speedboat.",
    gallery: [
        "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    options: [
      {
        duration: "4D / 3N – Resort Stay",
        title: "Maldives Getaway",
        itinerary: [
          "Arrive in Male – speedboat transfer to resort.",
          "Leisure at resort – beach, snorkelling.",
          "Leisure. Optional spa / sunset cruise.",
          "Checkout, speedboat transfer back to Male."
        ],
      },
    ],
  },
  singaporeMalaysia: {
    id: "singaporeMalaysia",
    name: "Singapore & Malaysia Highlights",
    region: "asia",
    duration: "7 Days / 6 Nights",
    cover: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "City Lights & Culture",
    intro: "Combo of modern Singapore and vibrant Kuala Lumpur with city tours and attractions.",
    gallery: [
        "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3152125/pexels-photo-3152125.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    options: [
      {
        duration: "7D / 6N – Singapore & KL",
        title: "Best of Singapore & Malaysia",
        itinerary: [
          "Arrive Singapore, evening Night Safari.",
          "City tour + Sentosa Island.",
          "Universal Studios or free day.",
          "Travel to Kuala Lumpur by coach.",
          "KL city tour – Twin Towers, Batu Caves.",
          "Shopping / free day in KL.",
          "Checkout and airport drop."
        ],
      },
    ],
  },
  thailand: {
    id: "thailand",
    name: "Thailand: Bangkok & Phuket",
    region: "beach",
    duration: "6 Days / 5 Nights",
    cover: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
    short: "Islands & Temples",
    intro: "Classic Thailand itinerary covering Bangkok city and Phuket island.",
    gallery: [
        "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1653823/pexels-photo-1653823.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    options: [
      {
        duration: "6D / 5N – Bangkok & Phuket",
        title: "Thailand Essentials",
        itinerary: [
          "Arrive Bangkok, city & temple tour.",
          "Free time / Safari World.",
          "Fly to Phuket, evening leisure.",
          "Full-day Phi Phi Island by speedboat.",
          "Free day for beaches.",
          "Checkout and airport drop."
        ],
      },
    ],
  },
};