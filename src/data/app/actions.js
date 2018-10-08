export const alertUser = alert => {
  return {
    type: 'NEW_ALERT',
    payload: alert
  }
}

export const dismissAlert = () => {
  return {
    type: 'DISMISS_ALERT'
  }
}
