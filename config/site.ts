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
        title: "Starwars",
        slug: "/starwars",
      },
      {
        title: "Marvel",
        slug: "/marvel",
      },
      {
        title: "Avatar",
        slug: "/avatar",
      },
      {
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
      //   title: "Customer Support",
      //   slug: "/customer-support",
      // },
      // {
      //   title: "FAQ",
      //   slug: "/faq",
      // },
    ],
  },
};
