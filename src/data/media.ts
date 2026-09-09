/**
 * Roam Ready — photography manifest.
 *
 * ⚠️ PLACEHOLDER ART DIRECTION. Every entry is a Creative Commons photograph
 * of (or evocative of) the real destination, served from Flickr's CDN under a
 * licence that permits commercial use and modification. Attribution for all of
 * them is rendered on /credits.
 *
 * To ship with owned or licensed photography, replace the entries in this file
 * and nothing else — no component or page imports an image URL directly.
 *
 * `base` is a Flickr URL stem; `variants` lists the widths that host actually
 * serves for that photo (probed at generation time, so no candidate 404s).
 */

/** Flickr size suffix for each width we generate candidates at. */
export const SIZE_SUFFIX: Record<number, string> = {
  640: 'z',
  800: 'c',
  1024: 'b',
  1600: 'h',
  2048: 'k',
}

export interface ImageAsset {
  /** Flickr URL stem, ending in an underscore. */
  base: string
  /** Widths available from the source, ascending. */
  variants: number[]
  /** Intrinsic aspect ratio (w / h) — used to reserve space and avoid CLS. */
  ratio: number
  /** Attribution, surfaced on /credits. */
  credit: string
  license: string
  /** Link back to the original, as the licences require. */
  source: string
}

