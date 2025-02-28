import "./styles/ActionButton.css";

import React, { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons/lib";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  iconLeft?: IconType;
  iconRight?: IconType;
  color?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  iconLeft: IconLeft,
  iconRight: IconRight,
  color,
  ...props
}) => {
  return (
    <button
      className="action"
      style={{
        borderColor: color,
        outlineColor: color,
        color: color,
      }}
      {...props}
    >
      {IconLeft && <IconLeft className="icon-left" style={{ color }} />}
      <span>{text}</span>
      {IconRight && <IconRight className="icon-right" style={{ color }} />}
    </button>
  );
};

export default ActionButton;
