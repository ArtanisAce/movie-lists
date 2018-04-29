import styled, { keyframes, css } from "styled-components";
import ReactSVG from "react-svg";

/*
  Animations
*/

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

// export const fadeOut = keyframes`
//   from {
//     opacity: 1;
//   }

//   to {
//     opacity: 0;
//   }
// `;

/* Common components styles */

export const NoPosterFilm = styled(ReactSVG)`
  width: ${props => props.width};
`;

export const ErrorMessage = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 32px;
`;

export const LoadingIndicator = styled(ReactSVG)`
  height: 64px;
  margin-top: 48px;
  animation: ${rotate360} 2s;
  animation-iteration-count: infinite;
`;

export const SubmitButton = styled.button`
  padding: 0.6em 0.8em;
  background-color: ${props =>
    props.disabled ? props.theme.disabledButton : props.theme.mainColor};
  color: white;
  border: none;
  transition: background ease-in-out 0.5s;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    background: ${props =>
      props.disabled
        ? props.theme.disabledButton
        : props.theme.hoverButtonColor};
  }
`;

/*
  Media Queries config in styled-components
*/

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
