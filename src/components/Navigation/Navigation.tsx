import React from 'react';

export type NavigationLink = {
  label: string;
  href: string;
};

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Array of links to display in the navigation.
   */
  links: NavigationLink[];

  /**
   * A label for the navigation landmark, used for accessibility.
   * If not provided, a generic label is used.
   */
  ariaLabel?: string;

  /**
   * Additional className for the <ul> element.
   */
  listClassName?: string;

  /**
   * Additional className for each <li> element.
   */
  itemClassName?: string;

  /**
   * Additional className for each <a> element.
   */
  linkClassName?: string;

  /**
   * A custom render function to override how links are displayed.
   * Useful if you want to use a router-based <Link> or add icons, etc.
   */
  renderLink?: (link: NavigationLink) => React.ReactNode;
}

function Navigation({
  links,
  ariaLabel = 'Site Navigation',
  listClassName,
  itemClassName,
  linkClassName,
  renderLink,
  ...props
}: NavigationProps) {
  return (
    <nav aria-label={ariaLabel} {...props}>
      <ul className={listClassName}>
        {links.map((link) => (
          <li key={link.href} className={itemClassName}>
            {renderLink ? (
              renderLink(link)
            ) : (
              <a href={link.href} className={linkClassName}>
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
