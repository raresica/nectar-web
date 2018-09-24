export const nextAlertSelector = state => {
  const { alerts } = state.app

  if (alerts.length === 0) return null

  // return the first in the queue
  return alerts[0]
}
