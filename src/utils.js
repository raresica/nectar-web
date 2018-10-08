export function log(...params) {
  if (process.env.NODE_ENV !== 'production') {
    // tslint:disable-next-line
    console.log(...params)
  }
}

export function logErr(...params) {
  if (process.env.NODE_ENV !== 'production') {
    // tslint:disable-next-line
    console.error(...params)
  }
}
