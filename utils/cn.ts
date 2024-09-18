import classNames, { type ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';

/**
 * A simple javascript utility for joining classNames together
 */
const cn = (...classes: ArgumentArray) => twMerge(classNames(...classes));

export default cn;
