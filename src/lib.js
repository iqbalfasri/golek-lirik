/**
 * Mengatasi cors pada saat request data
 */
const handleCorsRequest = url => {
  return `https://cors-anywhere.herokuapp.com/${url}`;
};

export { handleCorsRequest };