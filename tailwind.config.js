// Purged Tailwind 2.2.19 build for the static site. tailwind.css is committed (no CI build step).
// Rebuild after changing classes in the HTML/JS:
//   npx tailwindcss@2.2.19 -c tailwind.config.js -o tailwind.css --minify
module.exports = {
  purge: {
    enabled: true,
    content: ["./index.html", "./startup.html", "./script.js"],
    // Ignore classes that only appear inside HTML comments (disabled sections).
    transform: { html: (content) => content.replace(/<!--[\s\S]*?-->/g, "") },
    // Toggled from JS (mobile menu).
    safelist: ["hidden"],
  },
  theme: {
    extend: {
      // BetaBuilders Workshop palette (betabuilders-brand/tokens). Accent is a fill only.
      colors: {
        ink: "#17160F",
        paper: "#EFEDE7",
        accent: "#FF8A00",
        ticket: "#FBFAF7",
        graphite: "#5E5A50",
        rule: "#CFCAC0",
      },
    },
  },
  variants: { extend: {} },
  plugins: [],
};
