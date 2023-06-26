import { ReactNode, CSSProperties } from 'react';
import './Button.css';


type Color = 'primary' | 'default' | 'danger';
type Size = 'sm' | 'base' | 'lg';

interface ButtonProps {
  children: ReactNode;
  color?: Color;
  size?: Size;
  backgroundColor?: CSSProperties['backgroundColor'];
  handleClick?: () => void;
}


function Button({ children, color, size, backgroundColor, handleClick }: ButtonProps) {
  return <button className={`${color} ${size}`} style={{ backgroundColor }} onClick={handleClick}>{children}</button>;
}

export default Button;