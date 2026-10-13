'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Dynamic Button Component
 * Standardized across the entire project with rolling text and dual animated arrow circle badge.
 *
 * @param {string} [href] - If provided, renders as Next.js Link, otherwise as button
 * @param {string} [type='button'] - Button type (e.g. 'button' | 'submit')
 * @param {'primary' | 'dark' | 'secondary' | 'outline'} [variant='primary'] - Visual style
 * @param {'sm' | 'md' | 'lg'} [size='md'] - Button size (sm for navbar, md standard, lg hero/CTA)
 * @param {boolean} [showArrow=true] - Display the signature animated rolling arrow badge
 * @param {React.ReactNode} [icon] - Custom icon to display instead of the default arrow
 * @param {boolean} [fullWidth=false] - Stretches button across parent container
 * @param {boolean} [disabled=false] - Disables button interactions
 * @param {boolean} [loading=false] - Shows loading spinner
 * @param {string} [className=''] - Additional custom CSS classes
 * @param {string} [text] - Optional explicit text string (takes precedence or can use children)
 */
export default function Button({
  children,
  text,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  showArrow = true,
  icon,
  fullWidth = false,
  disabled = false,
  loading = false,
  className = '',
  target,
  rel,
  ...props
}) {
  const labelText = text || (typeof children === 'string' ? children : null);

  const buttonClasses = [
    'dynamic-btn',
    `dynamic-btn--${variant}`,
    `dynamic-btn--${size}`,
    fullWidth ? 'dynamic-btn--full' : '',
    disabled || loading ? 'dynamic-btn--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const arrowBadge = (
    <span className="dynamic-btn-circle" aria-hidden="true">
      <span className="dynamic-btn-arrow inner">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6.75 13.5L11.25 9L6.75 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="dynamic-btn-arrow outer">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6.75 13.5L11.25 9L6.75 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  );

  const renderContent = () => (
    <>
      {loading && <span className="dynamic-btn-loader" aria-hidden="true" />}

      {labelText ? (
        <span className="dynamic-btn-text-container">
          <span className="dynamic-btn-text">{labelText}</span>
          <span className="dynamic-btn-text" aria-hidden="true">
            {labelText}
          </span>
        </span>
      ) : (
        <span className="dynamic-btn-custom-content">{children}</span>
      )}

      {icon ? (
        <span className="dynamic-btn-icon-custom">{icon}</span>
      ) : showArrow ? (
        arrowBadge
      ) : null}
    </>
  );

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        target={target}
        rel={rel}
        onClick={onClick}
        {...props}
      >
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {renderContent()}
    </button>
  );
}
