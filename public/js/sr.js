const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "50px",
  duration: 1000,
  desktop: true,
  mobile: true
};

ScrollReveal().reveal(".section-heading", {
  ...defaultProps,
  delay: 600,
  origin: "left"
});

ScrollReveal().reveal(".separator", {
  ...defaultProps,
  delay: 600,
  origin: "bottom"
});

ScrollReveal().reveal("#read-more-button", {
  ...defaultProps,
  delay: 600,
  origin: "bottom"
});

ScrollReveal().reveal(".text-reveal", {
  ...defaultProps,
  delay: 600,
  origin: "right"
});

ScrollReveal().reveal("#instagram", {
  ...defaultProps,
  delay: 1000,
  origin: "left"
});

ScrollReveal().reveal("#footer-left", {
  ...defaultProps,
  delay: 1100,
  origin: "left"
});

ScrollReveal().reveal("#footer-right", {
  ...defaultProps,
  delay: 1100,
  origin: "right"
});

ScrollReveal().reveal("#footer-bottom", {
  ...defaultProps,
  delay: 1300,
  origin: "bottom"
});
