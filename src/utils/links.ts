type Link = {
  key: string;
  name: string;
  url: string;
};

type Links = Link[];

export const links: Links = [
  {
    key: "1",
    name: "About Us",
    url: "/about",
  },

  {
    key: "2",
    name: "Services",
    url: "/services",
  },
  {
    key: "3",
    name: "Why Choose Us",
    url: "/why-choose-us",
  },
  {
    key: "4",
    name: "Contact Us",
    url: "/contact",
  },
];
