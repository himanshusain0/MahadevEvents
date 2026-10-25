export const BIZ = {
  name: "Mahadev Events",
  phones: ["8218127638", "7055628456"],
  email: "khataulimahadevevents@gmail.com",
  instagram: "https://www.instagram.com/mahadev_evants_khatauli",
  handle: "@mahadev_evants_khatauli",
  address: "Aad Saini Nagar, Khatauli, Muzaffarnagar",
  whatsapp: "918218127638",
};

export type Photo = {
  id: string;
  src: string;
  w: number;
  h: number;
  title: string;
  kind: string;
  category: "stages" | "entrances" | "haldi" | "facades" | "birthdays";
  categoryLabel: string;
  alt: string;
  story: string;
  location: string;
  palette: string;
};

const P = (
  id: string,
  f: string,
  w: number,
  h: number,
  title: string,
  kind: string,
  category: Photo["category"],
  categoryLabel: string,
  alt: string,
  story: string,
  location: string,
  palette: string
): Photo => ({
  id,
  src: `/photos/${f}.jpg`,
  w,
  h,
  title,
  kind,
  category,
  categoryLabel,
  alt,
  story,
  location,
  palette,
});

export const PHOTOS = {
  stage: P(
    "stage",
    "stage-pillars",
    915,
    1285,
    "Petal Pillar Stage",
    "Stage",
    "stages",
    "Wedding & Stages",
    "Stage with gold pillars, white petal canopies and rose garlands",
    "Sculpted gilded pillars crowned with cascading white petals, deep red rose garlands, and warm focal chandeliers.",
    "Khatauli",
    "Gold, Ivory & Crimson"
  ),
  green: P(
    "green",
    "green-arches",
    958,
    1322,
    "The Evergreen Mandap",
    "Stage",
    "stages",
    "Wedding & Stages",
    "Lit leaf arches with chandeliers leading to a peacock-themed stage",
    "Lush emerald botanical arches framed with crystal chandeliers, leading toward a royal peacock-themed mandap.",
    "Muzaffarnagar",
    "Forest Green, Gold & Crystal"
  ),
  arch: P(
    "arch",
    "arch-walkway",
    899,
    1599,
    "The Arch Walk",
    "Entrance",
    "entrances",
    "Floral Entrances",
    "Guests walking through glowing white floral arches at night",
    "A glowing 60-foot canopy walkway of illuminated white floral arches and warm starlight lighting.",
    "Khatauli",
    "White, Warm Gold & Amber"
  ),
  bougain: P(
    "bougain",
    "bougainvillea-entrance",
    958,
    1430,
    "Bougainvillea Gate",
    "Entrance",
    "entrances",
    "Floral Entrances",
    "Pink bougainvillea entrance with white drapes and a peacock",
    "Rich pink bougainvillea floral arches cascading over pristine ivory drapes with handcrafted peacock motifs.",
    "Khatauli",
    "Blush Pink, Violet & White"
  ),
  haldi: P(
    "haldi",
    "haldi-portraits",
    897,
    1402,
    "Haldi, in colour",
    "Haldi",
    "haldi",
    "Haldi & Ceremonies",
    "Three illustrated portrait panels crowned with sunflowers beside a golden urli",
    "Illustrated couple portrait backdrops crowned with radiant sunflowers, marigolds, and antique brass urlis.",
    "Khatauli",
    "Sunflower Yellow, Teal & Brass"
  ),
  backdrop: P(
    "backdrop",
    "haldi-backdrop",
    967,
    1034,
    "Haldi Arch Backdrop",
    "Haldi",
    "haldi",
    "Haldi & Ceremonies",
    "Teal and marigold arched haldi backdrop with sunflowers and a golden urli",
    "Arched wooden frames dressed in saturated marigold garlands, teal upholstery, and floating petal urlis.",
    "Muzaffarnagar",
    "Marigold, Teal & Amber"
  ),
  night: P(
    "night",
    "night-facade",
    946,
    1421,
    "Night of Colour",
    "Home décor",
    "facades",
    "Home Facades",
    "Illuminated home facade with magenta, gold and violet drapes",
    "Full three-storey residence exterior enveloped in royal magenta and gold satin swags and warm fairy washes.",
    "Khatauli",
    "Magenta, Gold & Deep Amber"
  ),
  purple: P(
    "purple",
    "purple-facade",
    886,
    1600,
    "Ribbons of Violet",
    "Home décor",
    "facades",
    "Home Facades",
    "Building facade with violet and cream drapes and hanging flowers",
    "Satin ribbons in deep violet and ivory draped across architectural terraces with hanging floral spheres.",
    "Khatauli",
    "Violet, Cream & Silver"
  ),
  house: P(
    "house",
    "purple-house",
    958,
    1460,
    "Lavender Celebration",
    "Home décor",
    "facades",
    "Home Facades",
    "Three-storey home dressed in purple and white drapes and flower spheres",
    "Grand multi-tier residential elevation styled for a wedding week with alternating floral drapes.",
    "Khatauli",
    "Lavender, White & Rose"
  ),
  blue: P(
    "blue",
    "balloon-blue",
    894,
    1084,
    "First Birthday Ring",
    "Birthday",
    "birthdays",
    "Birthdays & Milestones",
    "Blue and white balloon ring with a gold number one and neon sign",
    "Sculptural organic balloon ring in cerulean, powder blue and pearl white with custom acrylic typography.",
    "Khatauli",
    "Sky Blue, Pure White & Gold"
  ),
  gold: P(
    "gold",
    "balloon-gold",
    961,
    1361,
    "Gold & Black Ring",
    "Birthday",
    "birthdays",
    "Birthdays & Milestones",
    "Balloon ring in gold, black, red and pink with a neon sign",
    "Sleek midnight and chrome gold balloon arch styled with bespoke neon script and shimmer panels.",
    "Khatauli",
    "Chrome Gold, Onyx & Crimson"
  ),
};

