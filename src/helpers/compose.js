export const compose =
  (...funcs) =>
  (Component) => {
    return funcs.reduceRight((wrapped, func) => {
      return func(wrapped)
    }, Component)
  }
