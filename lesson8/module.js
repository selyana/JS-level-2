let calc = (a, b) => {
  return a + b;
}

import submodule from './submodule.js';
const subcalc = submodule.subcalc;

calc = (a, b) => {
  return subcalc(a) + subcalc(b);
}

export default {
  calc: calc
};