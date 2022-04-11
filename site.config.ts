export const config = {
  siteMeta: {
    title: "DJT Blog Hub",
    teamName: "double jump.tokyo",
    description: "",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    // {
    //   title: "About",
    //   href: "/about",
    // },
    {
      title: "Company",
      href: "https://www.doublejump.tokyo/",
    },
    // {
    //   title: "GitHub",
    //   href: "https://github.com/catnose99/team-blog-hub",
    // },
  ],
};
