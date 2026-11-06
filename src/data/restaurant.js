/**
 * VISHNU VAIBHAVA RESTAURANT & PARTY HALL - MASTER DATA
 * 
 * STRICT RULE APPLIED:
 * Only facts verified from the official Google Maps listing and authenticated local
 * business directories are stored as real data.
 * Missing or unverified details are explicitly marked as editable placeholders.
 */

export const restaurantData = {
  // Brand & Basic Information
  name: "Vishnu Vaibhava-restaurant party hall",
  shortName: "Vishnu Vaibhava",
  tagline: "Authentic Pure Vegetarian Dining & Celebrations in RR Nagar",
  cuisineType: "100% Pure Vegetarian (South Indian, North Indian, Chinese & Fast Food)",
  priceRange: "₹300 – ₹500 for two",

  // Verified Contact Details
  phone: {
    primary: "+91 99029 76925",
    secondary: "+91 88616 70638",
    alternate: "+91 81971 00638",
    display: "+91 99029 76925 / +91 88616 70638",
  },
  whatsapp: {
    number: "919902976925",
    display: "+91 99029 76925",
    defaultMessage: "Hello Vishnu Vaibhava! I would like to make an enquiry.",
    tableBookingMessage: "Hello Vishnu Vaibhava! I would like to book a table.",
    partyHallMessage: "Hello Vishnu Vaibhava! I would like to enquire about booking the Party Hall for an event.",
  },
  // Placeholder: No official email is listed on Google Maps
  email: "[PLACEHOLDER - Add official email address here, e.g. contact@vishnuvaibhava.com]",

  // Verified Location Details
  address: {
    doorAndStreet: "730, Kenchena Halli Road (Halagevaderahalli Road)",
    locality: "Janankshi Layout, 5th Stage, BEML Layout",
    area: "Rajarajeshwari Nagar (RR Nagar)",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560098",
    full: "730, Kenchena Halli Road, Janankshi Layout, 5th Stage, BEML Layout, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098",
    landmark: "Near BEML Layout 5th Stage, Halagevaderahalli Main Road",
    parkingInfo: "Ample parking available for two-wheelers and four-wheelers.",
  },
  coordinates: {
    lat: 12.9150,
    lng: 77.5180,
  },
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Vishnu%20Vaibhava-restaurant%20party%20hall&query_place_id=ChIJxQr9MQA_rjsRYCbhpacNGcU",
  embedMapUrl: "https://www.google.com/maps?q=Vishnu%20Vaibhava-restaurant%20party%20hall&output=embed",

  // Verified Ratings & Overview
  rating: {
    score: 4.1,
    maxScore: 5.0,
    totalReviews: 1900,
    reviewCountDisplay: "1,900+ verified customer reviews",
    partyHallRating: 3.9,
    highlights: [
      "Pure Veg Multi-Cuisine",
      "Spacious Party Hall",
      "Budget-Friendly Tiffins & Meals",
      "Ample Parking Space",
      "Breakfast from 6:00 AM",
    ],
  },

  // Verified Opening Hours (7 Days a week)
  openingHours: {
    monday: { open: "06:00", close: "22:30", display: "6:00 AM – 10:30 PM" },
    tuesday: { open: "06:00", close: "22:30", display: "6:00 AM – 10:30 PM" },
    wednesday: { open: "06:00", close: "22:30", display: "6:00 AM – 10:30 PM" },
    thursday: { open: "06:00", close: "22:30", display: "6:00 AM – 10:30 PM" },
    friday: { open: "06:00", close: "22:30", display: "6:00 AM – 10:30 PM" },
    saturday: { open: "06:00", close: "22:30", display: "6:00 AM – 10:30 PM" },
    sunday: { open: "06:00", close: "22:30", display: "6:00 AM – 10:30 PM" },
    summary: "Open daily from 6:00 AM to 10:30 PM",
  },

  // Services Offered
  services: [
    { title: "Family Dining (Dine-in)", desc: "Spacious seating with prompt service for families and groups." },
    { title: "Party Hall & Banquets", desc: "Dedicated celebration hall accommodating up to 300–500 guests for birthdays, naming ceremonies, upanayanam and get-togethers." },
    { title: "Takeaway & Counter Parcels", desc: "Quick packaging for hot South Indian breakfasts, lunch meals and dinners." },
    { title: "Online Delivery", desc: "Doorstep delivery supported through food platforms and local orders." },
    { title: "Event Catering & Buffets", desc: "Authentic pure vegetarian catering customized for your special functions." },
    { title: "Parking Facilities", desc: "Convenient parking space in front of the venue." },
  ],

  // Party Hall Specific Details
  partyHall: {
    capacity: "Up to 300 to 500 guests",
    eventsSupported: [
      "Birthday Celebrations",
      "Naming Ceremonies (Namakarana)",
      "Upanayanam / Thread Ceremonies",
      "Engagement Parties",
      "Family Reunions & Get-togethers",
      "Corporate Meetings & Seminars",
    ],
    features: [
      "In-house pure vegetarian catering (buffet or traditional banana leaf service)",
      "Spacious dining and celebration area",
      "Audio setup and celebration backdrop support",
      "Dedicated parking for host and guests",
      "Accessible location on Kenchena Halli Road",
    ],
    // Placeholders for owner to customize
    packagesNote: "[PLACEHOLDER - Owner can add custom per-plate catering and decoration packages here]",
  },

  // Social Media Links (Placeholders - none officially linked on the Maps listing)
  socialLinks: {
    instagram: "[PLACEHOLDER - Add official Instagram link here, e.g. https://instagram.com/vishnuvaibhava_rrnagar]",
    facebook: "[PLACEHOLDER - Add official Facebook link here, e.g. https://facebook.com/vishnuvaibhavarrnagar]",
    youtube: "[PLACEHOLDER - Add official YouTube channel link here]",
  },

  // Placeholders for missing facts (as per STRICT RULE)
  placeholders: {
    ownerName: "[PLACEHOLDER - Add owner/management name here]",
    yearEstablished: "[PLACEHOLDER - Add founding year here]",
    awards: "[PLACEHOLDER - Add food awards or certificates here if any]",
    specialNotice: "[PLACEHOLDER - Add seasonal announcement or holiday notices here]",
  },
};

export default restaurantData;

