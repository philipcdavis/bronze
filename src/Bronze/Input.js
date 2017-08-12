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

const Inpt = glamorous.button( props => (

)

export {
  Inpt
};
