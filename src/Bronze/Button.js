import React from 'react';
import glamorous from 'glamorous';
import { colors, darken, lighten } from './utils'

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

const Btn = glamorous.button( props => ({
    display: "inline-block",
    border: "none",
    outline: "none",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.15s all ease",
    padding: sizes(props.size).padding,
    fontSize: sizes(props.size).fontSize,
    borderRadius: sizes(props.size).borderRadius
  })
)

const BtnBlue = glamorous(Btn)(props => ({
  backgroundColor: colors.blue,
  color: "white",
  boxShadow: `0 1px 1px -2px ${lighten(colors.blue, 0.8)}, 0 2px 5px 0 ${lighten(colors.blue, 0.4)}`,
  border: `1px solid ${darken(colors.blue, 0.4)}`,

  [':hover'] {
    backgroundColor: darken(colors.blue, 0.4),
  }
}))

export default {
  Btn,
  BtnBlue
};
