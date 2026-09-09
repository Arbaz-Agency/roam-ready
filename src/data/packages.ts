import type { TourPackage } from '../types'

/**
 * Roam Ready — journeys.
 *
 * ⚠️ PLACEHOLDER CONTENT. Itineraries, pricing and inclusions below are
 * realistic drafts written to exercise the templates, not confirmed Roam Ready
 * offerings. Prices are indicative starting points; stays are described by
 * category rather than by property name; nothing here promises a specific
 * hotel, vehicle, permit or meal plan.
 *
 * To add a ninth journey: append one object. Routing, filtering, the detail
 * template, sitemap and structured data all derive from this array.
 */
export const packages: TourPackage[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'manali-kasol',
    name: 'Manali × Kasol',
    plainName: 'Manali Kasol',
    tagline: 'Mountain roads, pine forests and slow Himalayan mornings.',
    region: 'Himachal Pradesh',
    nights: 4,
    duration: '5 Days / 4 Nights',
    priceFrom: 14500,
    heroImage: 'manaliValley',
    heroImageAlt: 'Snow-capped Rohtang range rising above the Manali valley',
    cardImage: 'kasolTown',
    summary:
      'Two very different sides of Himachal — the wide alpine theatre above Manali, and the quiet riverside pace of the Parvati valley.',
    description: [
      'This is the journey most people picture when they think of Himachal, and there is a reason it endures. You begin high above the Beas, where deodar forest gives way to snowfields and the road climbs toward the Atal Tunnel. Then you drop into the Parvati valley, where the pace changes entirely.',
      'We have built the route to avoid the thing that ruins most Himachal trips: too much driving, too little time standing still. Mornings are unhurried. Afternoons are yours. The long drives happen when the light is worth it.',
    ],
    bestFor: ['Friends', 'Couples', 'First-time visitors'],
    travelStyle: 'Adventure + Leisure',
    tripTypes: ['Mountain', 'Adventure', 'Couple', 'Group'],
    highlights: [
      'Solang Valley on a clear morning, before the crowds arrive',
      'The drive through the Atal Tunnel into Lahaul',
      'Riverside afternoons in Kasol with nowhere to be',
      'Hot springs and the gurudwara at Manikaran',
      'Old Manali’s cedar lanes and the Hadimba temple grove',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Manali',
        description:
          'Arrive through the Kullu valley alongside the Beas. The afternoon is deliberately open — altitude is best met slowly. Walk the cedar lanes of Old Manali as the light drops behind the ridge.',
        places: ['Kullu Valley', 'Old Manali'],
        meals: 'Dinner',
        stay: 'Hotel in Manali',
        transport: 'Private vehicle from arrival point',
        image: 'oldManali',
        imageAlt: 'Wooden houses and cedar trees in Old Manali',
      },
      {
        day: 2,
        title: 'Solang Valley and the Atal Tunnel',
        description:
          'North out of Manali as the valley opens. Solang in the morning, then the tunnel through to the Lahaul side — a genuinely startling change of landscape in nine kilometres of rock.',
        places: ['Solang Valley', 'Atal Tunnel', 'Sissu viewpoint'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Manali',
        transport: 'Private vehicle',
        image: 'solangValley',
        imageAlt: 'Solang Valley meadow beneath snow-covered peaks',
      },
      {
        day: 3,
        title: 'Manali to Kasol',
        description:
          'A morning at the Hadimba temple, set in a grove of enormous deodars, then the road south and east into the Parvati valley. Kasol arrives quietly — a river, a road, and pine on both sides.',
        places: ['Hadimba Temple', 'Parvati Valley', 'Kasol'],
        meals: 'Breakfast, Dinner',
        stay: 'Guesthouse in Kasol',
        transport: 'Private vehicle',
        image: 'hadimbaTemple',
        imageAlt: 'The pagoda roof of the Hadimba Devi temple among tall cedars',
      },
      {
        day: 4,
        title: 'Manikaran and the Parvati river',
        description:
          'A short run upriver to Manikaran, where hot springs surface beside the gurudwara and the steam carries down the street. The rest of the day is unscheduled on purpose.',
        places: ['Manikaran', 'Parvati River', 'Chalal trail'],
        meals: 'Breakfast, Dinner',
        stay: 'Guesthouse in Kasol',
        transport: 'Private vehicle for sightseeing',
        image: 'manikaran',
        imageAlt: 'The town of Manikaran on the banks of the Parvati river',
      },
      {
        day: 5,
        title: 'Departure',
        description:
          'Breakfast by the river, then the road down through Bhuntar and out of the mountains. We time the departure around your onward travel rather than the other way round.',
        places: ['Kasol', 'Bhuntar'],
        meals: 'Breakfast',
        stay: '—',
        transport: 'Private vehicle to departure point',
        image: 'kasolTown2',
        imageAlt: 'The Parvati river running past Kasol',
      },
    ],
    inclusions: [
      'Accommodation for 4 nights on twin-sharing basis',
      'Daily breakfast and dinner',
      'Private vehicle for all transfers and sightseeing',
      'Experienced local driver',
      'Toll, parking and driver allowances',
      'On-trip coordination and support',
    ],
    exclusions: [
      'Flights, trains and travel to the starting point',
      'Lunches and personal expenses',
      'Adventure activities and ropeway tickets',
      'Entry fees at monuments and parks',
      'Anything not listed under inclusions',
    ],
    placesCovered: [
      {
        name: 'Solang Valley',
        description: 'A wide alpine meadow north of Manali, ringed by peaks and paragliders.',
        image: 'solangParagliding',
        imageAlt: 'Paragliders above the meadows of Solang Valley',
      },
      {
        name: 'Atal Tunnel',
        description: 'Nine kilometres under the Rohtang massif, opening onto the Lahaul valley.',
        image: 'atalTunnel',
        imageAlt: 'The south portal of the Atal Tunnel near Manali',
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
        'Layers — a fleece and a windproof outer',
        'Shoes with grip for wet rock and loose trail',
        'Sunscreen and sunglasses; the altitude sun is strong',
        'Any personal medication, plus basic first aid',
        'A power bank — charging points can be scarce',
      ],
      tips: [
        'Give yourself the first afternoon to acclimatise before anything strenuous.',
        'Mobile coverage thins out beyond Kasol; download maps before you leave.',
        'Carry some cash — card acceptance is patchy in the smaller valleys.',
      ],
      important: [
        'Mountain road timings depend on weather and are subject to change.',
        'Access beyond the Atal Tunnel can be restricted in winter conditions.',
        'The itinerary above is indicative; the final plan is confirmed at booking.',
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
    slug: 'kasol-kheerganga',
    name: 'Kasol × Kheerganga',
    plainName: 'Kasol Kheerganga',
    tagline: 'A river valley, a long climb, and hot springs at the top.',
    region: 'Himachal Pradesh',
    nights: 3,
    duration: '4 Days / 3 Nights',
    priceFrom: 11900,
    heroImage: 'parvatiValley',
    heroImageAlt: 'The Parvati valley in Himachal Pradesh under low cloud',
    cardImage: 'kheergangaCamp',
    summary:
      'The Parvati valley’s signature walk — a full day’s climb through forest and waterfall to a meadow with hot springs and no road in.',
    description: [
      'Kheerganga is a trek, not a drive. You leave the road at Barshaini and walk up through pine and rhododendron beside the river, past waterfalls, gaining height steadily for four to six hours. There is no vehicle access at the top, which is precisely the point.',
      'What waits is a high meadow with natural hot springs and a view down the length of the valley. We keep the group small, build in a proper acclimatisation day in Kasol first, and do not rush the ascent.',
    ],
    bestFor: ['Friends', 'Solo travellers', 'First-time trekkers'],
    travelStyle: 'Trekking + Adventure',
    tripTypes: ['Adventure', 'Mountain', 'Group'],
    highlights: [
      'The full valley walk from Barshaini to Kheerganga',
      'Natural hot springs at the top of the climb',
      'A night under canvas with no road and no traffic',
      'The village of Tosh, further up the valley',
      'Riverside recovery time back down in Kasol',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Kasol',
        description:
          'Into Bhuntar and up the Parvati valley to Kasol. A short walk across the river to Chalal in the afternoon to loosen the legs, and an early night before the climb.',
        places: ['Bhuntar', 'Kasol', 'Chalal'],
        meals: 'Dinner',
        stay: 'Guesthouse in Kasol',
        transport: 'Private vehicle from arrival point',
        image: 'kasolTown3',
        imageAlt: 'Kasol village on the banks of the Parvati river',
      },
      {
        day: 2,
        title: 'Barshaini to Kheerganga',
        description:
          'Drive to the road head at Barshaini, then walk. Four to six hours of steady climbing through forest, crossing waterfalls, with the valley opening up behind you. Camp at the top beside the springs.',
        places: ['Barshaini', 'Rudranag', 'Kheerganga'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Camp at Kheerganga',
        transport: 'Vehicle to road head, then on foot',
        image: 'kheergangaTrek',
        imageAlt: 'The forest trail climbing towards Kheerganga',
      },
      {
        day: 3,
        title: 'Descent and Tosh',
        description:
          'Down in the morning while the light is still low in the valley. From Barshaini a short climb to Tosh, a village stacked on the hillside at the head of the valley, and back to Kasol for the night.',
        places: ['Kheerganga', 'Barshaini', 'Tosh'],
        meals: 'Breakfast, Dinner',
        stay: 'Guesthouse in Kasol',
        transport: 'On foot, then private vehicle',
        image: 'tosh',
        imageAlt: 'The hillside village of Tosh in the upper Parvati valley',
      },
      {
        day: 4,
        title: 'Manikaran and departure',
        description:
          'A last morning at the Manikaran hot springs and gurudwara before the road down through Bhuntar.',
        places: ['Manikaran', 'Bhuntar'],
        meals: 'Breakfast',
        stay: '—',
        transport: 'Private vehicle to departure point',
        image: 'manikaran3',
        imageAlt: 'Steam rising from the hot springs at Manikaran',
      },
    ],
    inclusions: [
      'Accommodation for 2 nights in Kasol and 1 night camping at Kheerganga',
      'Meals as indicated in the day-wise plan',
      'Vehicle transfers between Kasol, Barshaini and Manikaran',
      'Trek coordination and a local guide on the ascent',
      'Camping equipment at Kheerganga',
      'On-trip support',
    ],
    exclusions: [
      'Travel to and from the starting point',
      'Porters and personal luggage carriage on the trek',
      'Meals not listed in the day-wise plan',
      'Personal expenses and travel insurance',
      'Anything not listed under inclusions',
    ],
    placesCovered: [
      {
        name: 'Kheerganga',
        description: 'A high meadow with hot springs, reachable only on foot.',
        image: 'kheergangaHills',
        imageAlt: 'The open meadow and hills at Kheerganga',
      },
      {
        name: 'Tosh',
        description: 'A village stacked against the slope at the top of the valley.',
        image: 'tosh2',
        imageAlt: 'Houses of Tosh village on a steep hillside',
      },
      {
        name: 'Parvati Valley',
        description: 'Pine, river and steep rock the whole way up.',
        image: 'parvatiValley2',
        imageAlt: 'The forested slopes of the Parvati valley',
      },
      {
        name: 'Manikaran',
        description: 'Hot springs beside the gurudwara on the valley floor.',
        image: 'manikaran2',
        imageAlt: 'The gurudwara at Manikaran',
      },
    ],
    info: {
      bestTime: 'April to June, and September to early November',
      weather:
        'Warm in the valley, genuinely cold at Kheerganga after dark whatever the season. Snow closes the upper trail through winter. The monsoon makes the climb slippery and is best avoided.',
      whatToCarry: [
        'Proper trekking shoes — this is not a walk in trainers',
        'A warm layer and a rain shell, regardless of forecast',
        'A head torch',
        'At least two litres of water capacity',
        'Only what you are willing to carry uphill for five hours',
      ],
      tips: [
        'Start the climb early. Afternoon weather in the valley turns quickly.',
        'Keep the pack light. Everything you bring, you carry.',
        'There is no reliable mobile signal above Barshaini.',
      ],
      important: [
        'The trek requires reasonable fitness and roughly five hours of continuous uphill walking.',
        'Trail conditions and camping arrangements depend on weather and local regulation.',
        'The itinerary above is indicative; the final plan is confirmed at booking.',
      ],
    },
    faqs: [
      {
        question: 'How difficult is the Kheerganga trek?',
        answer:
          'Moderate. The distance is around twelve kilometres round trip with a steady gain of roughly 1,100 metres. No technical skill is needed, but you should be comfortable walking uphill for several hours.',
      },
      {
        question: 'Where do we sleep at the top?',
        answer:
          'In tents at the Kheerganga meadow. Conditions are basic and the night is cold — that is part of the experience rather than an oversight.',
      },
      {
        question: 'Can luggage be left in Kasol?',
        answer:
          'Yes. You carry only a day pack up to Kheerganga; the rest stays at your Kasol accommodation.',
      },
      {
        question: 'What if the weather turns?',
        answer:
          'We will say so and change the plan. Nobody is sent up a wet trail to keep an itinerary intact.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'shimla-manali-kasol',
    name: 'Shimla × Manali × Kasol',
    plainName: 'Shimla Manali Kasol',
    tagline: 'The long way through Himachal, taken properly.',
    region: 'Himachal Pradesh',
    nights: 6,
    duration: '7 Days / 6 Nights',
    priceFrom: 21500,
    heroImage: 'shimlaCity',
    heroImageAlt: 'The hillside city of Shimla layered along the ridge',
    cardImage: 'shimlaRidge',
    summary:
      'Colonial hill station, high alpine valley and riverside pine forest — the three distinct characters of Himachal in one unhurried week.',
    description: [
      'Most operators compress this into five days and spend four of them in a vehicle. We do not. A week gives each place enough time to register as somewhere rather than a stop, and it means the drives happen in daylight, at sensible hours.',
      'Shimla for the ridge walks and the deodar forest. Manali for the high country and the tunnel through to Lahaul. Kasol to slow down before you go home. The order matters — the trip gets quieter as it goes.',
    ],
    bestFor: ['Families', 'Couples', 'Groups'],
    travelStyle: 'Leisure + Sightseeing',
    tripTypes: ['Mountain', 'Family', 'Couple', 'Leisure'],
    highlights: [
      'The Ridge and Mall Road in Shimla at dusk',
      'Deodar forest and the Himalayan view from Kufri',
      'Solang Valley and the Atal Tunnel',
      'Old Manali and the Hadimba temple grove',
      'Three unhurried nights winding down in the Parvati valley',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Shimla',
        description:
          'Up through the foothills to the ridge. The afternoon is free to walk — Shimla is a city best understood on foot, and almost all of it is uphill.',
        places: ['Shimla', 'The Ridge', 'Mall Road'],
        meals: 'Dinner',
        stay: 'Hotel in Shimla',
        transport: 'Private vehicle from arrival point',
        image: 'shimlaRidge2',
        imageAlt: 'The Ridge in Shimla with colonial-era buildings',
      },
      {
        day: 2,
        title: 'Kufri and the Shimla forest',
        description:
          'A short run out to Kufri for the Himalayan view on a clear morning, then back through reserve forest. The deodars around Shimla are the real attraction and the least photographed.',
        places: ['Kufri', 'Shimla Reserve Forest'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Shimla',
        transport: 'Private vehicle',
        image: 'kufriView',
        imageAlt: 'The greater Himalaya seen from the hills above Kufri',
      },
      {
        day: 3,
        title: 'Shimla to Manali',
        description:
          'The long transfer north along the Sutlej and then the Beas — the best drive of the trip. We break it properly rather than pushing through.',
        places: ['Sutlej Valley', 'Kullu', 'Manali'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Manali',
        transport: 'Private vehicle',
        image: 'beasRiver',
        imageAlt: 'The Beas river running through the Himachal foothills',
      },
      {
        day: 4,
        title: 'Solang Valley and the Atal Tunnel',
        description:
          'North out of Manali into the high country, through the tunnel and into Lahaul — an entirely different landscape on the far side of the rock.',
        places: ['Solang Valley', 'Atal Tunnel', 'Sissu viewpoint'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Manali',
        transport: 'Private vehicle',
        image: 'rohtangRoad',
        imageAlt: 'The mountain road climbing from Manali towards Rohtang',
      },
      {
        day: 5,
        title: 'Old Manali, then Kasol',
        description:
          'A morning among the cedars at the Hadimba temple and the lanes of Old Manali, then south into the Parvati valley.',
        places: ['Hadimba Temple', 'Old Manali', 'Kasol'],
        meals: 'Breakfast, Dinner',
        stay: 'Guesthouse in Kasol',
        transport: 'Private vehicle',
        image: 'oldManaliMarket',
        imageAlt: 'A street in Old Manali',
      },
      {
        day: 6,
        title: 'Manikaran and the Parvati river',
        description:
          'Hot springs and the gurudwara at Manikaran in the morning. The afternoon is deliberately empty — the last full day should not be a schedule.',
        places: ['Manikaran', 'Kasol', 'Chalal'],
        meals: 'Breakfast, Dinner',
        stay: 'Guesthouse in Kasol',
        transport: 'Private vehicle for sightseeing',
        image: 'parvatiValley3',
        imageAlt: 'The Parvati river valley seen from above Kasol',
      },
      {
        day: 7,
        title: 'Departure',
        description: 'Down the valley through Bhuntar, timed around your onward travel.',
        places: ['Kasol', 'Bhuntar'],
        meals: 'Breakfast',
        stay: '—',
        transport: 'Private vehicle to departure point',
        image: 'kasolTown',
        imageAlt: 'Morning light on the Parvati valley at Kasol',
      },
    ],
    inclusions: [
      'Accommodation for 6 nights on twin-sharing basis',
      'Daily breakfast and dinner',
      'Private vehicle throughout, including all inter-city transfers',
      'Experienced local driver',
      'Toll, parking and driver allowances',
      'On-trip coordination and support',
    ],
    exclusions: [
      'Flights, trains and travel to the starting point',
      'Lunches and personal expenses',
      'Ropeway, adventure activities and entry fees',
      'Anything not listed under inclusions',
    ],
    placesCovered: [
      {
        name: 'Shimla',
        description: 'A colonial hill station layered along a forested ridge.',
        image: 'shimlaLandscape',
        imageAlt: 'The city of Shimla spread across the hillside',
      },
      {
        name: 'Kufri',
        description: 'Open hills above Shimla with a long Himalayan horizon.',
        image: 'kufriHills',
        imageAlt: 'The hills around Kufri near Shimla',
      },
      {
        name: 'Solang Valley',
        description: 'The alpine meadow above Manali, ringed by peaks.',
        image: 'solangSnow',
        imageAlt: 'Solang Valley under snow',
      },
      {
        name: 'Kasol',
        description: 'Pine, river and quiet at the end of the week.',
        image: 'kasolTown2',
        imageAlt: 'The Parvati river beside Kasol',
      },
    ],
    info: {
      bestTime: 'March to June, and September to November',
      weather:
        'Shimla is temperate year round and cold in winter. Manali is markedly colder, with snow on the higher roads from December. The monsoon brings landslide risk across Himachal in July and August.',
      whatToCarry: [
        'Layers for a 20°C swing between Shimla afternoons and Manali nights',
        'Comfortable walking shoes — Shimla is steep',
        'Sunscreen and sunglasses',
        'Personal medication and basic first aid',
        'A power bank for long drive days',
      ],
      tips: [
        'Shimla’s Mall Road is pedestrian-only; expect a short walk from vehicle drop-off.',
        'The Shimla to Manali transfer is a full day. Travel light on snacks and heavy on playlists.',
        'Book ropeway and activity tickets on the day — weather decides more than planning does.',
      ],
      important: [
        'Mountain road timings depend on weather and are subject to change.',
        'Access beyond the Atal Tunnel can be restricted in winter conditions.',
        'The itinerary above is indicative; the final plan is confirmed at booking.',
      ],
    },
    faqs: [
      {
        question: 'Is seven days too long for this route?',
        answer:
          'It is the shortest version we are comfortable running well. The five-day versions sold elsewhere spend most of their hours on the road, and people come back tired rather than rested.',
      },
      {
        question: 'How long is the Shimla to Manali drive?',
        answer:
          'Typically seven to nine hours including stops, depending on conditions. It is the longest single transfer of the trip and we start it early.',
      },
      {
        question: 'Does this work with children?',
        answer:
          'Yes, and it is one of our more family-workable routes — the sightseeing is short-radius and the walking is optional. Tell us the ages and we will pace it accordingly.',
      },
      {
        question: 'Can we swap Kasol for somewhere else?',
        answer:
          'Often, yes. Manikaran, Tosh or a longer stay in Manali are all straightforward substitutions.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'udaipur-mount-abu',
    name: 'Udaipur × Mount Abu',
    plainName: 'Udaipur Mount Abu',
    tagline: 'Lake palaces, marble temples and Rajasthan’s only hill station.',
    region: 'Rajasthan',
    nights: 4,
    duration: '5 Days / 4 Nights',
    priceFrom: 16900,
    heroImage: 'udaipurLakePalace',
    heroImageAlt: 'The Taj Lake Palace on Lake Pichola seen from the City Palace, Udaipur',
    cardImage: 'udaipurPicholaSunset',
    summary:
      'Water, marble and evening light — the most architecturally rewarding week in Rajasthan, paired with a genuine break from the heat.',
    description: [
      'Udaipur is a city built around reflection, and it rewards travellers who stay long enough to see it at different hours. We give it three nights: the City Palace in the morning, Pichola at sunset, and the back lanes in between.',
      'Then up to Mount Abu — Rajasthan’s only hill station, and home to the Dilwara temples, whose carved marble ceilings are among the finest things in India. The elevation change also makes this route workable in months when the rest of Rajasthan is unbearable.',
    ],
    bestFor: ['Couples', 'Families', 'Heritage travellers'],
    travelStyle: 'Heritage + Leisure',
    tripTypes: ['Heritage', 'Couple', 'Family', 'Leisure'],
    highlights: [
      'Sunset on Lake Pichola from the water',
      'The City Palace complex above the lake',
      'The carved marble interiors of the Dilwara temples',
      'Nakki Lake and the escarpment viewpoints at Mount Abu',
      'Evening in Udaipur’s old lanes without a schedule',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Udaipur',
        description:
          'Arrive and settle. The first evening is kept free for the old city — the lanes between Jagdish Temple and the ghats are best walked without a plan.',
        places: ['Udaipur old city', 'Jagdish Temple'],
        meals: 'Dinner',
        stay: 'Hotel in Udaipur',
        transport: 'Private vehicle from arrival point',
        image: 'udaipurMusician',
        imageAlt: 'A street musician playing in Udaipur',
      },
      {
        day: 2,
        title: 'City Palace and Lake Pichola',
        description:
          'The City Palace complex in the morning, when the courtyards are still cool. A boat on Pichola in the late afternoon as the light goes gold on the water.',
        places: ['City Palace', 'Lake Pichola', 'Jag Mandir'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Udaipur',
        transport: 'Private vehicle and lake boat',
        image: 'udaipurCityPalace',
        imageAlt: 'The City Palace of Udaipur rising above Lake Pichola',
      },
      {
        day: 3,
        title: 'Udaipur to Mount Abu',
        description:
          'South-west out of Udaipur and up the Aravalli escarpment. The temperature drops noticeably on the climb. Evening at Nakki Lake and the sunset point.',
        places: ['Aravalli Range', 'Mount Abu', 'Nakki Lake'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Mount Abu',
        transport: 'Private vehicle',
        image: 'nakkiSunset',
        imageAlt: 'Sunset over Nakki Lake at Mount Abu',
      },
      {
        day: 4,
        title: 'Dilwara temples and the viewpoints',
        description:
          'The Dilwara temples in the morning — plain on the outside, extraordinary within. Afterwards the escarpment viewpoints looking out over the plains.',
        places: ['Dilwara Temples', 'Honeymoon Point', 'Guru Shikhar road'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Mount Abu',
        transport: 'Private vehicle',
        image: 'dilwaraCeiling',
        imageAlt: 'Carved marble ceiling inside the Dilwara temples',
      },
      {
        day: 5,
        title: 'Departure',
        description:
          'Down the escarpment and on to your departure point, timed around your onward travel.',
        places: ['Mount Abu', 'Abu Road'],
        meals: 'Breakfast',
        stay: '—',
        transport: 'Private vehicle to departure point',
        image: 'mountAbuCity',
        imageAlt: 'The town of Mount Abu on the road to Guru Shikhar',
      },
    ],
    inclusions: [
      'Accommodation for 4 nights on twin-sharing basis',
      'Daily breakfast and dinner',
      'Private vehicle for all transfers and sightseeing',
      'Experienced local driver',
      'Toll, parking and driver allowances',
      'On-trip coordination and support',
    ],
    exclusions: [
      'Flights, trains and travel to the starting point',
      'Lunches and personal expenses',
      'Monument entry fees and camera charges',
      'Boat tickets on Lake Pichola unless specified',
      'Anything not listed under inclusions',
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
        question: 'Is three nights enough for Udaipur?',
        answer:
          'It is enough to see the city properly without rushing. If you want to add Kumbhalgarh or Ranakpur, we would suggest a fourth night rather than compressing what is already there.',
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
      'Srinagar, Pahalgam, Gulmarg and Sonamarg — the four faces of the valley, with enough time in each to stop photographing and start looking.',
    description: [
      'Kashmir is the journey people describe differently afterwards than they did beforehand. The postcards do not prepare you for the scale of the Lidder valley, or for how quiet Dal Lake is at six in the morning before the shikaras move.',
      'We run this as five nights because four is not enough and six starts to repeat. Two nights on the water at Srinagar, and day trips out to the meadows, so you unpack twice rather than five times.',
    ],
    bestFor: ['Couples', 'Families', 'Photographers'],
    travelStyle: 'Scenic + Leisure',
    tripTypes: ['Mountain', 'Couple', 'Family', 'Leisure'],
    highlights: [
      'Dawn on Dal Lake before the shikaras start moving',
      'The Lidder valley and Betaab Valley at Pahalgam',
      'The meadow and the gondola at Gulmarg',
      'Thajiwas glacier country above Sonamarg',
      'The Mughal gardens on the Srinagar shore',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Srinagar',
        description:
          'Arrive into the valley and out onto the water. The afternoon is a shikara ride on Dal Lake and the Mughal gardens along the eastern shore if the light holds.',
        places: ['Srinagar', 'Dal Lake', 'Shalimar Bagh'],
        meals: 'Dinner',
        stay: 'Houseboat or hotel in Srinagar',
        transport: 'Private vehicle and shikara',
        image: 'dalLakeDusk',
        imageAlt: 'Dusk over Dal Lake in Srinagar',
      },
      {
        day: 2,
        title: 'Pahalgam and the Lidder valley',
        description:
          'East to Pahalgam along the Lidder, through saffron fields and cricket-bat willow. Betaab Valley in the afternoon, where the pines run right down to the river.',
        places: ['Pahalgam', 'Betaab Valley', 'Lidder River'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Pahalgam',
        transport: 'Private vehicle',
        image: 'betaabValley',
        imageAlt: 'Betaab Valley near Pahalgam with pine forest and peaks',
      },
      {
        day: 3,
        title: 'Pahalgam to Gulmarg',
        description:
          'Across the valley floor to Gulmarg, a meadow at 2,650 metres surrounded by fir. The gondola climbs from here towards Apharwat if conditions allow.',
        places: ['Gulmarg', 'Kongdoori'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Gulmarg',
        transport: 'Private vehicle',
        image: 'gulmargRoads',
        imageAlt: 'A road through the meadows and firs at Gulmarg',
      },
      {
        day: 4,
        title: 'Gulmarg to Sonamarg',
        description:
          'North-east along the Sindh valley to Sonamarg — the meadow of gold — with glacier country immediately above it at Thajiwas.',
        places: ['Sonamarg', 'Thajiwas', 'Sindh Valley'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Sonamarg or Srinagar',
        transport: 'Private vehicle',
        image: 'sonamargThajiwas',
        imageAlt: 'Thajiwas park above Sonamarg in Kashmir',
      },
      {
        day: 5,
        title: 'Back to Srinagar',
        description:
          'Return to Srinagar with the afternoon free. The floating market and the old city are both worth the time, and the lake is different again in evening light.',
        places: ['Srinagar', 'Dal Lake', 'Old City'],
        meals: 'Breakfast, Dinner',
        stay: 'Houseboat or hotel in Srinagar',
        transport: 'Private vehicle',
        image: 'dalFloatingMarket',
        imageAlt: 'The floating vegetable market on Dal Lake',
      },
      {
        day: 6,
        title: 'Departure',
        description: 'A last morning on the water, then on to your departure point.',
        places: ['Srinagar'],
        meals: 'Breakfast',
        stay: '—',
        transport: 'Private vehicle to departure point',
        image: 'dalHouseboats',
        imageAlt: 'Houseboats moored on Dal Lake, Srinagar',
      },
    ],
    inclusions: [
      'Accommodation for 5 nights on twin-sharing basis',
      'Daily breakfast and dinner',
      'Private vehicle for all transfers and sightseeing',
      'One shikara ride on Dal Lake',
      'Experienced local driver',
      'On-trip coordination and support',
    ],
    exclusions: [
      'Flights and travel to Srinagar',
      'Lunches and personal expenses',
      'Gulmarg gondola tickets and pony rides',
      'Local union vehicle charges at Pahalgam and Sonamarg',
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
    nights: 5,
    duration: '6 Days / 5 Nights',
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
      'Time built in to acclimatise rather than race',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Into the Mandakini valley',
        description:
          'North from the plains along the Ganga and then the Mandakini, through Devprayag and Rudraprayag where the rivers meet. Overnight low, at Guptkashi or Sitapur.',
        places: ['Devprayag', 'Rudraprayag', 'Guptkashi'],
        meals: 'Dinner',
        stay: 'Hotel in Guptkashi or Sitapur',
        transport: 'Private vehicle from arrival point',
        image: 'gaurikundForest',
        imageAlt: 'Forested slopes in the valley below Kedarnath',
      },
      {
        day: 2,
        title: 'Gaurikund to Kedarnath',
        description:
          'An early start to the road head at Sonprayag, then the sixteen-kilometre climb from Gaurikund. It takes most people six to eight hours. The valley narrows, then opens, and the temple appears very suddenly.',
        places: ['Sonprayag', 'Gaurikund', 'Kedarnath'],
        meals: 'Breakfast, Dinner',
        stay: 'Basic accommodation at Kedarnath',
        transport: 'Vehicle to road head, then on foot or by pony',
        image: 'gaurikundTrail',
        imageAlt: 'The trail climbing from Gaurikund towards Kedarnath',
      },
      {
        day: 3,
        title: 'Darshan and descent',
        description:
          'Morning darshan at the temple, then back down the same trail — quicker than the climb but harder on the knees. Overnight back in the valley.',
        places: ['Kedarnath Temple', 'Gaurikund', 'Guptkashi'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Guptkashi or Sitapur',
        transport: 'On foot, then private vehicle',
        image: 'kedarnathDevotees',
        imageAlt: 'Devotees at the Kedarnath temple',
      },
      {
        day: 4,
        title: 'Chopta',
        description:
          'A short transfer to Chopta, high meadow country in the Kedarnath wildlife sanctuary — quiet, forested, and a complete change of register after the ascent.',
        places: ['Chopta', 'Kedarnath Wildlife Sanctuary'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel or camp at Chopta',
        transport: 'Private vehicle',
        image: 'kedarnathTown',
        imageAlt: 'High meadow country near Chopta in Uttarakhand',
      },
      {
        day: 5,
        title: 'Rishikesh',
        description:
          'Back down the valley to Rishikesh for the evening Ganga aarti on the ghats — a natural close to a journey that began in the same river system.',
        places: ['Rudraprayag', 'Rishikesh'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Rishikesh',
        transport: 'Private vehicle',
        image: 'gangaAarti',
        imageAlt: 'Evening Ganga aarti on the ghats at Rishikesh',
      },
      {
        day: 6,
        title: 'Departure',
        description: 'A last morning by the river, then on to your departure point.',
        places: ['Rishikesh'],
        meals: 'Breakfast',
        stay: '—',
        transport: 'Private vehicle to departure point',
        image: 'ramJhula',
        imageAlt: 'The Ram Jhula footbridge over the Ganga at Rishikesh',
      },
    ],
    inclusions: [
      'Accommodation for 5 nights, including one night at Kedarnath',
      'Daily breakfast and dinner',
      'Private vehicle for all road transfers',
      'Experienced local driver',
      'Assistance with registration formalities',
      'On-trip coordination and support',
    ],
    exclusions: [
      'Travel to and from the starting point',
      'Ponies, palanquins, porters and helicopter tickets',
      'Lunches and personal expenses',
      'Any temple donations or special darshan arrangements',
      'Anything not listed under inclusions',
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
        name: 'Chopta',
        description: 'High meadow and forest in the Kedarnath sanctuary.',
        image: 'kedarnathTrek',
        imageAlt: 'Meadow and forest near Chopta',
      },
      {
        name: 'Rishikesh',
        description: 'The Ganga on the plains, and the evening aarti.',
        image: 'gangaAarti2',
        imageAlt: 'Ganga aarti at Rishikesh',
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
    slug: 'badrinath',
    name: 'Badrinath',
    plainName: 'Badrinath',
    tagline: 'The last temple before the border, and the village beyond it.',
    region: 'Uttarakhand',
    nights: 4,
    duration: '5 Days / 4 Nights',
    priceFrom: 17500,
    heroImage: 'badrinathTemple',
    heroImageAlt: 'The Badrinath temple in early morning light beneath the Nar and Narayan peaks',
    cardImage: 'badrinathEntrance',
    summary:
      'A road journey to 3,300 metres through the Alaknanda gorge, ending at a temple you can drive to and a village at the edge of the map.',
    description: [
      'Badrinath is the most accessible of the Char Dham — the road runs to the temple door — which makes it possible for travellers who could not manage the Kedarnath climb. That accessibility does not make it ordinary. The Alaknanda gorge above Joshimath is one of the more dramatic drives in the Himalaya.',
      'Three kilometres further on is Mana, described as the last village before the border, and worth the short detour for the setting alone. We pair the temple with Auli, where the view opens out to Nanda Devi.',
    ],
    bestFor: ['Pilgrims', 'Families', 'Older travellers'],
    travelStyle: 'Spiritual + Scenic',
    tripTypes: ['Spiritual', 'Family', 'Mountain', 'Group'],
    highlights: [
      'Darshan at the Badrinath temple',
      'Mana village, past the temple towards the border',
      'The Alaknanda gorge road above Joshimath',
      'The Nanda Devi view from Auli',
      'Tapt Kund hot springs below the temple steps',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Into the Alaknanda valley',
        description:
          'North from the plains through Devprayag, where the Bhagirathi and Alaknanda meet to become the Ganga, and on up to Joshimath.',
        places: ['Devprayag', 'Rudraprayag', 'Joshimath'],
        meals: 'Dinner',
        stay: 'Hotel in Joshimath',
        transport: 'Private vehicle from arrival point',
        image: 'joshimath',
        imageAlt: 'The town of Joshimath in the Alaknanda valley',
      },
      {
        day: 2,
        title: 'Joshimath to Badrinath',
        description:
          'The gorge road climbs steadily to 3,300 metres. Afternoon darshan at the temple, and the Tapt Kund hot springs on the steps below it.',
        places: ['Badrinath Temple', 'Tapt Kund'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Badrinath',
        transport: 'Private vehicle',
        image: 'badrinathNight',
        imageAlt: 'The Badrinath temple lit at night',
      },
      {
        day: 3,
        title: 'Mana village, then Auli',
        description:
          'Three kilometres past the temple to Mana, at the head of the valley. Then back down to Joshimath and up to Auli, where the Nanda Devi massif fills the horizon.',
        places: ['Mana Village', 'Joshimath', 'Auli'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Auli or Joshimath',
        transport: 'Private vehicle and cable car',
        image: 'manaVillage',
        imageAlt: 'Mana village in Chamoli district, Uttarakhand',
      },
      {
        day: 4,
        title: 'Down to Rishikesh',
        description:
          'The long descent out of the mountains, arriving in Rishikesh in time for the evening aarti on the ghats.',
        places: ['Rudraprayag', 'Devprayag', 'Rishikesh'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel in Rishikesh',
        transport: 'Private vehicle',
        image: 'gangaAarti3',
        imageAlt: 'Ganga aarti on the riverbank at Rishikesh',
      },
      {
        day: 5,
        title: 'Departure',
        description: 'A morning by the river, then on to your departure point.',
        places: ['Rishikesh'],
        meals: 'Breakfast',
        stay: '—',
        transport: 'Private vehicle to departure point',
        image: 'lakshmanJhula',
        imageAlt: 'The Lakshman Jhula bridge at Rishikesh',
      },
    ],
    inclusions: [
      'Accommodation for 4 nights on twin-sharing basis',
      'Daily breakfast and dinner',
      'Private vehicle for all transfers and sightseeing',
      'Experienced local driver',
      'Assistance with registration formalities',
      'On-trip coordination and support',
    ],
    exclusions: [
      'Travel to and from the starting point',
      'Auli cable car tickets',
      'Lunches and personal expenses',
      'Temple donations and special darshan arrangements',
      'Anything not listed under inclusions',
    ],
    placesCovered: [
      {
        name: 'Badrinath Temple',
        description: 'At 3,300 metres, beneath the Nar and Narayan peaks.',
        image: 'badrinathWide',
        imageAlt: 'The Badrinath temple and the surrounding peaks',
      },
      {
        name: 'Mana Village',
        description: 'The last village on the road, three kilometres beyond the temple.',
        image: 'manaVillage2',
        imageAlt: 'Stone houses in Mana village',
      },
      {
        name: 'Auli',
        description: 'Meadow and ski slope with a full view of Nanda Devi.',
        image: 'auliMountains',
        imageAlt: 'The mountains seen from Auli in Uttarakhand',
      },
      {
        name: 'Joshimath',
        description: 'The valley town where the gorge road begins to climb.',
        image: 'auliView',
        imageAlt: 'The view over the valley from Auli',
      },
    ],
    info: {
      bestTime: 'May to June, and September to October',
      weather:
        'The temple opens around late April or early May and closes in November. Days are mild and nights cold at Badrinath through the season. The monsoon brings landslide risk on the gorge road.',
      whatToCarry: [
        'Warm layers — Badrinath is cold after dark even in June',
        'A waterproof shell',
        'Comfortable shoes; the walking is short but the ground is uneven',
        'Personal medication and anything you use for altitude',
        'Photo ID for the mandatory registration',
      ],
      tips: [
        'Drink more water than feels necessary; 3,300 metres dehydrates you quietly.',
        'Morning darshan queues are shorter than the evening ones.',
        'Carry cash above Joshimath.',
      ],
      important: [
        'Char Dham yatra registration is mandatory and administered by the state authorities.',
        'Temple opening dates are announced annually; the route closes in winter.',
        'Gorge road conditions can change at short notice, particularly during and after rain.',
        'The itinerary above is indicative; the final plan is confirmed at booking.',
      ],
    },
    faqs: [
      {
        question: 'Is there any trekking involved?',
        answer:
          'No. The road runs to the temple, and Mana is a short, gentle walk. This is the Char Dham journey we recommend for travellers who cannot manage the Kedarnath ascent.',
      },
      {
        question: 'How high is Badrinath, and will altitude be a problem?',
        answer:
          'Around 3,300 metres. Most people are fine, particularly having overnighted at Joshimath on the way up. Anyone with a cardiac or respiratory condition should speak to their doctor first.',
      },
      {
        question: 'Can Badrinath and Kedarnath be combined?',
        answer:
          'Yes, and it is a common request — usually as a nine or ten night journey. Tell us and we will draft the combined route.',
      },
      {
        question: 'How long are the driving days?',
        answer:
          'The two transfer days from and to the plains are long — eight to ten hours through mountain terrain. The middle days are much shorter.',
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'rishikesh',
    name: 'Rishikesh',
    plainName: 'Rishikesh',
    tagline: 'White water in the morning, aarti on the ghats at dusk.',
    region: 'Uttarakhand',
    nights: 2,
    duration: '3 Days / 2 Nights',
    priceFrom: 8900,
    heroImage: 'lakshmanJhula2',
    heroImageAlt: 'The Lakshman Jhula suspension bridge over the Ganga at Rishikesh',
    cardImage: 'rafting',
    summary:
      'A short, high-contrast weekend — rafting the Ganga by day, and the evening aarti on the ghats, where the river becomes something else entirely.',
    description: [
      'Rishikesh does two things exceptionally well and does them within a few kilometres of each other. In the morning the Ganga is whitewater — a sixteen-kilometre run down from Shivpuri through rapids with names people remember. By evening the same river is lined with lamps.',
      'It works as a weekend from Delhi, as a decompression stop after a Char Dham journey, or as a first taste of the Himalaya for people who are not sure yet.',
    ],
    bestFor: ['Friends', 'Couples', 'Weekend travellers'],
    travelStyle: 'Adventure + Spiritual',
    tripTypes: ['Adventure', 'Spiritual', 'Group', 'Couple'],
    highlights: [
      'The sixteen-kilometre rafting run from Shivpuri',
      'Evening Ganga aarti on the ghats',
      'The Lakshman Jhula and Ram Jhula footbridges',
      'The forest road up to the Neelkanth Mahadev temple',
      'Early morning on the riverbank before the town wakes',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Rishikesh',
        description:
          'Arrive and cross the river on foot. The lanes on the far bank of Lakshman Jhula are best explored slowly. Down to the ghats for the evening aarti as the light goes.',
        places: ['Lakshman Jhula', 'Ram Jhula', 'Triveni Ghat'],
        meals: 'Dinner',
        stay: 'Hotel or riverside camp in Rishikesh',
        transport: 'Private vehicle from arrival point',
        image: 'lakshmanJhula3',
        imageAlt: 'The Lakshman Jhula bridge crossing the Ganga',
      },
      {
        day: 2,
        title: 'Rafting and Neelkanth',
        description:
          'Upriver to Shivpuri for the rafting run back down — around sixteen kilometres through graded rapids. In the afternoon, the forest road climbing to the Neelkanth Mahadev temple.',
        places: ['Shivpuri', 'Ganga rapids', 'Neelkanth Mahadev'],
        meals: 'Breakfast, Dinner',
        stay: 'Hotel or riverside camp in Rishikesh',
        transport: 'Private vehicle and rafting transfer',
        image: 'rafting2',
        imageAlt: 'A raft running the rapids on the Ganga near Rishikesh',
      },
      {
        day: 3,
        title: 'Departure',
        description:
          'An early walk on the riverbank before the town fills up, then on to your departure point.',
        places: ['Rishikesh'],
        meals: 'Breakfast',
        stay: '—',
        transport: 'Private vehicle to departure point',
        image: 'rishikeshView',
        imageAlt: 'A view over Rishikesh and the Ganga',
      },
    ],
    inclusions: [
      'Accommodation for 2 nights on twin-sharing basis',
      'Daily breakfast and dinner',
      'Private vehicle for transfers and sightseeing',
      'Rafting session with a certified operator, including safety equipment',
      'Experienced local driver',
      'On-trip coordination and support',
    ],
    exclusions: [
      'Travel to and from the starting point',
      'Bungee jumping, zip line and other adventure activities',
      'Lunches and personal expenses',
      'Anything not listed under inclusions',
    ],
    placesCovered: [
      {
        name: 'Lakshman Jhula',
        description: 'The suspension footbridge the town is built around.',
        image: 'lakshmanJhula',
        imageAlt: 'Lakshman Jhula bridge at Rishikesh',
      },
      {
        name: 'Triveni Ghat',
        description: 'Where the evening aarti happens, and the river fills with lamps.',
        image: 'gangaAarti',
        imageAlt: 'Ganga aarti on the ghats at Rishikesh',
      },
      {
        name: 'Shivpuri',
        description: 'The put-in point for the rafting run downriver.',
        image: 'sivpuri',
        imageAlt: 'The Ganga at Shivpuri near Rishikesh',
      },
      {
        name: 'Ram Jhula',
        description: 'The second crossing, and the ashram bank of the river.',
        image: 'ramJhulaEvening',
        imageAlt: 'Ram Jhula bridge in the evening',
      },
    ],
    info: {
      bestTime: 'September to November, and February to May',
      weather:
        'Warm and pleasant through spring and autumn. Rafting is suspended during the monsoon, roughly late June to early September, when the river runs high.',
      whatToCarry: [
        'Quick-drying clothes and a change for after rafting',
        'Sandals or shoes that can get wet',
        'Sunscreen — there is no shade on the river',
        'A dry bag for anything you want to keep dry',
        'Modest clothing for the ghats and temples',
      ],
      tips: [
        'Arrive at the ghats early for the aarti. The good vantage points fill up well before it starts.',
        'Rishikesh is a dry city with no alcohol or meat served. Plan accordingly.',
        'Both footbridges are pedestrian crossings; leave the vehicle behind.',
      ],
      important: [
        'Rafting operates seasonally and is suspended during the monsoon and at high water.',
        'All rafting is run by certified local operators subject to their safety requirements.',
        'The itinerary above is indicative; the final plan is confirmed at booking.',
      ],
    },
    faqs: [
      {
        question: 'Do we need to know how to swim to raft?',
        answer:
          'No. Life jackets and helmets are mandatory and a certified guide is in every raft. You should tell us in advance if you are not a swimmer so the operator can brief you properly.',
      },
      {
        question: 'When is rafting not available?',
        answer:
          'Roughly late June to early September, when the monsoon puts the river out of safe range. We will tell you before you book if your dates fall in that window.',
      },
      {
        question: 'Is two nights enough?',
        answer:
          'For rafting and the aarti, yes. If you want to add a yoga programme or a Kunjapuri sunrise, we would suggest a third night.',
      },
      {
        question: 'Can this be combined with a Char Dham journey?',
        answer:
          'It combines naturally — Rishikesh is on the way in and out. Most of our Kedarnath and Badrinath travellers finish here.',
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
