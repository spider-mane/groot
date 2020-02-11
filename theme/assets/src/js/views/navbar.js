import { elements } from './base';

const navbar = elements.navbar;

const root = {
  height: navbar.root.offsetHeight,
  class: {
    display: 'vh-100 align-items-start bg-color-2-opacity-90',
    animate: 'animated fadeInDown fast',
    color: {
      default: 'bg-transparent',
      changed: 'bg-color-2-opacity-70',
    },
    position: {
      fixed: 'fixed-top',
      default: 'absolute-top',
    }
  }
};

const menu = {
  class: {
    display: 'align-items-end ml-auto display-2 animated fadeInLeft'
  },

  items: {
    class: {
      animate: 'animated fadeInLeft'
    }
  }
}

const collapse = {
  class: {
    display: 'd-flex'
  }
}

const toggler = {
  icons: {
    class: {
      open: 'fas fa-bars',
      close: 'fas fa-times'
    }
  }
}

const logo = {
  fontSize: {
    default: navbar.logo.style.fontSize,
    expanded: '1.5rem'
  }
}

export const height = root.height;

/**
 *
 */
export function toggleToggler(toggle) {

  const classList = navbar.togglerIcon.classList;
  const classes = toggler.icons.class

  if ('close' === toggle) {
    classList.remove(...classes.open.split(' '));
    classList.add(...classes.close.split(' '));
  } else if ('open' === toggle) {
    classList.remove(...classes.close.split(' '));
    classList.add(...classes.open.split(' '));
  }

  return this;
}

/**
 *
 */
export function showNavItems() {

  navbar.root.classList.add(...root.class.display.split(' '));
  navbar.collapse.classList.add(...collapse.class.display.split(' '));
  navbar.menu.classList.add(...menu.class.display.split(' '));

  navbar.logo.style.fontSize = logo.fontSize.expanded;
  navbar.root.style.overflowY = 'auto';

  return this;
}

/**
 *
 */
export function hideNavItems() {

  navbar.root.classList.remove(...root.class.display.split(' '));
  navbar.collapse.classList.remove(...collapse.class.display.split(' '));
  navbar.menu.classList.remove(...menu.class.display.split(' '));

  navbar.logo.style.fontSize = logo.fontSize.default;
  navbar.root.style.overflowY = 'initial';

  return this;
}

/**
 *
 */
export function animateNavItems(animate = true) {

  if (!animate) {

    Array.from(navbar.items).forEach(item => {

      item.style.animationDuration = 'initial';
      item.classlist.remove(...menu.items.class.animate.split(' '));
    });

    return this;
  }

  let i = 0.5;

  Array.from(navbar.items).reverse().forEach(item => {
    i = i * 1.2;

    item.style.animationDuration = `${i}s`;
    item.classList.add(...menu.items.class.animate.split(' '));
  });

  return this;
}

/**
 *
 */
export function toggleColor() {

  navbar.root.classList.toggle(root.class.color.default);
  navbar.root.classList.toggle(root.class.color.changed);

  return this;
}

/**
 *
 */
export function changeColor() {

  navbar.root.classList.remove(root.class.color.default);
  navbar.root.classList.add(root.class.color.changed);

  return this;
}

/**
 *
 */
export function resetColor() {

  navbar.root.classList.add(root.class.color.default);
  navbar.root.classList.remove(root.class.color.changed);

  return this;
}

/**
 *
 */
export function fixPosition() {

  const position = root.class.position;

  navbar.root.classList.add(...root.class.animate.split(' '));
  navbar.root.classList.replace(position.default, position.fixed);

  return this;
}

/**
 *
 */
export function releasePosition() {

  const position = root.class.position;

  navbar.root.classList.remove(...root.class.animate.split(' '));
  navbar.root.classList.replace(position.fixed, position.default);

  return this;
}
