type Link = {
  key: string;
  name: string;
  url: string;
};

type Links = Link[];

export const links: Links = [
  {
    key: "1",
    name: "Why choose us",
    url: "/about",
  },
  {
    key: "2",
    name: "About Us",
    url: "/about",
  },
  {
    key: "3",
    name: "Services",
    url: "/services",
  },
  {
    key: "4",
    name: "Contact Us",
    url: "/contact",
  },
];
