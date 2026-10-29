/* =========================================================
 * data/stays.js — in-memory dataset for the PEI Coastal Stays API
 * CSCI 3172 Lab 3
 * ========================================================= */

'use strict';

const initialStays = [
  {
    id: 1,
    name: 'Crown of the Coast Beach House',
    tagline: '14-Acre Luxury Oceanfront',
    region: 'Cavendish',
    category: 'Beachfront Cottage',
    price: 189,
    rating: 4.8,
    guests: 6,
    bedrooms: 3,
    description:
      'A stately shingle-style coastal estate set on a bluff above the Northumberland Strait, with a tower cupola, manicured grounds and a swimming pool just steps from the shore.',
    amenities: ['Ocean View', 'Swimming Pool', 'WiFi', 'Fireplace', 'Parking'],
    license: '4014472',
    image: 'https://peibestvacations.com/wp-content/uploads/2026/01/1_2_Crown.jpg',
    url: 'https://peibestvacations.com/crown-of-the-coast-beach-house/'
  },
  {
    id: 2,
    name: "Charlottetown's Waterfront Jewel",
    tagline: 'Waterfront in the Heart of the City',
    region: 'Charlottetown',
    category: 'Ocean View Suite',
    price: 220,
    rating: 4.9,
    guests: 8,
    bedrooms: 4,
    description:
      'A welcoming waterfront home on a sheltered shore, wrapped in a broad wraparound deck and reached by wooden steps that lead down to the private tidal beach.',
    amenities: ['Ocean View', 'Full Kitchen', 'WiFi', 'Hot Tub', 'Pet Friendly'],
    license: '4014658',
    image: 'https://peibestvacations.com/wp-content/uploads/2026/06/1_12_Waterfront.jpg',
    url: 'https://peibestvacations.com/charlottetowns-waterfront-jewel/'
  },
  {
    id: 3,
    name: 'Blue Ocean Cove Beach House',
    tagline: 'Secluded 7-Acre Oceanfront',
    region: 'North Rustico',
    category: 'Beachfront Cottage',
    price: 145,
    rating: 4.6,
    guests: 2,
    bedrooms: 1,
    description:
      'A grey-shingled cottage framed by windswept evergreens, reached by a quiet red-stone path, with the open Atlantic visible just beyond the treeline.',
    amenities: ['Ocean View', 'WiFi', 'Fireplace', 'Parking'],
    license: '2301173',
    image: 'https://peibestvacations.com/wp-content/uploads/2025/10/1_outside_1_s.jpg',
    url: 'https://peibestvacations.com/blue-ocean-cove-beach-house/'
  },
  {
    id: 4,
    name: 'Ocean Dream Beach House',
    tagline: '5-Acre Oceanfront Retreat',
    region: 'North Shore',
    category: 'Ocean View Suite',
    price: 240,
    rating: 4.8,
    guests: 8,
    bedrooms: 4,
    description:
      'A private oceanfront retreat with direct access to sandy shoreline and wide-open coastal views, set on five secluded acres surrounded by sea grass and tall firs.',
    amenities: ['Private Beach', 'Free WiFi', 'BBQ Facilities', 'Family Rooms', 'Parking'],
    license: '2301018',
    image: 'https://peibestvacations.com/wp-content/uploads/2025/10/1_1.jpg',
    url: 'https://peibestvacations.com/ocean-dream-beach-house/'
  },
  {
    id: 5,
    name: 'Summer By the Sea Beach House',
    tagline: '4 Private Oceanfront Acres',
    region: 'Brackley Beach',
    category: 'Coastal B&B',
    price: 160,
    rating: 4.7,
    guests: 4,
    bedrooms: 2,
    description:
      'A pale yellow bungalow tucked into the dunes behind a wide sandy shore, with a green metal roof and a private path that leads straight down to the water.',
    amenities: ['Ocean View', 'WiFi', 'Breakfast Included', 'Beach Access'],
    license: '2301060',
    image: 'https://peibestvacations.com/wp-content/uploads/2025/11/2_1_Summer.jpg',
    url: 'https://peibestvacations.com/summer-by-the-sea-beach-house/'
  },
  {
    id: 6,
    name: 'Shore to Sky Cottage',
    tagline: 'Waterfront Retreat on PEI’s Eastern Shore',
    region: 'Eastern Shore',
    category: 'Seaside Cabin',
    price: 120,
    rating: 4.5,
    guests: 4,
    bedrooms: 2,
    description:
      'A bright, newly furnished cottage with ocean-view windows, warm hardwood floors and a screened sitting area, a short walk from the water.',
    amenities: ['Ocean View', 'Full Kitchen', 'Pet Friendly', 'WiFi'],
    license: '4014360',
    image: 'https://peibestvacations.com/wp-content/uploads/2026/10/0_cover_Shore1000.jpg',
    url: 'https://peibestvacations.com/shore-to-sky-cottage/'
  },
  {
    id: 7,
    name: 'Sugarberry House Charlottetown',
    tagline: 'Heart of Downtown Charlottetown',
    region: 'Charlottetown',
    category: 'Coastal B&B',
    price: 175,
    rating: 4.6,
    guests: 4,
    bedrooms: 2,
    description:
      'A sunny yellow Victorian townhouse in the heart of the city, with a white-trimmed front porch, hanging flower baskets and quiet street charm near Victoria Row.',
    amenities: ['Breakfast Included', 'WiFi', 'Garden', 'Non-Smoking'],
    license: '1201068',
    image: 'https://peibestvacations.com/wp-content/uploads/2025/11/4_1_1.jpg',
    url: 'https://peibestvacations.com/sugarberry/'
  },
  {
    id: 8,
    name: 'Fox Meadow Golf Getaway',
    tagline: 'Long-term Rental on the Fairway',
    region: 'Cavendish',
    category: 'Golf Getaway',
    price: 260,
    rating: 4.7,
    guests: 6,
    bedrooms: 3,
    description:
      'A spacious fairway-side retreat beside one of PEI’s best golf courses, with a large deck, fireplace and room for the whole group.',
    amenities: ['Golf View', 'Full Kitchen', 'WiFi', 'Fireplace', 'Parking'],
    license: '',
    image: 'https://peibestvacations.com/wp-content/uploads/2025/11/5_1_1.jpg',
    url: 'https://peibestvacations.com/866-2/'
  }
];

// Mutable in-memory store. idCounter keeps ids unique across POSTs.
let stays = [...initialStays];
let idCounter = initialStays.length;

const findAll = () => stays;

const findById = (id) => stays.find((stay) => stay.id === id);

const create = (data) => {
  idCounter += 1;
  const newStay = { id: idCounter, ...data };
  stays.push(newStay);
  return newStay;
};

const removeById = (id) => {
  const index = stays.findIndex((stay) => stay.id === id);
  if (index === -1) return null;
  const [removed] = stays.splice(index, 1);
  return removed;
};

module.exports = { findAll, findById, create, removeById };
