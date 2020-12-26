module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkMode: {
          background: {
            top: "#1f212e",
            rest: "#1e202a",
          },
          card: {
            body: "#252a41",
            hover: "#333a56",
          },
          lightText: "#8b97c6",
          primaryText: "#ffffff",
        },

        lightMode: {
          background: {
            top: "#f5f7ff",
            rest: "#ffffff",
          },
          card: {
            body: "#f0f2fa",
            hover: "#e1e3f0",
          },
          lightText: "#63687e",
          primaryText: "#1e202a",
        },

        socialNetworks: {
          facebook: "#198ff5",
          twitter: "#1ca0f2",

          instagram: {
            primaryGradient: {
              first: "#fdc468",
              second: "#df4996",
            },
          },
          youtube: "#c4032a",
        },

        uiColors: {
          positiveRating: "#1db489",
          negativeRating: "#dc414c",
        },

        toggle: {
          defaultBg: "#aeb3cb",
          hover: {
            first: "#378fe6",
            second: "	#3eda82",
          },
        },
      },
      fontFamily: {
        DEFAULT: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        followersSpacing: "0.4rem",
      },
      divideWidth: {
        DEFAULT: "3px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
