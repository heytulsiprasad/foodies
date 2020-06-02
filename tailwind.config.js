module.exports = {
    purge: [],
    theme: {
        extend: {},
        screens: {
            xl: { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "639px" },
            // => @media (max-width: 639px) { ... }
        },
        colors: {
            background: {
                primary: "var(--bg-background-primary)",
                secondary: "var(--bg-background-secondary)",
                tertiary: "var(--bg-background-tertiary)",
            },

            copy: {
                primary: "var(--text-copy-primary)",
                secondary: "var(--text-copy-secondary)",
                white: "var(--text-copy-white)",
            },
        },
    },
    variants: {},
    plugins: [],
};
