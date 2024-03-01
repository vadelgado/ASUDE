import React from 'react';
import PropTypes from 'prop-types';
import styles from "@/components/styles/Button.module.css";

const Button = ({ children, onClick, url, target, className, ...rest }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={url}
      target={`${target ?? '_blank'}`}
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`
        lg:text-2xl
        md:px-5
        md:text-xl
        text-xs
        w-fit
        font-medium
        no-underline
        px-3
        py-3
        border
        border-solid
        border-white
        rounded-full
        uppercase
        ${styles.button}
        ${className ?? ''}
      `}
      {...rest}
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
