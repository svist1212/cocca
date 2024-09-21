import '../assets/scss/about.scss';

//components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';

import { useAboutSliderOne } from './components/about/sliderAbout.js';
import { useAboutSliderTwo } from './components/about/sliderAbout.js';


useTheme();
useBurger();
useAboutSliderOne();
useAboutSliderTwo();
