// src/components/PrimaryButton/PrimaryButton.js
import { useRef } from 'react';
import './PrimaryButton.css';
import { animateButton } from './PrimaryButtonAnimations';

function PrimaryButton() {
  const buttonRef = useRef();

  const handleClick = () => {
    animateButton(buttonRef.current);
  };

  return (
    <button
      ref={buttonRef}
      className="PrimaryButton"
      onClick={handleClick}
    >
      Primary Button
    </button>
  );
}

export default PrimaryButton;
