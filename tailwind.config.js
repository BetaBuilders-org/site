// Purged Tailwind 2.2.19 build for the static site. tailwind.css is committed (no CI build step).
// Rebuild after changing classes in the HTML/JS:
//   npx tailwindcss@2.2.19 -c tailwind.config.js -o tailwind.css --minify
module.exports = {
  purge: {
    enabled: true,
    content: ["./index.html", "./startup.html", "./script.js"],
    // Toggled from JS (mobile menu).
    safelist: ["hidden"],
  },
  theme: { extend: {} },
  variants: { extend: {} },
  plugins: [],
};
