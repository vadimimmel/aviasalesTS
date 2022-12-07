import { nanoid } from 'nanoid'

import {
  IFilter,
  Sorting,
  SearchID,
  ITicket,
  Loading,
  NumberOfTicketsDisplayed,
  TicketsError,
} from './types'
import { IAviasalesService } from 'services/types'

//action types
export const FETCH_SEARCH_ID = 'FETCH_SEARCH_ID'
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS'
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE'
export const SET_LAYOVER_FILTER = 'SET_LAYOVER_FILTER'
export const SET_LOADING = 'SET_LOADING'
export const SET_TICKET_SORTING = 'SET_TICKET_SORTING'
export const ADD_TICKETS_DISPLAYED = 'ADD_TICKETS_DISPLAYED'

// another constants
export const sorting = {
  CHEEPEST: 'cheepest',
  FASTEST: 'fastest',
  OPTIMAL: 'optimal',
}

//actionCreators
export const setLayoverFilter = (filterID: IFilter['id']) => {
  return {
    type: SET_LAYOVER_FILTER,
    payload: filterID,
  }
}

export const sortTickets = (buttonID: Sorting) => {
  return {
    type: SET_TICKET_SORTING,
    payload: buttonID,
  }
}

export const setSearchID = (searchID: SearchID) => {
  return {
    type: FETCH_SEARCH_ID,
    payload: searchID,
  }
}

export const setTickets = (tickets: Array<ITicket>) => {
  const ticketsWithID = tickets.map((ticket) => {
    return { ...ticket, id: nanoid() }
  })
  return {
    type: FETCH_TICKETS_SUCCESS,
    payload: ticketsWithID,
  }
}

export const setLoading = (isLoading: Loading) => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  }
}

export const setNumberOfTicketsDisplayed = (
  numberOfTickets: NumberOfTicketsDisplayed
) => {
  return {
    type: ADD_TICKETS_DISPLAYED,
    payload: numberOfTickets,
  }
}

export const ticketsError = (error: TicketsError) => {
  return {
    type: FETCH_TICKETS_FAILURE,
    payload: error,
  }
}

// ВАРИАНТ БЕЗ ACTION CREATOR

// export const fetchSearchID = (dispatch, aviasalesService) => () => {
//   aviasalesService
//     .getSearchID()
//     .then((data) => dispatch(setSearchID(data)))
//     .catch((error) => dispatch(ticketsError(error)))
// }

// export const fetchTickets =
//   (dispatch, aviasalesService) => async (searchID) => {
//     try {
//       let isMore = true

//       while (isMore) {
//         const { tickets, stop } = await aviasalesService.getPartTickets(
//           searchID
//         )

//         dispatch(setTickets(tickets))
//         dispatch(setLoading(!stop))
//         isMore = !stop
//       }
//     } catch (error) {
//       dispatch(ticketsError(error))
//       dispatch(setLoading(false))

//     }
//   }

//ВАРИАНТ С ACTION CREATOR, ИСПОЛЬЗУЯ БИБЛИОТЕКУ THUNK

export const fetchSearchID =
  (aviasalesService: IAviasalesService) => () => (dispatch: any) => {
    aviasalesService
      .getSearchID()
      .then((data) => dispatch(setSearchID(data)))
      .catch((error) => dispatch(ticketsError(error)))
  }

export const fetchTickets =
  (aviasalesService: IAviasalesService) =>
  (searchID: SearchID) =>
  async (dispatch: any) => {
    try {
      let isMore = true

      while (isMore) {
        const { tickets, stop } = await aviasalesService.getPartTickets(
          searchID
        )

        dispatch(setTickets(tickets))
        dispatch(setLoading(!stop))
        isMore = !stop
      }
    } catch (error) {
      dispatch(ticketsError(error))
      dispatch(setLoading(false))
    }
  }
