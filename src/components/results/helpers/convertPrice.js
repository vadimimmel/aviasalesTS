// export function convertPrice(price) {
//   return String(price).replace(
//     /(\d{1,3})(?=(?:\d{3})+$)/g,
//     (match) => `${match} `
//   )
// }
export function convertPrice(price) {
  return String(price).replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ')
}
