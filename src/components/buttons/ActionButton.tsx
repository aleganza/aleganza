import './styles/ActionButton.css';

import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons/lib';

const ActionButton: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    iconLeft?: IconType; // possibly from Feather
    iconRight?: IconType; // possibly from Feather
  }
> = ({ text, iconLeft: IconLeft, iconRight: IconRight, ...props }) => {
  return (
    <button className="action" {...props}>
      {IconLeft && <IconLeft className="icon-left" />}
      <span>{text}</span>
      {IconRight && <IconRight className="icon-right" />}
    </button>
  );
};

export default ActionButton;
