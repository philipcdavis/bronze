import chroma from 'chroma-js';

export const colors = {
  blue: "#187FF8",
  smoke: "#E4E8ED",
  smokeDark: "#7F8995",
  smokeShadow: "#D4DAE2",
  charcoal: "#383D46",
  green: "#00CE4B",
  red: "#DE233D",
  white: "#FFFFFF"
};

export const space = [
  0,
  5,
  15,
  30,
  60,
  90
];

export const m = {
  l0: { marginLeft: space[0] },
  l1: { marginLeft: space[1] },
  l2: { marginLeft: space[2] },
  l3: { marginLeft: space[3] },
  l4: { marginLeft: space[4] },
  l5: { marginLeft: space[5] },
  r0: { marginRight: space[0] },
  r1: { marginRight: space[1] },
  r2: { marginRight: space[2] },
  r3: { marginRight: space[3] },
  r4: { marginRight: space[4] },
  r5: { marginRight: space[5] },
  t0: { marginTop: space[0] },
  t1: { marginTop: space[1] },
  t2: { marginTop: space[2] },
  t3: { marginTop: space[3] },
  t4: { marginTop: space[4] },
  t5: { marginTop: space[5] },
  b0: { marginBottom: space[0] },
  b1: { marginBottom: space[1] },
  b2: { marginBottom: space[2] },
  b3: { marginBottom: space[3] },
  b4: { marginBottom: space[4] },
  b5: { marginBottom: space[5] }
}

export function lighten(color, percent) {
  return chroma(color).alpha(percent).css();
}

export function darken(color, percent) {
  return chroma(color).darken(percent).css();
}
