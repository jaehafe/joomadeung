export const isProduction = process.env.NODE_ENV === 'production'
export const BASE_URL = isProduction
  ? 'https://joomadeung.com'
  : 'http://localhost:3000'