export const media = {
  /** Kangchenjunga, Himalayas */
  heroJourney: {
    base: 'https://live.staticflickr.com/2374/1791403575_5738387b6c_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "A.Ostrovsky",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/44838470@N00/1791403575",
  },
  /** I found Heaven on Earth */
  heroAbout: {
    base: 'https://live.staticflickr.com/2198/1720654243_891cc02c1f_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "Tony George",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/93291596@N00/1720654243",
  },
  /** The Great Himalayas */
  heroPackages: {
    base: 'https://live.staticflickr.com/2192/2269225248_c60c9ffd13_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "wildxplorer",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/21932201@N04/2269225248",
  },
  /** Pahalgam - Towards Kashmir valley */
  heroDestinations: {
    base: 'https://live.staticflickr.com/7497/15714817621_d9bd9f265b_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "Ankur Panchbudhe",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/28747587@N00/15714817621",
  },
  /** Camino a Spiti valley, Himachal Pradesh */
  heroGallery: {
    base: 'https://live.staticflickr.com/8369/8512877493_0c4380376a_',
    variants: [640, 800, 1024],
    ratio: 2.08,
    credit: "Carlos Adampol",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/11767501@N07/8512877493",
  },
  /** The Taj Lake Palace on Lake Pichola, Udaipur */
  heroContact: {
    base: 'https://live.staticflickr.com/65535/54347929705_30077b9cd2_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "Mustang Joe",
    license: "CC CC0 1.0",
    source: "https://www.flickr.com/photos/63234672@N04/54347929705",
  },
  /** Dramatic clouds in Sonamarg */
  heroPlan: {
    base: 'https://live.staticflickr.com/7285/8737777822_a885d79e6a_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "Soumyadeep Paul",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/56933894@N07/8737777822",
  },
  /** Peaceful Himalayan morning! */
  whyRoamReady: {
    base: 'https://live.staticflickr.com/4619/39571957964_da0d645379_',
    variants: [640, 800],
    ratio: 0.8,
    credit: "2 million+ views. Humbled and thanks!",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/61732052@N02/39571957964",
  },
  /** Sleepy Mountain: Panchchuli Peak */
  storyMountains: {
    base: 'https://live.staticflickr.com/8637/16712139121_957c4262d4_',
    variants: [640, 800, 1024],
    ratio: 1.67,
    credit: "kg.abhi",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/31518092@N04/16712139121",
  },
  /** Treking On a Doly to Kedarnath */
  storyFaith: {
    base: 'https://live.staticflickr.com/3288/2949747652_373ffe442d_',
    variants: [640, 800, 1024],
    ratio: 1.49,
    credit: "Sunciti _ Sundaram's Images + Messages",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/27112342@N03/2949747652",
  },
  /** Opulence! */
  storyCulture: {
    base: 'https://live.staticflickr.com/7423/16373238618_3dc8122a0f_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "gags9999",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/37398884@N03/16373238618",
  },
  /** Sunset View of Mountains - Manali - Himachal Pradesh - India */
  manaliValley: {
    base: 'https://live.staticflickr.com/1718/26617843255_922cf779ca_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Adam Jones, Ph.D. - Global Photo Archive",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/41000732@N04/26617843255",
  },
  /** P4070015 Cedrus Deodara */
  manaliDeodar: {
    base: 'https://live.staticflickr.com/5229/5602387956_f1af429be0_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "niiicedave",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/33671002@N00/5602387956",
  },
  /** View from Terrace of Drifter's Inn - Old Manali - Himachal Pradesh - I */
  manaliCottages: {
    base: 'https://live.staticflickr.com/1519/25988675654_b182d6eb00_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Adam Jones, Ph.D. - Global Photo Archive",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/41000732@N04/25988675654",
  },
  /** a haven in Old Manali */
  oldManali: {
    base: 'https://live.staticflickr.com/22/29687308_7cedcf2a3c_',
    variants: [640, 800, 1024],
    ratio: 1.58,
    credit: "daniel n. reid",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/95416975@N00/29687308",
  },
  /** Old Manali Market */
  oldManaliMarket: {
    base: 'https://live.staticflickr.com/3497/3777570646_80c1031733_',
    variants: [640, 800, 1024],
    ratio: 1.49,
    credit: "Jace",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/41894175704@N01/3777570646",
  },
  /** The Hadimba Temple */
  hadimbaTemple: {
    base: 'https://live.staticflickr.com/5328/8897445909_831b023fbe_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "Sriharsha®",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/32744020@N07/8897445909",
  },
  /** Temple in Old Manali */
  hadimbaForest: {
    base: 'https://live.staticflickr.com/2236/3530912181_d2e9f373a6_',
    variants: [640, 800, 1024],
    ratio: 1.34,
    credit: "simon-and-india",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/27773459@N04/3530912181",
  },
  /** So long...valley! */
  solangValley: {
    base: 'https://live.staticflickr.com/4085/4971939046_28df88ce62_',
    variants: [640, 800, 1024],
    ratio: 1.49,
    credit: "⌡K",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/58419684@N00/4971939046",
  },
  /** Paragliding in Solang Valley, Manali */
  solangParagliding: {
    base: 'https://live.staticflickr.com/46/183128168_a6f58ef2c3_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "_Virdi_",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/35529648@N00/183128168",
  },
  /** Solang Plateau */
  solangSnow: {
    base: 'https://live.staticflickr.com/5146/5735669031_00e25a9b19_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "ryguywy",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/21587193@N07/5735669031",
  },
  /** Road to Rohtang Pass */
  atalTunnel: {
    base: 'https://live.staticflickr.com/63/183128170_3aa29909ec_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "_Virdi_",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/35529648@N00/183128170",
  },
  /** Hindustan-Tibet Highway (Kinnaur 408) */
  atalTunnelPortal: {
    base: 'https://live.staticflickr.com/3822/12558670034_acaa7fa067_',
    variants: [640],
    ratio: 0.71,
    credit: "Sanyam Bahga",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/21930651@N06/12558670034",
  },
  /** Rohtang Pass - Himachal Pradesh - India */
  rohtangRoad: {
    base: 'https://live.staticflickr.com/5252/5480874226_eda2a09cef_',
    variants: [640, 800, 1024],
    ratio: 1.45,
    credit: "Balaji.B Photography",
    license: "CC CC0 1.0",
    source: "https://www.flickr.com/photos/81073027@N00/5480874226",
  },
  /** Rohtang Pass */
  rohtangRoad2: {
    base: 'https://live.staticflickr.com/5295/5480278575_90794af523_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Balaji.B Photography",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/81073027@N00/5480278575",
  },
  /** Rohtang Pass */
  rohtangChandra: {
    base: 'https://live.staticflickr.com/5095/5480856026_884c4986f5_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Balaji.B Photography",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/81073027@N00/5480856026",
  },
  /** River Beas */
  beasRiver: {
    base: 'https://live.staticflickr.com/1268/5178135755_6d931d5602_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Balaji.B Photography",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/81073027@N00/5178135755",
  },
  /** flow... let it flow in its own tune! */
  beasRiver2: {
    base: 'https://live.staticflickr.com/8064/8195994472_73019f4429_',
    variants: [640, 800, 1024],
    ratio: 1.65,
    credit: "2 million+ views. Humbled and thanks!",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/61732052@N02/8195994472",
  },
  /** Serene Kasol - III */
  kasolTown: {
    base: 'https://live.staticflickr.com/7339/12216502205_28a59838c4_',
    variants: [640, 800, 1024],
    ratio: 1.32,
    credit: "exploring myself..",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/27527658@N05/12216502205",
  },
  /** Parvati River at Kasol | Himachal Pradesh */
  kasolTown2: {
    base: 'https://live.staticflickr.com/639/31977525814_07b1fe738a_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "TravelByChoice.Com",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/146986502@N06/31977525814",
  },
  /** Parvati River - Kasol Trip - Himachal Pradesh */
  kasolTown3: {
    base: 'https://live.staticflickr.com/2628/32006071833_03d20aef5e_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "TravelByChoice.Com",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/146986502@N06/32006071833",
  },
  /** Parvati river */
  parvatiValley: {
    base: 'https://live.staticflickr.com/65535/40669993163_f29a983e04_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "solarisgirl",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/7252160@N04/40669993163",
  },
  /** Kasol, Himachal Pradesh - thelatedcult.com */
  parvatiValley2: {
    base: 'https://live.staticflickr.com/4165/34305603480_3c7e71953b_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "thelatedcult.com",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/149686865@N08/34305603480",
  },
  /** Moving a Big Rock | Parvati River | Kasol Trip */
  parvatiValley3: {
    base: 'https://live.staticflickr.com/3881/32779703546_959f68b9fe_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "TravelByChoice.Com",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/146986502@N06/32779703546",
  },
  /** Kasol, Himachal Pradesh - thelatedcult.com */
  parvatiRatocha: {
    base: 'https://live.staticflickr.com/4167/33847873144_7de921c26f_',
    variants: [640, 800],
    ratio: 0.75,
    credit: "thelatedcult.com",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/149686865@N08/33847873144",
  },
  /** Parvati river */
  parvatiPortrait: {
    base: 'https://live.staticflickr.com/65535/32693959797_94a86fc781_',
    variants: [640],
    ratio: 0.71,
    credit: "solarisgirl",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/7252160@N04/32693959797",
  },
  /** Kheerganga (4) */
  kheergangaCamp: {
    base: 'https://live.staticflickr.com/7596/27442032110_43a29ae350_',
    variants: [640, 800, 1024],
    ratio: 1.51,
    credit: "travelling slacker",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/60651851@N02/27442032110",
  },
  /** Kheerganga (3) */
  kheergangaTrek: {
    base: 'https://live.staticflickr.com/7695/27720019625_b1fbf71009_',
    variants: [640, 800, 1024],
    ratio: 1.51,
    credit: "travelling slacker",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/60651851@N02/27720019625",
  },
  /** Kheerganga (6) */
  kheergangaHills: {
    base: 'https://live.staticflickr.com/7428/27442031690_e697f4fb4a_',
    variants: [640, 800, 1024],
    ratio: 1.51,
    credit: "travelling slacker",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/60651851@N02/27442031690",
  },
  /** Kheerganga (2) */
  kheergangaPark: {
    base: 'https://live.staticflickr.com/7613/27442032590_cf33b20822_',
    variants: [640, 800, 1024],
    ratio: 1.51,
    credit: "travelling slacker",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/60651851@N02/27442032590",
  },
  /** Kasol, Himachal Pradesh - thelatedcult.com */
  manikaran: {
    base: 'https://live.staticflickr.com/4194/34528576032_d102967479_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "thelatedcult.com",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/149686865@N08/34528576032",
  },
  /** Shiva sculpture in Manikaran's terms, Parvati Valley, Himachal Pradesh */
  manikaran2: {
    base: 'https://live.staticflickr.com/5509/14278228629_4413312481_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "margothierry",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/33683401@N07/14278228629",
  },
  /** Kasol, Himachal Pradesh - thelatedcult.com */
  manikaran3: {
    base: 'https://live.staticflickr.com/4193/34305596540_8827ede0d1_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "thelatedcult.com",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/149686865@N08/34305596540",
  },
  /** Pankaj at Kasol Hill Station, Himachal Pradesh */
  tosh: {
    base: 'https://live.staticflickr.com/276/32666934832_9071b6692f_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "TravelByChoice.Com",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/146986502@N06/32666934832",
  },
  /** At 300 rupees a night, I couldn't have asked for a better view. #tosh  */
  tosh2: {
    base: 'https://live.staticflickr.com/318/19826050090_13860af2da_',
    variants: [640, 800, 1024],
    ratio: 1,
    credit: "Unlisted Sightings",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/8804814@N08/19826050090",
  },
  /** Trekking to Tosh from Kasol | Himachal Pradesh */
  toshTrail: {
    base: 'https://live.staticflickr.com/2808/32666840272_a6d34b34bb_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "TravelByChoice.Com",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/146986502@N06/32666840272",
  },
  /** River near Pahalgam, Kashmir */
  toshStream: {
    base: 'https://live.staticflickr.com/8465/8142414846_8898cedb68_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "flowcomm",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/21162417@N07/8142414846",
  },
  /** Kheerganga (13) */
  toshSnow: {
    base: 'https://live.staticflickr.com/7337/27720013685_96ee8619d2_',
    variants: [640, 800, 1024],
    ratio: 1.51,
    credit: "travelling slacker",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/60651851@N02/27720013685",
  },
  /** Shimla */
  shimlaRidge: {
    base: 'https://live.staticflickr.com/2915/14702294931_29b4963c39_',
    variants: [640, 800, 1024],
    ratio: 1.51,
    credit: "dheerajdwivedi",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/103900058@N03/14702294931",
  },
  /** Shimla */
  shimlaRidge2: {
    base: 'https://live.staticflickr.com/7009/6609211177_36546b0e55_',
    variants: [640, 800, 1024],
    ratio: 1.51,
    credit: "generalising",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/97534175@N00/6609211177",
  },
  /** Shimla */
  shimlaCity: {
    base: 'https://live.staticflickr.com/7145/6609212325_5d657a2908_',
    variants: [640, 800, 1024],
    ratio: 1.51,
    credit: "generalising",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/97534175@N00/6609212325",
  },
  /** View of Sunni, Shimla, Himachal Pradesh */
  shimlaLandscape: {
    base: 'https://live.staticflickr.com/138/327960596_a16b279b12_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "JPannu",
    license: "CC CC0 1.0",
    source: "https://www.flickr.com/photos/24384953@N00/327960596",
  },
  /** Gathering of Ghosts */
  shimlaDeodar: {
    base: 'https://live.staticflickr.com/5121/5283034542_fb9c12cf6b_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Rohit Chhiber",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/44898393@N08/5283034542",
  },
  /** View from Kufri */
  kufriView: {
    base: 'https://live.staticflickr.com/5206/5354230197_79b59cd6cc_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Abhishek_Kumar",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/9283814@N02/5354230197",
  },
  /** chini bunglow- Kufri Shimla */
  kufriRoad: {
    base: 'https://live.staticflickr.com/1349/789095915_1f72e361f1_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "vinodbahal",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/49814493@N00/789095915",
  },
  /** mook */
  kufriHills: {
    base: 'https://live.staticflickr.com/4015/4314658245_7594eba5f0_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "Parth Joshi",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/37850683@N04/4314658245",
  },
  /** Shimla, foggy night after a sunset */
  shimlaLongwood: {
    base: 'https://live.staticflickr.com/4533/37692548505_2673727071_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "bharatjusta",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/118062454@N07/37692548505",
  },
  /** India - Udaipur - 004 - Lake palace */
  udaipurLakePalace: {
    base: 'https://live.staticflickr.com/1439/1037450231_acf06efa97_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "mckaysavage",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/56796376@N00/1037450231",
  },
  /** Udaipur City Palace */
  udaipurCityPalace: {
    base: 'https://live.staticflickr.com/4059/4571905826_5378a55d97_',
    variants: [640, 800, 1024],
    ratio: 1.51,
    credit: "ciamabue",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/25588248@N00/4571905826",
  },
  /** Lake Pichola, Udaipur */
  udaipurPichola: {
    base: 'https://live.staticflickr.com/2389/2282027965_24109cc72b_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "twiga_swala",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/21013862@N08/2282027965",
  },
  /** Lake Pichola, Udaipur */
  udaipurPicholaSunset: {
    base: 'https://live.staticflickr.com/3294/3135304712_54db30d438_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "estetika",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/57065019@N00/3135304712",
  },
  /** Udaipur, Rajasthan */
  udaipurView: {
    base: 'https://live.staticflickr.com/3364/3600215334_58cd6d80ab_',
    variants: [640, 800, 1024],
    ratio: 1.6,
    credit: "<DEEPAK GUPTA>",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/76932422@N00/3600215334",
  },
  /** Manji ka Mandir temple, Lake Pichola, Udaipur, India */
  udaipurShivNiwas: {
    base: 'https://live.staticflickr.com/65535/54672733244_9b5a706c7b_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "Mustang Joe",
    license: "CC CC0 1.0",
    source: "https://www.flickr.com/photos/63234672@N04/54672733244",
  },
  /** Jag Mandir - Lake Pichola, Udaipur */
  udaipurBoat: {
    base: 'https://live.staticflickr.com/2303/2282833808_62ee83221c_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "twiga_swala",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/21013862@N08/2282833808",
  },
  /** Udaipur, Rajasthan */
  udaipurMusician: {
    base: 'https://live.staticflickr.com/7517/16295140031_ab0b5ccb6a_',
    variants: [640, 800, 1024],
    ratio: 1.49,
    credit: "evoo73",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/21761329@N03/16295140031",
  },
  /** Mardana inside Udaipur's City Palace */
  udaipurPalaceDetail: {
    base: 'https://live.staticflickr.com/8469/8148287910_795e6d7012_',
    variants: [640, 800, 1024],
    ratio: 1.6,
    credit: "Nagarjun",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/64924693@N00/8148287910",
  },
  /** A glimpse of the sunset */
  mountAbuHoneymoon: {
    base: 'https://live.staticflickr.com/3197/2815956833_392a93aa52_',
    variants: [640, 800, 1024],
    ratio: 1.49,
    credit: "initrd",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/97943995@N00/2815956833",
  },
  /** Nasiyan Jain Temple */
  mountAbuCity: {
    base: 'https://live.staticflickr.com/5270/5729584013_bf2e6fb155_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "ramesh_lalwani",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/11398652@N00/5729584013",
  },
  /** Family of Langurs on the road to Mount Abu */
  mountAbuShooting: {
    base: 'https://live.staticflickr.com/5001/5353802340_d08756b77d_',
    variants: [640, 800, 1024],
    ratio: 1.49,
    credit: "hartjeff12",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/90338469@N00/5353802340",
  },
  /** Red-wattled lapwing (red-wattled plover), Nakki Lake */
  nakkiLake: {
    base: 'https://live.staticflickr.com/5285/5362882940_ef95e22505_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "hartjeff12",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/90338469@N00/5362882940",
  },
  /** Spooky Mansion */
  nakkiSunset: {
    base: 'https://live.staticflickr.com/5619/20383207658_98b53e1d0b_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "gags9999",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/37398884@N03/20383207658",
  },
  /** Jain Temple @ jaisalmer */
  nakkiEvening: {
    base: 'https://live.staticflickr.com/8646/16025765499_8fb553ac43_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "BOMBMAN",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/99622129@N00/16025765499",
  },
  /** Dilwara temple */
  dilwaraTemple: {
    base: 'https://live.staticflickr.com/5125/5370813339_0c1b0b8bcd_',
    variants: [640, 800, 1024],
    ratio: 1.49,
    credit: "selmerv",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/37022102@N00/5370813339",
  },
  /** Jain Temple */
  dilwaraCeiling: {
    base: 'https://live.staticflickr.com/7516/15589461154_ea37b8b93b_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "BOMBMAN",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/99622129@N00/15589461154",
  },
  /** Boats on Dal Lake - Srinagar - Jammu & Kashmir - India */
  dalLakeShikara: {
    base: 'https://live.staticflickr.com/7699/26210866744_2b2921d831_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Adam Jones, Ph.D. - Global Photo Archive",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/41000732@N04/26210866744",
  },
  /** Evening at Dal Lake Srinagar Kashmir */
  dalLakeDusk: {
    base: 'https://live.staticflickr.com/65535/51353500242_3f140c28e2_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "vijaymverma",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/11991201@N00/51353500242",
  },
  /** Dal Lake */
  dalHouseboats: {
    base: 'https://live.staticflickr.com/3289/2776577162_82abcf7fbc_',
    variants: [640, 800, 1024],
    ratio: 1.49,
    credit: "shahbasharat",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/20681804@N03/2776577162",
  },
  /** Dal Lake's sunset tour on a shikara - Srinagar */
  dalFloatingMarket: {
    base: 'https://live.staticflickr.com/2885/9967018276_c7c9700240_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "Fulvio Spada",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/78722206@N00/9967018276",
  },
  /** Srinagar - Houseboats in Dal lake */
  dalLake4: {
    base: 'https://live.staticflickr.com/7556/15104714523_0a885020b4_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "Ankur Panchbudhe",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/28747587@N00/15104714523",
  },
  /** Gulmarg, kashmir */
  gulmargSunset: {
    base: 'https://live.staticflickr.com/2374/2254067972_57ff0d8e7e_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "shahbasharat",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/20681804@N03/2254067972",
  },
  /** View en route Gulmarg, Kashmir */
  gulmargRoads: {
    base: 'https://live.staticflickr.com/3055/2775666803_7e7e791ca8_',
    variants: [640, 800, 1024],
    ratio: 1.49,
    credit: "shahbasharat",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/20681804@N03/2775666803",
  },
  /** Gulmarg, kashmir */
  gulmarg2: {
    base: 'https://live.staticflickr.com/2105/2254071634_fb38446337_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "shahbasharat",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/20681804@N03/2254071634",
  },
  /** Pink blossoms at Gulmarg, Kashmir */
  gulmargKongdoori: {
    base: 'https://live.staticflickr.com/7313/8747429174_c30539877f_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "Soumyadeep Paul",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/56933894@N07/8747429174",
  },
  /** Pahalgam - View of the Kashmir valley */
  pahalgamValley: {
    base: 'https://live.staticflickr.com/3953/15531531637_7e55e5cb78_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "Ankur Panchbudhe",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/28747587@N00/15531531637",
  },
  /** River, near Pahalgam, Kashmir */
  pahalgamLidder: {
    base: 'https://live.staticflickr.com/8044/8142329389_fb93aaf911_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "flowcomm",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/21162417@N07/8142329389",
  },
  /** Pahalgam, Kashmir */
  pahalgamTrek: {
    base: 'https://live.staticflickr.com/2059/2253278581_96a3a3efb1_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "shahbasharat",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/20681804@N03/2253278581",
  },
  /** Pahalgam - Betaab valley */
  betaabValley: {
    base: 'https://live.staticflickr.com/5609/15714781071_56d31e369c_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "Ankur Panchbudhe",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/28747587@N00/15714781071",
  },
  /** Pahalgam - Betaab valley view */
  betaabTop: {
    base: 'https://live.staticflickr.com/7538/15096742414_e12c45acac_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "Ankur Panchbudhe",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/28747587@N00/15096742414",
  },
  /** Pahalgam - Betaab valley garden */
  betaabMountains: {
    base: 'https://live.staticflickr.com/3956/15530810989_bd1e2d28f5_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "Ankur Panchbudhe",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/28747587@N00/15530810989",
  },
  /** Sonamarg, Kashmir */
  sonamarg: {
    base: 'https://live.staticflickr.com/2505/4154285828_eed4f08bd6_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "Praveen Selvam",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/48898139@N00/4154285828",
  },
  /** Thajiwas Glacier, Sonamarg, Kashmir - Picture 2 */
  sonamargThajiwas: {
    base: 'https://live.staticflickr.com/8269/8707809127_e1300fec9b_',
    variants: [640, 800, 1024],
    ratio: 1.47,
    credit: "www.kashmir123.com",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/95491601@N04/8707809127",
  },
  /** Kashmir valleys */
  sonamarg2: {
    base: 'https://live.staticflickr.com/2571/4154250916_0a69358cbf_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "Praveen Selvam",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/48898139@N00/4154250916",
  },
  /** Morning by the Dal Lake */
  shalimarBagh: {
    base: 'https://live.staticflickr.com/8252/8516686302_78160c62a9_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "Soumyadeep Paul",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/56933894@N07/8516686302",
  },
  /** Kashmir valleys */
  krishansarLake: {
    base: 'https://live.staticflickr.com/2600/4153503247_b93e670901_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "Praveen Selvam",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/48898139@N00/4153503247",
  },
  /** Unknown Mountains, Kashmir. */
  kashmirSnowy: {
    base: 'https://live.staticflickr.com/8553/8708913306_3a337260c8_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "www.kashmir123.com",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/95491601@N04/8708913306",
  },
  /** Treking On a Doly to Kedarnath */
  kedarnathTemple: {
    base: 'https://live.staticflickr.com/3288/2949747652_373ffe442d_',
    variants: [640, 800, 1024],
    ratio: 1.49,
    credit: "Sunciti _ Sundaram's Images + Messages",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/27112342@N03/2949747652",
  },
  /** Thro' the clouds */
  kedarnathRain: {
    base: 'https://live.staticflickr.com/3126/2540503607_7c679d86ec_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Balaji.B Photography",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/81073027@N00/2540503607",
  },
  /** The height of delight */
  kedarnathDevotees: {
    base: 'https://live.staticflickr.com/38/125091991_3acb9a0807_',
    variants: [640, 800],
    ratio: 1.56,
    credit: "NotMicroButSoft (Fallen in Love with Ghizar, GB)",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/83582442@N00/125091991",
  },
  /** Himalayan Village */
  kedarnathTown: {
    base: 'https://live.staticflickr.com/5242/5275304565_7b178124df_',
    variants: [640, 800, 1024],
    ratio: 1.44,
    credit: "paulhami",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/8306673@N02/5275304565",
  },
  /** Triund trek route */
  kedarnathTrek: {
    base: 'https://live.staticflickr.com/8255/8680894554_5f5dc0e606_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Jace",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/41894175704@N01/8680894554",
  },
  /** Snowline above Triund */
  kedarnathBasecamp: {
    base: 'https://live.staticflickr.com/8118/8679792147_2bef61d415_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Jace",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/41894175704@N01/8679792147",
  },
  /** Climbing up from Triund */
  kedarnathWalkover: {
    base: 'https://live.staticflickr.com/8527/8680905196_23262c17a1_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Jace",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/41894175704@N01/8680905196",
  },
  /** Triund trek route */
  gaurikundTrail: {
    base: 'https://live.staticflickr.com/8545/8679784957_b15c639139_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Jace",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/41894175704@N01/8679784957",
  },
  /** Ganges in Himalayas */
  gaurikundWaterfall: {
    base: 'https://live.staticflickr.com/7153/6511371407_c44ecf48a5_',
    variants: [640, 800],
    ratio: 0.75,
    credit: "Travelwyse",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/65941897@N04/6511371407",
  },
  /** Valley above Triund */
  gaurikundForest: {
    base: 'https://live.staticflickr.com/8406/8680904492_7f53b18f36_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Jace",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/41894175704@N01/8680904492",
  },
  /** Triund trek route */
  gaurikund: {
    base: 'https://live.staticflickr.com/8115/8680891900_f7743704fe_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Jace",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/41894175704@N01/8680891900",
  },
  /** Badrinath Temple */
  badrinathTemple: {
    base: 'https://live.staticflickr.com/3399/3654296033_18d66710c6_',
    variants: [640, 800, 1024],
    ratio: 1.51,
    credit: "sumeet basak",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/9037890@N05/3654296033",
  },
  /** The sage, outside the temple — in Badrinath. */
  badrinathEntrance: {
    base: 'https://live.staticflickr.com/6059/6257986287_f76af489cd_',
    variants: [640, 800, 1024],
    ratio: 1.71,
    credit: "Joshua Singh",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/8683246@N03/6257986287",
  },
  /** Ukhimath Temple */
  badrinathNight: {
    base: 'https://live.staticflickr.com/2097/3530074557_42ed58e6eb_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "varunshiv",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/72155957@N00/3530074557",
  },
  /** Mt Nanda Devi */
  badrinathWide: {
    base: 'https://live.staticflickr.com/2307/1572120008_2e4f3884f7_',
    variants: [640, 800, 1024],
    ratio: 1.47,
    credit: "anirbanbiswas_c8",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/25966716@N00/1572120008",
  },
  /** Himalayan Village View */
  manaVillage: {
    base: 'https://live.staticflickr.com/5083/5275302307_01d986ebc3_',
    variants: [640, 800, 1024],
    ratio: 1.44,
    credit: "paulhami",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/8306673@N02/5275302307",
  },
  /** Morning hymns! */
  manaVillage2: {
    base: 'https://live.staticflickr.com/4702/40240002702_200cb93e4d_',
    variants: [640, 800, 1024],
    ratio: 2.06,
    credit: "2 million+ views. Humbled and thanks!",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/61732052@N02/40240002702",
  },
  /** Sunrise in the Himalayas */
  auliMountains: {
    base: 'https://live.staticflickr.com/7042/6881920917_5ec09509c8_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "Ishan Manjrekar",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/33777810@N08/6881920917",
  },
  /** Where heaven starts */
  auliView: {
    base: 'https://live.staticflickr.com/2828/8797342566_412aabe50e_',
    variants: [640, 800, 1024],
    ratio: 1.51,
    credit: "Abhishek Shirali",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/61871520@N03/8797342566",
  },
  /** ... Tapovan near Joshimath */
  joshimath: {
    base: 'https://live.staticflickr.com/7271/7752121336_c00e9aeec6_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "Dinesh Valke",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/91314344@N00/7752121336",
  },
  /** Lakshman Jhula, Rishikesh, Uttarakhand, India */
  lakshmanJhula: {
    base: 'https://live.staticflickr.com/2528/3843128628_8b552961fe_',
    variants: [640, 800, 1024],
    ratio: 1.51,
    credit: "dms_303",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/33241056@N00/3843128628",
  },
  /** Lakshman jhula bridge */
  lakshmanJhula2: {
    base: 'https://live.staticflickr.com/137/320528383_c2582c6bfb_',
    variants: [640, 800],
    ratio: 1.56,
    credit: "pulguita",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/10144194@N00/320528383",
  },
  /** India - Rishikesh - 020 - Lakshman Jhula glowing in the sunet */
  lakshmanJhula3: {
    base: 'https://live.staticflickr.com/2253/2091417072_26beeed7d7_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "mckaysavage",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/56796376@N00/2091417072",
  },
  /** Ram Jhula, Rishikesh */
  ramJhula: {
    base: 'https://live.staticflickr.com/5467/8864107266_0c3ef98644_',
    variants: [640, 800, 1024],
    ratio: 1.51,
    credit: "Rishu83",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/9126603@N05/8864107266",
  },
  /** Ram Jhula, Rishikesh */
  ramJhulaEvening: {
    base: 'https://live.staticflickr.com/7360/8863993642_dbfa497619_',
    variants: [640, 800, 1024],
    ratio: 1.51,
    credit: "Rishu83",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/9126603@N05/8863993642",
  },
  /** India - Rishikesh - 018 - evening on the ghats */
  gangaAarti: {
    base: 'https://live.staticflickr.com/2277/2090623627_f37735e753_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "mckaysavage",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/56796376@N00/2090623627",
  },
  /** Glow of a thousand lamps */
  gangaAarti2: {
    base: 'https://live.staticflickr.com/6146/5953776685_f4a8f86fca_',
    variants: [640],
    ratio: 0.72,
    credit: "poonam.agarwal.s",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/28459666@N06/5953776685",
  },
  /** India - Rishikesh - 022 - sunset over the Ganga */
  gangaAarti3: {
    base: 'https://live.staticflickr.com/2098/2091421140_f57d2cfec3_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "mckaysavage",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/56796376@N00/2091421140",
  },
  /** Rafting in Rishikesh */
  rafting: {
    base: 'https://live.staticflickr.com/393/19201536714_85962204c4_',
    variants: [640, 800, 1024],
    ratio: 1.78,
    credit: "Anirudh - Singh",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/107557216@N07/19201536714",
  },
  /** Lull before the Storm */
  rafting2: {
    base: 'https://live.staticflickr.com/3209/2970510793_30a6eb9e25_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "J.S. Jaimohan",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/29780559@N05/2970510793",
  },
  /** Swimming and Rafting in Rishikesh | Ganga | Uttarakhand */
  raftingGanga: {
    base: 'https://live.staticflickr.com/595/32461520875_6156b85e25_',
    variants: [640, 800, 1024],
    ratio: 2.02,
    credit: "TravelByChoice.Com",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/146986502@N06/32461520875",
  },
  /** Rishikesh and the Ganges */
  rishikeshStreets: {
    base: 'https://live.staticflickr.com/14/18107821_75bb8c31f9_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Shawn Allen",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/59743169@N00/18107821",
  },
  /** Ganges River in Rishikesh */
  rishikeshView: {
    base: 'https://live.staticflickr.com/6104/6288074906_a36d14c394_',
    variants: [640, 800, 1024],
    ratio: 1.57,
    credit: "ruffin_ready",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/51668926@N00/6288074906",
  },
  /** India - Rishikesh - 003 - Sri Trayanbakshwar Temple and Lakshman Jhula */
  neelkanth: {
    base: 'https://live.staticflickr.com/2414/2091395624_3f782f4367_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "mckaysavage",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/56796376@N00/2091395624",
  },
  /** Upper Ganges River, Snow Leopard camp, near Rishikesh, India, 1995 */
  sivpuri: {
    base: 'https://live.staticflickr.com/2194/2245649502_671dd1aa15_',
    variants: [640, 800, 1024],
    ratio: 1.54,
    credit: "rahuldlucca",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/8213176@N03/2245649502",
  },
  /** Camino a Spiti valley, Himachal Pradesh */
  himalayaRoad: {
    base: 'https://live.staticflickr.com/8391/8512880323_c1f4aa4c42_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "Carlos Adampol",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/11767501@N07/8512880323",
  },
  /** Street Cricket in a Himalayan Village */
  himalayaHorses: {
    base: 'https://live.staticflickr.com/1621/26126562634_bee0712cdd_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "NavNirvana",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/61581905@N05/26126562634",
  },
  /** Kissed by Clouds */
  himalayaClouds: {
    base: 'https://live.staticflickr.com/3082/2541351728_69eb36d39f_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Balaji.B Photography",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/81073027@N00/2541351728",
  },
  /** Triund sunrise over the Dhauladhars */
  himalayaOrchards: {
    base: 'https://live.staticflickr.com/8392/8680900740_9f3cc6557f_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Jace",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/41894175704@N01/8680900740",
  },
  /** Camino a Spiti valley, Himachal Pradesh */
  spitiChandraTal: {
    base: 'https://live.staticflickr.com/8102/8513985670_cf68581da2_',
    variants: [640, 800, 1024],
    ratio: 1.77,
    credit: "Carlos Adampol",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/11767501@N07/8513985670",
  },
  /** Spiti Valley */
  spitiColdDesert: {
    base: 'https://live.staticflickr.com/6019/6325188042_90bfc005c3_',
    variants: [640, 800, 1024],
    ratio: 1.55,
    credit: "qcom",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/11253414@N00/6325188042",
  },
  /** Camino a Spiti valley, Himachal Pradesh */
  spitiRoad: {
    base: 'https://live.staticflickr.com/8098/8512879095_d01cce7d90_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "Carlos Adampol",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/11767501@N07/8512879095",
  },
  /** The Spiti River */
  spitiRiver: {
    base: 'https://live.staticflickr.com/4147/5028030301_cb58d47582_',
    variants: [640, 800, 1024],
    ratio: 1.61,
    credit: "Ajith (അജിത്ത്)",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/49211121@N00/5028030301",
  },
  /** Pare Chu Gorge */
  lahaulRoad: {
    base: 'https://live.staticflickr.com/5249/5294536608_f3e3c3f65a_',
    variants: [640, 800, 1024],
    ratio: 1.5,
    credit: "njyo",
    license: "CC BY 2.0",
    source: "https://www.flickr.com/photos/53908695@N00/5294536608",
  },
  /** Five towns in one view from Triund */
  baspaValley: {
    base: 'https://live.staticflickr.com/8385/8680903208_aa3997b2e8_',
    variants: [640, 800, 1024],
    ratio: 1.33,
    credit: "Jace",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/41894175704@N01/8680903208",
  },
  /** Spiti Valley (1) */
  lahaulRoadPortrait: {
    base: 'https://live.staticflickr.com/3132/2781518410_8a5dba9b49_',
    variants: [640, 800],
    ratio: 0.75,
    credit: "simon-and-india",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/27773459@N04/2781518410",
  },
  /** Kaza, Spiti Valley */
  lachungVillage: {
    base: 'https://live.staticflickr.com/3152/2723042359_daf8e4fb13_',
    variants: [640, 800, 1024],
    ratio: 1.34,
    credit: "simon-and-india",
    license: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/27773459@N04/2723042359",
  },
} as const satisfies Record<string, ImageAsset>

export type MediaKey = keyof typeof media
