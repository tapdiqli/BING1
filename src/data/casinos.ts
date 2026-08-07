export type Casino = {
  id: string;
  name: string;
  logo: string;
  offer: string;
  rating: number;
  href: string;
  featured?: boolean;
};

export const casinos: Casino[] = [
  {
    id: "coral",
    name: "Coral",
    logo: "/casino-logos/coral.png",
    offer: "Stake £12 on Slots — Unlock 100 Free Spins",
    rating: 9.9,
    href: "https://www.coral.co.uk/",
    featured: true,
  },
  {
    id: "ladbrokes",
    name: "Ladbrokes",
    logo: "/casino-logos/ladbrokes.png",
    offer: "Play £10 on Slots — Receive a £30 Welcome Boost",
    rating: 9.8,
    href: "https://www.ladbrokes.com/",
  },
  {
    id: "partycasino",
    name: "Party Casino",
    logo: "/casino-logos/partycasino.png",
    offer: "200 Cash Spins — Winnings Paid Without Playthrough",
    rating: 9.7,
    href: "https://www.partycasino.com/",
  },
  {
    id: "bwin",
    name: "bwin",
    logo: "/casino-logos/bwin.png",
    offer: "100% Match up to £200 + 50 Free Spins",
    rating: 9.6,
    href: "https://www.bwin.com/",
  },
];
