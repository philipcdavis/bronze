import React from 'react';
import glamorous from 'glamorous';
import { colors, darken, lighten } from './Utils'

function sizes(size) {
  switch (size) {
    case "sm":
      return {
        padding: "2px 6px",
        fontSize: "12px",
        borderRadius: "2px"
      }
    case "lg":
      return {
        padding: "13px 55px",
        fontSize: "16px",
        borderRadius: "3px"
      }
    default:
      return {
        padding: "5px 12px",
        fontSize: "14px",
        borderRadius: "3px"
      }
  }
}

const Btn = glamorous.button( props => {
  const color = colors[props.color] || colors.blue;
  const size = sizes(props.size)

  return {
    display: "inline-block",
    border: "none",
    outline: "none",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.15s all ease",
    // Sizes
    padding: size.padding,
    fontSize: size.fontSize,
    borderRadius: size.borderRadius,
    // Colors
    backgroundColor: color,
    color: props.color === "white" ? colors.charcoal : "white",
    boxShadow: `0 1px 1px -2px ${lighten(color, 0.8)}, 0 2px 5px 0 ${lighten(color, 0.4)}`,
    border: `1px solid ${darken(color, 0.4)}`,
    ':hover': {
      backgroundColor: darken(color, 0.4),
    }
  }
})

export {
  Btn
};
