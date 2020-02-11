import { elements } from './base';

const header = elements.header;

export const height = header.root.offsetHeight;
export const top = header.root.offsetTop;
export const bottom = top + height;
