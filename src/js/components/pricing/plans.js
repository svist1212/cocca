import { CalculationOperation } from 'sass';

export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterpricePrice = document.querySelector('[data-price="enterprice"]');

  const starterPricing = 100;
  const popularPricing = 1400;
  const enterpricePricing = 2100;

  const priceList = {
    starter: {
      default: '$' + starterPricing * 1.2,
      witchSale: '$' + starterPricing,
    },
    popular: {
      default: '$' + popularPricing * 1.2,
      witchSale: '$' + popularPricing,
    },
    enterprice: {
      default: '$' + enterpricePricing * 1.2,
      witchSale: '$' + enterpricePricing,
    },
  };

  const setPriceWitchSale = () => {
    starterPrice.textContent = priceList.starter.witchSale;
    popularPrice.textContent = priceList.popular.witchSale;
    enterpricePrice.textContent = priceList.enterprice.witchSale;
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterpricePrice.textContent = priceList.enterprice.default;
  };

  switcher.checked = true;
  setPriceWitchSale();

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPriceWitchSale();
    } else {
      setDefaultPrices();
    }
  });
};
