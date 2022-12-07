import {
  FETCH_SEARCH_ID,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  SET_LAYOVER_FILTER,
  SET_LOADING,
  SET_TICKET_SORTING,
  ADD_TICKETS_DISPLAYED,
} from 'redux/actions'

// State
export type TicketsError = any

export interface IFilter {
  id: string
  value: string
  status: boolean
  filterValue: number | null
}

export type Loading = boolean

export type NumberOfTicketsDisplayed = number

export type SearchID = string

export type Sorting = string

export interface ITicket {
  price: number
  carrier: string
  segments: [
    {
      origin: string
      destination: string
      date: string
      stops: string[]
      duration: number
    }
  ]
}

export interface ITicketWithID extends ITicket {
  id: string
}

// Actions
export interface ISetLayoverFilterAction {
  type: typeof SET_LAYOVER_FILTER
  payload: IFilter['id']
}

export interface ISortTicketsAction {
  type: typeof SET_TICKET_SORTING
  payload: Sorting
}

export interface ISetSearchIDAction {
  type: typeof FETCH_SEARCH_ID
  payload: SearchID
}

export interface ISetTicketsAction {
  type: typeof FETCH_TICKETS_SUCCESS
  payload: Array<ITicketWithID>
}

export interface ISetLoadingAction {
  type: typeof SET_LOADING
  payload: Loading
}

export interface ISetNumberOfTicketsDisplayedAction {
  type: typeof ADD_TICKETS_DISPLAYED
  payload: NumberOfTicketsDisplayed
}

export interface ITicketsErrorAction {
  type: typeof FETCH_TICKETS_FAILURE
  payload: TicketsError
}
