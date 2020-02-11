import * as navbar from '../views/navbar';
import { bottom as headerBottom } from '../views/header';

const scrollStart = window.scrollY;
const startChange = headerBottom - navbar.height / 2;

/**
 *
 */
const state = (thing) => {
  return window.state.navbar[thing];
}

/**
 *
 */
function toggleColorState(thing, state) {
  state(color)[thing] = state

  return this;
}

/**
 *
 */
function toggleFixedState(thing, state) {
  state(fixed)[thing] = state
}

/**
 *
 */
export function toggleColor(toggle) {

  navbar.toggleColor();
  toggleColorState('changed', toggle);

  return this;
}

/**
 *
 */
export function transformNavbar(e) {

  const scrollStart = window.scrollY;
  const startChange = header.bottom - navbar.height / 2;

  // transfrom if past threshold
  if (scrollStart > startChange) {
    navbar.fixPosition()
    state.navbar.fixed.set = true;
    state.navbar.fixed.threshold = true;

    if (!state.navbar.color.changed) {
      toggleNavbarColor(true)
      state.navbar.color.threshold = true
    }
  }

  // revert if above threshold
  if (scrollStart < startChange) {
    navbar.releasePosition()
    state.navbar.fixed.set = true;
    state.navbar.fixed.threshold = true;

    if (state.navbar.color.changed) {
      toggleNavbarColor(false)
      state.navbar.color.threshold = false
    }

  }

  return this;
}
