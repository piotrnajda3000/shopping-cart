const theme = {
  grayscale: [
    "0%",
    "7%",
    "16%",
    "26%",
    "38%",
    "50%",
    "63%",
    "74%",
    "85%",
    "94%",
    "100%",
  ],
};

const invertTheme = () => ({
  grayscale: theme.grayscale.map(
    (i, idx) => theme.grayscale[theme.grayscale.length - 1 - idx]
  ),
});

export { theme, invertTheme };
