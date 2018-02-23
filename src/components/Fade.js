import React from 'react';
import Transition from 'react-transition-group/Transition';

const Fade = ({ children, duration, in: inProp }) => {

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 1 }
  };

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => {
        return React.cloneElement(children, {
          style: Object.assign({}, defaultStyle, transitionStyles[state])
        })
      }
      }
    </Transition>
  );
};

export default Fade;
