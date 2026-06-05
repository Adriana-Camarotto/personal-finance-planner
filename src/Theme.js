const theme = {
    global: {
        container: "xl",
    },
    width: {
        maxwidth: "1920px",
    },
    palette: {
        header: {
            main: "#FFF",
            contrastText: "#222",
        },
        footer: {
            main: "#efefef",
            contrastText: "#222",
        },
        background: {
            main: "#FFF",
            contrastText: "#222222",
            paper: "#F2F2ED",
        },
        primary: {
            main: "#13234e",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#13234e",
            contrastText: "#FFFFFF",
        },
        // tertiary: {
        //     main: " #2dfb04 ",
        //     contrastText: "#FFFFFF",
        // },
        button: {
            main: "#FFF",
            contrastText: "#222",
        },

        error: {
            main: "#f44336",
            contrastText: "#FFFFFF",
        },
        warning: {
            main: "#ff9800",
            contrastText: "#FFFFFF",
        },
        info: {
            main: "#2196f3",
            contrastText: "#FFFFFF",
        },
        success: {
            main: "#08CE34",
            contrastText: "#FFFFFF",
        },
    },
    typography: {
        mainColor: "#000",
        fontFamily: "Raleway, sans-serif",
        h1: {
            fontFamily: "Raleway, sans-serif",
            fontSize: "2.375rem", //38px
            fontWeight: 400,
        },
        h2: {
            fontFamily: "Raleway, sans-serif",
            fontSize: "2.375rem", //38px
            lineHeight: "5rem",
            fontWeight: 400,
        },
        h3: {
            fontFamily: "Raleway, sans-serif",
            fontSize: "1.875rem", //30px
            fontWeight: 400,
        },
        h4: {
            fontFamily: "Raleway, sans-serif",
            fontSize: "1.75rem", //28px
            fontWeight: 400,
        },
        //Call to action links
        h5: {
            fontFamily: "Raleway, sans-serif",
            fontSize: "1.5rem", //24px
            fontWeight: 400,
        },
        h6: {
            fontFamily: "Raleway, sans-serif",
            fontSize: "1.125rem", //18px
        },
        p: {
            fontSize: "1.125rem", //18px
            fontWeight: 400,
        },
        body1: {
            fontSize: "1rem", //16px
            fontWeight: 300,
        },
        body2: {
            fontSize: "0.875", //14px
            fontWeight: 300,
        }
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#FFF",
                    color: "#222",
                },
            },
        },
        // Name of the component
        MuiBackdrop: {
            styleOverrides: {
                // Name of the slot
                root: {
                    backdropFilter: "blur(5px)",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    borderRadius: 5,
                    textTransform: "none",
                    fontWeight: "bold",
                    padding: "1em 2em",
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    margin: "2em  auto 4em auto",
                },
            },
        },
    },
    // add custom breakpoints
    breakpoints: {
        values: {
            xs: 0,
            sm: 641,
            md: 852,
            lg: 1900,
            xl: 1900
        },
    },
};

export default theme;
