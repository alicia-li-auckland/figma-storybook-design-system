import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
}) => {
  const styles = {
    padding: size === 'small' ? '6px 12px' : size === 'large' ? '10px 20px' : '8px 16px',
    fontSize: size === 'small' ? '12px' : size === 'large' ? '16px' : '14px',
    backgroundColor: variant === 'primary' ? '#0066cc' : '#f0f0f0',
    color: variant === 'primary' ? 'white' : '#333',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontFamily: 'sans-serif'
  };

  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
};
