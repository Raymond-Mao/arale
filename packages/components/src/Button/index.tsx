import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './index.scss';

interface ButtonProps {
  /**
   * btn text
   */
  text: string;
  /**
   * replace button with spinner
   */
  disabled?: boolean;
  onClick?: (params?: any) => void;
}

const Button = ({ text, disabled, onClick }: ButtonProps) => {
  return (
    <button className="btn" onClick={onClick}>
      {disabled ? <Spinner animation="border" /> : <span>{text}</span>}
    </button>
  );
};

export default Button;
