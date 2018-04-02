// This file will be used to load any polyfills that are required by the site.
//   If you are adding one then make sure you do the following:
//
//   1) Add it here as to why you added it, and what browsers were effecting it
//   2) In the polyfill file, make sure you turn off any eslint checks that you need to (mostly just /* eslint no-extend-native: "off" */)

// Array.find is not yet available with Internet Explorer, so we add the polyfill here.
import './poly-find';