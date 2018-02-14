import styled, { keyframes, css } from "styled-components";

/*
  Animations
*/

// const rotate360 = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

/*
 Home page
*/

export const Main = styled.div`text-align: center;`;

export const TMDBLogo = styled.img`
  float: right;
  height: 48px;
  margin-right: 16px;
  max-width: 100%; /*For responsiveness*/
`;

export const Footer = styled.footer`
  float: left;
  font-weight: bold;
  color: darkgray;
`;

/*
  Media Queries config in styled-components
*/

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {});


