const initialState = {
  alerts: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_ALERT': {
      return {
        // add the new alert to the end of the queue
        alerts: [...state.alerts, action.payload]
      }
    }

    case 'DISMISS_ALERT': {
      return {
        // remove the first item of the queue
        alerts: state.alerts.slice(1)
      }
    }

    default: {
      return state
    }
  }
}

export default reducer
