import React from 'react';

type Props = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

export const Button = ({ children, variant = 'primary' }: Props) => {
  const base = 'px-4 py-2 rounded text-white font-semibold';
  const styles = {
    primary: `${base} bg-blue-600 hover:bg-blue-700`,
    secondary: `${base} bg-gray-600 hover:bg-gray-700`,
  };

  return <button className={styles[variant]}>{children}</button>;
};
