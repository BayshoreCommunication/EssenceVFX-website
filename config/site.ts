export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  siteMetadata: {
    title: "",
    description: "",
  },
  siteLogo: { url: "" },
  mainNav: [
    { title: "HOME", slug: "/" },
    { title: "ABOUT", slug: "/about" },
    { title: "STATS", slug: "/services" },
    { title: "CONTACT US", slug: "/contact" },
  ],

  footer: {
    footer_logo: "",
    description: "",
    usefulLinks: [
      {
        title: "About",
        slug: "/about",
      },
      // {
      //   title: "Blog",
      //   slug: "/blog",
      // },

      // {
      //   title: "Team",
      //   slug: "/team",
      // },
    ],
    categories: [
      {
        index: 0,
        title: "Starwars",
        slug: "/starwars",
      },

      {
        index: 1,
        title: "Marvel",
        slug: "/marvel",
      },
      {
        index: 3,
        title: "Avatar",
        slug: "/avatar",
      },
      {
        index: 4,
        title: "TMNT",
        slug: "/tmnt",
      },
    ],
    getInTouch: [
      {
        title: "Contact Us",
        slug: "/contact",
      },
      // {
      //   title: "Customer Supports",
      //   slug: "/customer-supports",
      // },
      // {
      //   title: "FAQ",
      //   slug: "/faq",
      // },
    ],
  },
};