export const ALL_PHOTOS: Photo[] = [
  PHOTOS.stage,
  PHOTOS.backdrop,
  PHOTOS.purple,
  PHOTOS.blue,
  PHOTOS.green,
  PHOTOS.gold,
  PHOTOS.house,
  PHOTOS.haldi,
  PHOTOS.bougain,
  PHOTOS.arch,
  PHOTOS.night,
];

export const CATEGORIES = [
  { id: "all", label: "All Celebrations" },
  { id: "stages", label: "Wedding & Stages" },
  { id: "entrances", label: "Floral Entrances" },
  { id: "haldi", label: "Haldi & Ceremonies" },
  { id: "facades", label: "Home Facades" },
  { id: "birthdays", label: "Birthdays & Milestones" },
] as const;

export const SERVICES = [
  {
    n: "01",
    t: "Wedding & Stage Design",
    d: "Mandaps, stages, pillars and floral canopies shaped around your families, your rituals and your venue.",
    img: PHOTOS.stage,
  },
  {
    n: "02",
    t: "Entrances & Walkways",
    d: "The first moment your guests feel the celebration: arches, florals, lights and carpets that set the mood.",
    img: PHOTOS.arch,
  },
  {
    n: "03",
    t: "Haldi & Ceremony Styling",
    d: "Sunny, handcrafted backdrops with marigold, sunflowers and playful details for pre-wedding rituals.",
    img: PHOTOS.backdrop,
  },
  {
    n: "04",
    t: "Home & Facade Decoration",
    d: "Drapes, flower spheres and lights that turn the front of your home into the heart of the festivities.",
    img: PHOTOS.night,
  },
  {
    n: "05",
    t: "Birthday & Balloon Décor",
    d: "Custom balloon rings, neon signs and tidy little set-ups for first birthdays and every one after.",
    img: PHOTOS.gold,
  },
];
