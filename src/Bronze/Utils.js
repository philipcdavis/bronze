import chroma from 'chroma-js';

export const colors = {
  blue: "#187FF8",
  smoke: "#E4E8ED",
  smokeDark: "#7F8995",
  smokeShadow: "#D4DAE2",
  charcoal: "#383D46",
  green: "#00CE4B",
};

export const space = [
  0,
  5,
  10,
  15,
  30,
  60
];

export function lighten(color, percent) {
  return chroma(color).alpha(percent).css();
}

export function darken(color, percent) {
  return chroma(color).darken(percent).css();
}
