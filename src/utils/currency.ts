
// Exchange rate from USD to INR (this would ideally come from an API)
const USD_TO_INR_RATE = 83.5;

/**
 * Converts a USD price to INR and formats it
 * @param usdPrice Price in USD
 * @returns Formatted price in INR with ₹ symbol
 */
export const formatPriceInINR = (usdPrice: number): string => {
  const inrPrice = usdPrice * USD_TO_INR_RATE;
  return `₹${Math.round(inrPrice).toLocaleString('en-IN')}`;
};
