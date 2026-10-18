import type { TourPackage } from '../types'

/**
 * Roam Ready — journeys.
 *
 * Itineraries and inclusions follow Roam Ready's official trip PDFs. Prices are
 * indicative starting points and are confirmed in the written quote at booking.
 *
 * To add a journey: append one object. Routing, the detail page, sitemap and
 * structured data all derive from this array.
 */
export const packages: TourPackage[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'manali-kasol',
    name: 'Manali – Kasol Getaway',
    plainName: 'Manali Kasol Getaway',
    tagline: 'Enjoy nature and peace in the Himalayas.',
    region: 'Himachal Pradesh',
    nights: 4,
    duration: '5 Days / 4 Nights',
    priceFrom: 5999,
    heroImage: 'manaliValley',
    heroImageAlt: 'Snow-capped Rohtang range rising above the Manali valley',
    cardImage: 'kasolTown',
    summary:
      'Manali for sightseeing and adventure, then the riverside camps of Kasol. Starts from ₹5,999 per person.',
    description: [
      'An evening departure from Delhi brings you to Manali by morning. Two nights in Manali cover Hadimba, Vashisht, the Tibetan Monastery and Mall Road, with a full day at Solang Valley. The route then moves to Kullu and Kasol for river rafting, cafes and a riverside camp.',
      'The trip ends with Manikaran Sahib and the Kasol market, with a 3–4 PM departure for Delhi on the last day.',
    ],
    bestFor: ['Friends', 'Couples', 'First-time visitors'],
    travelStyle: 'Adventure + Leisure',
    tripTypes: ['Mountain', 'Adventure', 'Couple', 'Group'],
    highlights: [
      'Hadimba, Vashisht Hot Springs and the Tibetan Monastery',
      'Solang Valley adventure day, with an optional Rohtang visit',
      'River rafting on the Beas at Kullu',
      'Riverside camp in Kasol with a bonfire and DJ music night',
      'Manikaran Sahib and the Kasol market',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Manali',
        description:
          'Assemble at the pickup point in Delhi by evening, meet your trip coordinator, then begin the overnight journey towards Manali. Dinner is taken en route at your own cost.',
        places: ['Delhi', 'Manali'],
        meals: '—',
        stay: 'Overnight journey in the vehicle',
        transport: 'Private vehicle from Delhi',
        image: 'delhiIndiaGate',
        imageAlt: 'India Gate, New Delhi',
      },
      {
        day: 2,
        title: 'Arrival in Manali and local sightseeing',
        description:
          'Arrive in Manali in the morning, check in to a 3–4 star hotel and freshen up. Then visit Nagar Castle, Hadimba Devi Temple, Vashisht Hot Springs, the Tibetan Monastery, Old Manali cafes and Mall Road. Buffet vegetarian dinner and overnight at the hotel.',
        places: ['Nagar Castle', 'Hadimba Devi Temple', 'Vashisht Hot Springs', 'Tibetan Monastery', 'Old Manali', 'Mall Road'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Manali (3–4 star)',
        transport: 'Private vehicle',
        image: 'oldManali',
        imageAlt: 'Wooden houses and cedar trees in Old Manali',
      },
      {
        day: 3,
        title: 'Solang Valley adventure',
        description:
          'Full-day adventure tour to Solang Valley for paragliding, zorbing, ATV rides and snow views. If the weather permits, an optional visit to Rohtang Pass for snow. The Atal Tunnel to Sissu is excluded from this package. Return to Manali by evening and overnight at the hotel.',
        places: ['Solang Valley', 'Rohtang Pass (if open)'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Manali',
        transport: 'Private vehicle',
        image: 'solangValley',
        imageAlt: 'Solang Valley meadow beneath snow-covered peaks',
      },
      {
        day: 4,
        title: 'Manali to Kullu and Kasol',
        description:
          'Check out early and head for Kasol, with river rafting on the Beas at Kullu on the way. Hot air ballooning is optional and self-paid. Check in to a riverside camp in Kasol, then visit the Kasol cafes and take a riverside walk along the Parvati. Return to camp for a bonfire, music and dinner.',
        places: ['Kullu', 'Beas River', 'Kasol', 'Parvati River'],
        meals: 'Breakfast, Dinner',
        stay: 'Riverside camp in Kasol',
        transport: 'Private vehicle',
        image: 'rafting',
        imageAlt: 'River rafting on the Beas near Kullu',
      },
      {
        day: 5,
        title: 'Kasol to Manikaran and departure',
        description:
          'Breakfast at the camp, then visit Manikaran Sahib Gurudwara and the Kasol market. Leave for Delhi at about 3–4 PM, with an overnight drive and arrival the next morning.',
        places: ['Manikaran Sahib Gurudwara', 'Kasol market', 'Delhi'],
        meals: 'Breakfast',
        stay: '—',
        transport: 'Private vehicle to Delhi',
        image: 'manikaran',
        imageAlt: 'The town of Manikaran on the banks of the Parvati river',
      },
    ],
    inclusions: [
      'Transportation by Tempo Traveller, Volvo or cab',
      'Two nights stay in Manali',
      'One night stay in Kasol',
      'Rohtang Pass entry fee and permit',
      'Total 6 meals: 3 breakfasts and 3 dinners',
      'All sightseeing as per the itinerary',
      'Bonfire and DJ music night',
      'Trip coordinator throughout the trip',
      'All tolls, parking and driver charges',
    ],
    exclusions: [
      'Any kind of personal expenses',
      'Lunch and meals on the way',
      'Snow and water activity charges',
      'Atal Tunnel to Sissu visit',
      'Hot air ballooning (optional, self-paid)',
      'Tips, monument and monastery entry, camera or video charges, laundry and phone bills',
      'Food and beverages not included, such as alcohol and mineral water',
      'Costs from natural calamities such as landslides or road blocks, paid directly on the spot',
      'Travel insurance',
      'Anything not mentioned in the inclusions',
    ],
    placesCovered: [
      {
        name: 'Solang Valley',
        description: 'A wide alpine meadow north of Manali, ringed by peaks and paragliders.',
        image: 'solangParagliding',
        imageAlt: 'Paragliders above the meadows of Solang Valley',
      },
      {
        name: 'Beas River',
        description: 'River rafting through the mountains at Kullu.',
        image: 'rafting2',
        imageAlt: 'Rafting on the Beas River',
      },
      {
        name: 'Kasol',
        description: 'A riverside village in the Parvati valley, built for slowness.',
        image: 'kasolTown3',
        imageAlt: 'Kasol village beside the Parvati river',
      },
      {
        name: 'Manikaran',
        description: 'Hot springs and a gurudwara, steam rising off the river in the cold.',
        image: 'manikaran2',
        imageAlt: 'The gurudwara and hot springs at Manikaran',
      },
    ],
    info: {
      bestTime: 'March to June, and September to November',
      weather:
        'Pleasant days and cold nights through spring and autumn. Snow is possible on the higher stretches into April. The monsoon brings landslide risk in July and August.',
      whatToCarry: [
        'Backpack and a reusable water bottle',
        'Good trekking or sports shoes, plus slippers',
        'Warm jacket, woollens and a small blanket',
        'Raincoat or umbrella; mountain weather is uncertain',
        'Sunscreen, moisturiser, lip balm and goggles',
        'One photo ID (must), medicines and camphor (must)',
        'Power bank, a polybag for waste, and cash for personal use',
      ],
      tips: [
        'ATMs in the mountains are often out of cash, so carry enough for personal use.',
        'Keep your luggage as light as possible.',
        'Help keep the mountains clean: take your litter back with you.',
      ],
      important: [
        'Travel insurance is not included in the package.',
        'Itinerary timings may change for safety, depending on the weather.',
        'Hot air ballooning is optional and self-paid.',
        'Rohtang Pass visit is subject to weather and permits.',
      ],
    },
    faqs: [
      {
        question: 'How much of this trip is spent driving?',
        answer:
          'Two long transfer days — the arrival into Manali and the run across to Kasol — each roughly four to six hours depending on road conditions. Every other day is short local movement, by design.',
      },
      {
        question: 'Will there be snow?',
        answer:
          'On the Solang and Atal Tunnel stretch, usually from December through to April, sometimes later. Kasol itself sits lower and sees far less. We will tell you honestly what to expect for your dates.',
      },
      {
        question: 'Is this suitable for someone who has not travelled in the mountains before?',
        answer:
          'Yes. Nothing on this route requires trekking experience or unusual fitness. The walking is optional and gentle.',
      },
      {
        question: 'Can the itinerary be adjusted?',
        answer:
          'It can. Most people who travel with us change something — an extra night in Kasol, a different pace, a private departure time. Tell us what you want and we will rebuild around it.',
      },
    ],
    featured: true,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'udaipur-mount-abu',
    name: 'UDAIPUR MT. ABU',
    plainName: 'UDAIPUR MT. ABU',
    tagline: 'Lake palaces, marble temples and Rajasthan’s only hill station.',
    region: 'Rajasthan',
    nights: 4,
    duration: '5 Days / 4 Nights',
    priceFrom: 16900,
    // Source: official itinerary PDF (UDAIPUR MT. ABU, 4 Nights / 5 Days)
    heroImage: 'udaipurLakePalace',
    heroImageAlt: 'The Taj Lake Palace on Lake Pichola seen from the City Palace, Udaipur',
    cardImage: 'udaipurPicholaSunset',
    summary:
      'Water, marble and evening light — the most architecturally rewarding week in Rajasthan, paired with a genuine break from the heat.',
    description: [
      'We leave Delhi on an overnight journey of about 660 km and 14 hours, and reach Udaipur the next morning. Two full days in the city cover the City Palace, Lake Pichola and Amrai Ghat, Bagore ki Haveli, Badi Lake, Sajjangarh Fort and Fatehsagar Lake.',
      'On the fourth day we take a half-day tour to Mount Abu, Rajasthan’s only hill station and home to the Dilwara temples, before heading back to Delhi. The drop-off in Delhi is on the morning of the fifth day.',
    ],
    bestFor: ['Couples', 'Families', 'Heritage travellers'],
    travelStyle: 'Heritage + Leisure',
    tripTypes: ['Heritage', 'Couple', 'Family', 'Leisure'],
    highlights: [
      'City Palace and Lake Pichola, with Amrai Ghat and Bagore ki Haveli',
      'Badi Lake, Bahubali hills and Sajjangarh Fort',
      'Bapu Bazaar and Hathipole market',
      'Boating on Fatehsagar Lake',
      'Half-day tour to Mount Abu',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Udaipur',
        description:
          'Pickup from Delhi and an overnight journey of about 660 km and 14 hours to Udaipur.',
        places: ['Delhi', 'Udaipur'],
        meals: '—',
        stay: 'Overnight journey in the vehicle',
        transport: 'Private vehicle from Delhi',
        image: 'udaipurMusician',
        imageAlt: 'A street musician playing in Udaipur',
      },
      {
        day: 2,
        title: 'Udaipur sightseeing',
        description:
          'Check in to the hotel, freshen up, then go out for local sightseeing: City Palace, Lake Pichola with Amrai Ghat, and Bagore ki Haveli.',
        places: ['City Palace', 'Lake Pichola', 'Amrai Ghat', 'Bagore ki Haveli'],
        meals: 'Dinner',
        stay: 'Hotel in Udaipur',
        transport: 'Private vehicle',
        image: 'udaipurCityPalace',
        imageAlt: 'The City Palace of Udaipur rising above Lake Pichola',
      },
      {
        day: 3,
        title: 'Heart of Udaipur',
        description:
          'A full day of sightseeing after an early breakfast: Badi Lake, the Bahubali hills, Bapu Bazaar and Hathipole market, Sajjangarh Fort, and boating on Fatehsagar Lake.',
        places: ['Badi Lake', 'Bahubali Hills', 'Bapu Bazaar', 'Hathipole', 'Sajjangarh Fort', 'Fatehsagar Lake'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Udaipur',
        transport: 'Private vehicle',
        image: 'udaipurPichola',
        imageAlt: 'Lake Pichola at sunset in Udaipur',
      },
      {
        day: 4,
        title: 'Mount Abu and return journey',
        description:
          'After breakfast, check out and take a half-day tour to Mount Abu. Afterwards, begin the return journey to Delhi.',
        places: ['Mount Abu', 'Dilwara Temples', 'Nakki Lake'],
        meals: 'Breakfast',
        stay: 'Overnight journey in the vehicle',
        transport: 'Private vehicle',
        image: 'dilwaraCeiling',
        imageAlt: 'Carved marble ceiling inside the Dilwara temples',
      },
      {
        day: 5,
        title: 'Back in Delhi',
        description: 'Drop-off in Delhi in the morning, which marks the end of the trip.',
        places: ['Delhi'],
        meals: '—',
        stay: '—',
        transport: 'Private vehicle to Delhi',
        image: 'delhiIndiaGate',
        imageAlt: 'India Gate, New Delhi',
      },
    ],
    inclusions: [
      'Travel from Delhi to Udaipur and return',
      'All local sightseeing',
      'Meals: 2 breakfasts and 2 dinners',
      'Stay 2 nights in Udaipur',
      'All tolls, taxes, GST and driver charges',
      'Trek guide and camping',
    ],
    exclusions: [
      'Meals during the journey',
      'Any extra costs incurred due to extended stay in case of weather conditions',
      'Any entry or activity tickets',
    ],
    placesCovered: [
      {
        name: 'Lake Pichola',
        description: 'The lake Udaipur is built around, best seen from the water at dusk.',
        image: 'udaipurPichola',
        imageAlt: 'Lake Pichola at sunset in Udaipur',
      },
      {
        name: 'City Palace',
        description: 'Four centuries of building, stacked above the eastern shore.',
        image: 'udaipurPalaceDetail',
        imageAlt: 'Architectural detail of the City Palace, Udaipur',
      },
      {
        name: 'Dilwara Temples',
        description: 'Marble carving of a fineness that is difficult to describe.',
        image: 'dilwaraTemple',
        imageAlt: 'The Dilwara Jain temples at Mount Abu',
      },
      {
        name: 'Nakki Lake',
        description: 'The centre of Mount Abu, and where the town gathers at sunset.',
        image: 'nakkiLake',
        imageAlt: 'Nakki Lake at Mount Abu',
      },
    ],
    info: {
      bestTime: 'October to March',
      weather:
        'Warm, dry winters in Udaipur with cool evenings. Mount Abu runs several degrees cooler and can be genuinely cold at night in December and January. April to June is very hot on the plains.',
      whatToCarry: [
        'Light cottons for Udaipur, a warm layer for Mount Abu evenings',
        'Modest clothing covering shoulders and knees for temple visits',
        'Comfortable shoes — temples are entered barefoot',
        'Sunscreen, sunglasses and a hat',
        'A scarf or shawl, useful at both ends',
      ],
      tips: [
        'Photography is restricted inside the Dilwara temples; leave cameras and phones with the desk.',
        'Book the Pichola boat for the last slot of the day. The light is the whole point.',
        'Udaipur’s old city is best on foot — vehicles cannot reach much of it.',
      ],
      important: [
        'Dilwara temple visiting hours for non-worshippers are limited to the afternoon and change seasonally.',
        'Monument timings and entry fees are set by their operators and may change.',
        'The itinerary above is indicative; the final plan is confirmed at booking.',
      ],
    },
    faqs: [
      {
        question: 'Is two nights enough for Udaipur?',
        answer:
          'Two full days in the city cover the main sights, including the City Palace, Lake Pichola, Sajjangarh Fort and Fatehsagar Lake. Mount Abu is a half-day tour on the fourth day.',
      },
      {
        question: 'What is the dress code for the temples?',
        answer:
          'Shoulders and knees covered at both Dilwara and Jagdish Temple. Shoes and leather items are left outside. Dilwara also restricts photography entirely.',
      },
      {
        question: 'How hot does it get?',
        answer:
          'Between April and June, Udaipur regularly passes 40°C. We would steer you to October–March, or lean the itinerary further towards Mount Abu if your dates are fixed.',
      },
      {
        question: 'Is this route good for couples?',
        answer:
          'It is our most requested route for couples and honeymoons. The pacing is gentle and the evenings are the strongest part of it.',
      },
    ],
    featured: true,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'kashmir',
    name: 'Kashmir',
    plainName: 'Kashmir',
    tagline: 'Meadow, lake and pine — the valley at its own pace.',
    region: 'Kashmir',
    nights: 5,
    duration: '6 Days / 5 Nights',
    priceFrom: 26500,
    heroImage: 'dalLakeDusk',
    heroImageAlt: 'Shikaras on Dal Lake at sunset in Srinagar, Kashmir',
    cardImage: 'pahalgamValley',
    summary:
      'Train from Jammu to Srinagar, a Gulmarg gondola day, a houseboat night on Dal Lake and a stay in Pahalgam, with a Sonamarg day trip.',
    description: [
      'The journey begins with an overnight train from Delhi to Jammu, then a six-hour drive to Srinagar. Three nights in Srinagar cover the Sonamarg day trip and the Gulmarg gondola, with one night on a houseboat on Dal Lake.',
      'The route ends in Pahalgam for a night of valley views, then Jammu railway station and the return to Delhi. The package runs for five nights and six days on the ground, with the overnight travel at either end.',
    ],
    bestFor: ['Couples', 'Families', 'Photographers'],
    travelStyle: 'Scenic + Leisure',
    tripTypes: ['Mountain', 'Couple', 'Family', 'Leisure'],
    highlights: [
      'Sonamarg, the gateway to Ladakh, with a horse ride to Thajiwas Glacier',
      'Asia’s highest and longest gondola at Gulmarg',
      'Mughal Gardens, Cheshmashahi and Shankaracharya Temple',
      'Shikara ride and houseboat stay on Dal Lake',
      'Pahalgam, Awantipura ruins and saffron fields',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Jammu',
        description: 'Depart Delhi at night for an overnight journey.',
        places: ['Delhi', 'Jammu'],
        meals: '—',
        stay: 'Overnight journey (train)',
        transport: 'Train from Delhi',
        image: 'delhiIndiaGate',
        imageAlt: 'India Gate, New Delhi',
      },
      {
        day: 2,
        title: 'Jammu to Srinagar',
        description:
          'Arrive in Jammu and continue to Srinagar, a journey of about six hours depending on traffic. Check in to the hotel later and keep the day free to rest.',
        places: ['Jammu', 'Srinagar'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Srinagar',
        transport: 'Private vehicle',
        image: 'dalHouseboats',
        imageAlt: 'Houseboats moored on Dal Lake, Srinagar',
      },
      {
        day: 3,
        title: 'Sonamarg day trip',
        description:
          'A full-day excursion to Sonamarg, at 2,690 metres, known as the Meadow of Gold and the gateway to Ladakh. Stop at several scenic spots on the way. Ride a horse to Thajiwas Glacier if you wish. Overnight in a Srinagar hotel.',
        places: ['Sonamarg', 'Thajiwas Glacier'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Srinagar',
        transport: 'Private vehicle',
        image: 'sonamargThajiwas',
        imageAlt: 'Thajiwas park above Sonamarg in Kashmir',
      },
      {
        day: 4,
        title: 'Gulmarg day trip',
        description:
          'A full-day excursion to Gulmarg, at 2,652 metres and known as the Meadow of Flowers. Take the gondola, Asia’s highest and longest cable car, which runs in two stages to 3,747 metres. The gondola operates from 10 AM to 5 PM. Return to Srinagar in the evening.',
        places: ['Gulmarg', 'Kungdoor Station'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Srinagar',
        transport: 'Private vehicle',
        image: 'gulmargSunset',
        imageAlt: 'Snowy sunset at Gulmarg',
      },
      {
        day: 5,
        title: 'Srinagar sightseeing and houseboat',
        description:
          'Check out of the hotel and tour Srinagar, including the Mughal Gardens, Cheshmashahi and Shankaracharya Temple. Check in to the houseboat in the afternoon, then enjoy a shikara ride in the evening. Dinner and overnight on the houseboat.',
        places: ['Mughal Gardens', 'Cheshmashahi', 'Shankaracharya Temple', 'Dal Lake'],
        meals: 'Dinner',
        stay: 'Houseboat on Dal Lake',
        transport: 'Private vehicle and shikara',
        image: 'dalLake4',
        imageAlt: 'Shikaras on Dal Lake in Srinagar',
      },
      {
        day: 6,
        title: 'Srinagar to Pahalgam',
        description:
          'Pahalgam is known for its film-industry locations. On the way, visit the Awantipura ruins and the saffron fields. Enjoy the town and its views, and consider a trek to Lidderwat, Kolahoi Glacier or Sonamarg. Pahalgam is also the entry point for the Amarnath Cave. Dinner and overnight in a Pahalgam hotel.',
        places: ['Awantipura Ruins', 'Saffron Fields', 'Pahalgam', 'Lidderwat', 'Kolahoi Glacier'],
        meals: 'Dinner',
        stay: 'Hotel in Pahalgam',
        transport: 'Private vehicle',
        image: 'pahalgamValley',
        imageAlt: 'The Pahalgam valley in Kashmir',
      },
      {
        day: 7,
        title: 'Pahalgam to Jammu',
        description:
          'After breakfast, check out of the hotel and proceed to Jammu railway station.',
        places: ['Pahalgam', 'Jammu Railway Station'],
        meals: 'Breakfast',
        stay: '—',
        transport: 'Private vehicle to Jammu',
        image: 'pahalgamLidder',
        imageAlt: 'The Lidder river at Pahalgam',
      },
      {
        day: 8,
        title: 'Reach back Delhi',
        description: 'The journey ends with your return to Delhi.',
        places: ['Delhi'],
        meals: '—',
        stay: '—',
        transport: 'Train to Delhi',
        image: 'delhiIndiaGate',
        imageAlt: 'India Gate, New Delhi',
      },
    ],
    inclusions: [
      'Train tickets',
      '5 nights and 6 days stay',
      'Breakfast and dinner',
      'Sightseeing',
      '1 night houseboat (triple sharing)',
      '3 nights Srinagar hotel',
      '1 night Pahalgam stay',
      'Shikara ride',
      'Rooms on quad sharing',
    ],
    exclusions: [
      'Lunches and personal expenses',
      'Gulmarg gondola tickets and horse rides',
      'Anything not listed under inclusions',
    ],
    placesCovered: [
      {
        name: 'Dal Lake',
        description: 'Srinagar’s centre of gravity — houseboats, shikaras and floating gardens.',
        image: 'dalLake4',
        imageAlt: 'Shikaras on Dal Lake in Srinagar',
      },
      {
        name: 'Pahalgam',
        description: 'Where the Lidder comes down out of the mountains.',
        image: 'pahalgamLidder',
        imageAlt: 'The Lidder river at Pahalgam',
      },
      {
        name: 'Gulmarg',
        description: 'A high meadow ringed with fir, and the gondola above it.',
        image: 'gulmargSunset',
        imageAlt: 'Snowy sunset at Gulmarg',
      },
      {
        name: 'Sonamarg',
        description: 'The meadow of gold, with glaciers immediately above.',
        image: 'sonamarg',
        imageAlt: 'The Sonamarg valley in Kashmir',
      },
    ],
    info: {
      bestTime: 'April to October, with snow travel from December to February',
      weather:
        'Spring brings blossom and mild days; summer is green and comfortable; autumn turns the chinars. Winter is cold and beautiful, with restricted access to the higher meadows.',
      whatToCarry: [
        'Warm layers in every season — evenings are cold year round',
        'A waterproof outer layer',
        'Sturdy shoes for meadow and riverbank walking',
        'Sunscreen; the reflected light at altitude is deceptive',
        'A valid photo ID, carried at all times',
      ],
      tips: [
        'The lake is at its best just after dawn. It is worth the alarm.',
        'Pony and local-vehicle rates at Pahalgam and Gulmarg are set by local unions and negotiated on the spot.',
        'Prepaid mobile connections from outside the region may not work; postpaid generally does.',
      ],
      important: [
        'Travel in the region can be affected by local conditions and advisories; we monitor and advise ahead of departure.',
        'Access to higher points such as Aru, Chandanwari and Thajiwas depends on weather and season.',
        'The itinerary above is indicative; the final plan is confirmed at booking.',
      ],
    },
    faqs: [
      {
        question: 'Should we stay on a houseboat?',
        answer:
          'At least one night, in our view — it is a genuinely distinct experience and the mornings are the reason to do it. Some travellers prefer a hotel for the remaining nights, and we will arrange whichever mix you want.',
      },
      {
        question: 'When is the best time to see snow?',
        answer:
          'December to February for snow on the ground at Gulmarg and Sonamarg. April still holds snow at the higher gondola stages while the valley floor is in blossom, which is many people’s favourite combination.',
      },
      {
        question: 'Why are the gondola and pony rides excluded?',
        answer:
          'Because their rates are set locally, change seasonally, and depend on which stage or route you choose on the day. We would rather quote you honestly than bundle a guess.',
      },
      {
        question: 'Is Kashmir suitable for families with young children?',
        answer:
          'Yes. The sightseeing is largely short walks and vehicle-accessible viewpoints, and the driving days are moderate. We will adjust the Sonamarg leg if it is too long for your group.',
      },
    ],
    featured: true,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'kedarnath',
    name: 'Kedarnath',
    plainName: 'Kedarnath',
    tagline: 'A sixteen-kilometre walk to a stone temple under the snow line.',
    region: 'Uttarakhand',
    nights: 3,
    duration: '4 Days / 3 Nights',
    priceFrom: 18500,
    heroImage: 'kedarnathTemple',
    heroImageAlt: 'The stone temple at Kedarnath beneath snow-covered peaks',
    cardImage: 'kedarnathWalkover',
    summary:
      'One of the twelve Jyotirlingas, at 3,583 metres, reached on foot from Gaurikund. A demanding journey, and for most people a significant one.',
    description: [
      'Kedarnath is not a sightseeing trip. The temple sits at 3,583 metres in a glacial valley, and the last sixteen kilometres from Gaurikund are covered on foot, by pony, or by helicopter when conditions and availability allow.',
      'We build in an acclimatisation night on the way up and do not schedule the ascent for the day you arrive from the plains. That single decision is the difference between a journey people complete and one they abandon at Rambara.',
    ],
    bestFor: ['Pilgrims', 'Families', 'Experienced walkers'],
    travelStyle: 'Spiritual + Trekking',
    tripTypes: ['Spiritual', 'Adventure', 'Family', 'Group'],
    highlights: [
      'Darshan at the Kedarnath temple',
      'The trek up from Gaurikund through the Mandakini gorge',
      'A night at Kedarnath beneath the peaks',
      'The Mandakini valley road through Rudraprayag and Guptkashi',
      'A night at Guptkashi before the ascent, rather than racing up from the plains',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Haridwar',
        description:
          'Meet at the vehicle departure point in Delhi (shared in advance), then an overnight journey towards Haridwar.',
        places: ['Delhi', 'Haridwar'],
        meals: '—',
        stay: 'Overnight journey in the vehicle',
        transport: 'Private vehicle from Delhi',
        image: 'haridwarAarti',
        imageAlt: 'Evening aarti at Har ki Pauri, Haridwar',
      },
      {
        day: 2,
        title: 'Rishikesh to Guptkashi',
        description:
          'Arrive in Haridwar in the morning and rest before the onward drive. Halt at Rishikesh for biometric registration (around four hours), with time to see the yoga capital while you wait. The road then follows the Mandakini through Byasi, Devprayag, Srinagar, Rudraprayag and Agastyamuni, with lunch midway and arrival in Guptkashi in the evening.',
        places: ['Haridwar', 'Rishikesh', 'Byasi', 'Devprayag', 'Srinagar', 'Rudraprayag', 'Agastyamuni', 'Guptkashi'],
        meals: 'Lunch (en route), Dinner',
        stay: 'Hotel in Guptkashi (or Rudraprayag / Phata, subject to availability)',
        transport: 'Private vehicle',
        image: 'rishikeshView',
        imageAlt: 'The Ganga at Rishikesh',
      },
      {
        day: 3,
        title: 'Kedarnath Dham darshan',
        description:
          'Early check-out and a drive to the road head at Gaurikund, then the sixteen-kilometre guided trek up to Kedarnath, usually six to eight hours. Check in to basic camp or homestay accommodation, freshen up, then proceed for darshan and the evening aarti.',
        places: ['Guptkashi', 'Gaurikund', 'Kedarnath Temple'],
        meals: 'Breakfast, Dinner',
        stay: 'Basic camp or homestay at Kedarnath',
        transport: 'Vehicle to Gaurikund, then guided trek on foot',
        image: 'kedarnathTemple',
        imageAlt: 'The Kedarnath temple beneath snow-covered peaks',
      },
      {
        day: 4,
        title: 'Return from Kedarnath',
        description:
          'Early breakfast, then descend to Gaurikund and drive back down the Mandakini valley towards Guptkashi, Haridwar and Delhi.',
        places: ['Kedarnath Temple', 'Gaurikund', 'Guptkashi', 'Haridwar', 'Delhi'],
        meals: 'Breakfast',
        stay: '—',
        transport: 'On foot, then private vehicle to Delhi',
        image: 'kedarnathDevotees',
        imageAlt: 'Devotees at the Kedarnath temple',
      },
    ],
    inclusions: [
      'Entire travel as per the itinerary',
      'Accommodation for 2 nights, at Guptkashi and at Kedarnath, plus the overnight journey from Delhi',
      'Six meals in total (three breakfasts and three dinners)',
      'Guided trek from Gaurikund to Kedarnath',
      'Team captain throughout the trip',
      'Driver night charges, toll tax and parking charges',
      'Assistance with registration formalities',
    ],
    exclusions: [
      'Travel to and from the starting point',
      'Entry tickets and temple fees',
      'Shared or union taxi from Gaurikund',
      'Ponies, palanquins (khacchar / palki), porters and helicopter tickets',
      'Meals and drinks other than those listed under inclusions',
      'Personal expenses and adventure activities',
      'Anything not mentioned in the itinerary',
      '5% GST',
    ],
    placesCovered: [
      {
        name: 'Kedarnath Temple',
        description: 'Stone, snow and altitude — one of the twelve Jyotirlingas.',
        image: 'kedarnathRain',
        imageAlt: 'The Kedarnath temple in cloud and rain',
      },
      {
        name: 'Gaurikund',
        description: 'The road head, and the start of the climb.',
        image: 'gaurikund',
        imageAlt: 'The trail near Gaurikund',
      },
      {
        name: 'Guptkashi',
        description: 'The Mandakini valley base, and the overnight stop before the trek.',
        image: 'kedarnathTown',
        imageAlt: 'The town of Guptkashi in the Mandakini valley',
      },
      {
        name: 'Rishikesh',
        description: 'The Ganga on the plains, and the biometric registration halt.',
        image: 'rishikeshView',
        imageAlt: 'The Ganga at Rishikesh',
      },
      {
        name: 'Haridwar',
        description: 'The gateway to the Char Dham, and the evening Ganga aarti.',
        image: 'gangaAarti2',
        imageAlt: 'Ganga aarti at Haridwar',
      },
    ],
    info: {
      bestTime: 'May to June, and September to October',
      weather:
        'The temple opens around late April or early May and closes near Diwali; it is inaccessible in winter. Expect cold nights and possible snow at Kedarnath in any open month, and heavy rain through the monsoon.',
      whatToCarry: [
        'Broken-in walking shoes with real grip',
        'A warm layer and a waterproof shell — non-negotiable',
        'A walking pole, which helps most on the descent',
        'Personal medication, plus anything you use for altitude',
        'Photo ID for the mandatory registration',
      ],
      tips: [
        'Start the ascent before first light. Weather closes in during the afternoon.',
        'Do not attempt the climb on the same day you arrive from the plains.',
        'Carry cash. There are no reliable card facilities above Sonprayag.',
      ],
      important: [
        'Yatra registration is mandatory and is administered by the state authorities.',
        'The temple opening dates are announced each year and vary; the route is closed in winter.',
        'Helicopter services are operated by third parties, subject to weather, and cannot be guaranteed.',
        'The itinerary above is indicative; the final plan is confirmed at booking.',
      ],
    },
    faqs: [
      {
        question: 'How hard is the trek to Kedarnath?',
        answer:
          'Sixteen kilometres one way with roughly 1,500 metres of ascent, at altitude. Most reasonably fit people manage it in six to eight hours. It is a long day rather than a technical one, but it should not be underestimated.',
      },
      {
        question: 'Can we take a helicopter instead?',
        answer:
          'Services operate from Phata, Sersi and Guptkashi, and we can help you attempt a booking. They are third-party operated, weather-dependent and heavily oversubscribed, so we never build an itinerary that assumes one.',
      },
      {
        question: 'Are ponies and palanquins available?',
        answer:
          'Yes, at Gaurikund, at locally set rates. We have left them out of the price rather than guess at a figure that changes through the season.',
      },
      {
        question: 'Is registration really required?',
        answer:
          'Yes. Char Dham yatra registration is mandatory for Kedarnath, and checks are enforced on the route. We assist with the formalities before you travel.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'nainital',
    name: 'Nainital',
    plainName: 'Nainital',
    tagline: 'A lake town in the Kumaon hills, a short run from Delhi.',
    region: 'Uttarakhand',
    nights: 2,
    duration: '3 Days / 2 Nights',
    priceFrom: 9900, // PLACEHOLDER — the source PDF gives no price. Confirm before launch.
    heroImage: 'nainitalLake',
    heroImageAlt: 'Naini Lake at Nainital, surrounded by hills',
    cardImage: 'nainitalLake',
    summary:
      'A lakeside hill town with boating, the Naina Devi temple and the Kumaon lakes, reached in a day from Delhi.',
    description: [
      'Nainital is built around a lake in a bowl of hills, and it is one of the easiest hill trips from Delhi. You arrive in time to rest, then spend the first afternoon on the water and the evening on Mall Road.',
      'The second day covers the wider lake district: Kainchidham, the lakes of Sariyatal, Khurpatal, Sattal and Naukuchiyatal, and the Kilbury Bird Sanctuary for a picnic. The third day is the return drive to Delhi.',
    ],
    bestFor: ['Families', 'Couples', 'Friends'],
    travelStyle: 'Leisure + Nature',
    tripTypes: ['Mountain', 'Family', 'Couple', 'Leisure'],
    highlights: [
      'Boat ride on Naini Lake',
      'Naina Devi temple, with sunrise and sunset views',
      'Kainchidham and the Kumaon lakes',
      'Lover’s Point and the ropeway to the snow point',
      'Kilbury Bird Sanctuary picnic',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Nainital',
        description:
          'Pick-up from Delhi and a beautiful drive of about 255 km into the hills. On arrival, check in, rest and freshen up. Visit Naina Devi temple, with its views of the lake, and the Hanuman Garhi temple. In the afternoon explore the Cave Garden, the golf course and Raj Bhavan, and take the Naini Lake boat ride. In the evening, go for a nature walk along Mall Road. Dinner and overnight stay at the hotel.',
        places: ['Delhi', 'Naina Devi Temple', 'Hanuman Garhi', 'Cave Garden', 'Raj Bhavan', 'Naini Lake', 'Mall Road'],
        meals: 'Dinner',
        stay: 'Hotel in Nainital',
        transport: 'Private vehicle',
        image: 'nainitalLake',
        imageAlt: 'Naini Lake at Nainital, surrounded by hills',
      },
      {
        day: 2,
        title: 'Exploring Nainital’s beauty and adventure',
        description:
          'Visit Kainchidham to see the flora and fauna of the region. Thrill-seekers can go hiking, horse riding or boating. Take the ropeway to the snow point at Lover’s Point. Visit the Sariyatal, Khurpatal, Sattal and Naukuchiyatal lakes, then have a picnic at the Kilbury Bird Sanctuary. Return to the hotel for dinner and an overnight stay.',
        places: ['Kainchidham', 'Lover’s Point', 'Sariyatal', 'Khurpatal', 'Sattal', 'Naukuchiyatal', 'Kilbury Bird Sanctuary'],
        meals: 'Dinner',
        stay: 'Hotel in Nainital',
        transport: 'Private vehicle',
        image: 'kedarnathTown',
        imageAlt: 'A Himalayan village in the hills',
      },
      {
        day: 3,
        title: 'Nainital to Delhi',
        description:
          'After breakfast, check out of the hotel and leave for Delhi, a drive of about 311 km and seven hours.',
        places: ['Nainital', 'Delhi'],
        meals: 'Breakfast',
        stay: '—',
        transport: 'Private vehicle to Delhi',
        image: 'delhiIndiaGate',
        imageAlt: 'India Gate, New Delhi',
      },
    ],
    inclusions: [
      '2 nights stay in Nainital (hotel)',
      '2 breakfasts and 2 dinners (vegetarian)',
      'Sightseeing',
      'Travelling',
    ],
    exclusions: [
      'Lunches and personal expenses',
      'Boat rides, ropeway tickets and other activity charges',
      'Anything not listed under inclusions',
    ],
    placesCovered: [
      {
        name: 'Naini Lake',
        description: 'The lake the town is built around, best seen from a boat.',
        image: 'nainitalLake',
        imageAlt: 'Naini Lake at Nainital',
      },
      {
        name: 'Kainchidham',
        description: 'A hillside temple complex above the lakes, surrounded by forest.',
        image: 'kedarnathTown',
        imageAlt: 'A hillside town in Uttarakhand',
      },
      {
        name: 'Kilbury Bird Sanctuary',
        description: 'A quiet forest picnic spot for birdwatching.',
        image: 'gaurikundTrail',
        imageAlt: 'A forest trail in the Uttarakhand hills',
      },
    ],
    info: {
      bestTime: 'March to June, and September to November',
      weather:
        'Mild days and cool evenings. Summer is pleasant. Winter is cold, and the hill roads can be affected by frost and fog. The monsoon brings heavy rain and landslide risk.',
      whatToCarry: [
        'A warm layer for the evenings',
        'Comfortable walking shoes',
        'Sunscreen and sunglasses',
        'A light raincoat or umbrella',
        'Medication and a photo ID',
      ],
      tips: [
        'Boating and ropeway timings depend on weather, so check them on the day.',
        'Mall Road is best in the evening, when it is busiest.',
        'Carry cash for small purchases and local stalls.',
      ],
      important: [
        'The itinerary above is indicative; the final plan is confirmed at booking.',
        'Activity availability depends on weather and local operators.',
      ],
    },
    faqs: [
      {
        question: 'Is two nights enough for Nainital?',
        answer:
          'Yes for the main sights, including the lake, Naina Devi, Kainchidham and the Kumaon lakes. A third night gives you more time at the lakes if you want a slower pace.',
      },
      {
        question: 'How long is the drive from Delhi?',
        answer:
          'About 255 km on the way up and 311 km on the way back, each around seven hours depending on traffic and road conditions.',
      },
    ],
  },
]

/** Slug-indexed lookup used by the detail route. */
export const packageBySlug = new Map(packages.map((p) => [p.slug, p]))

export const getPackage = (slug: string | undefined) =>
  slug ? packageBySlug.get(slug) : undefined

export const featuredPackages = packages.filter((p) => p.featured)

/** Distinct filter values, derived rather than hand-maintained. */
export const regions = [...new Set(packages.map((p) => p.region))].sort()
export const tripTypes = [...new Set(packages.flatMap((p) => p.tripTypes))].sort()
