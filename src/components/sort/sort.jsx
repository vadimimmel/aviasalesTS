import { connect } from 'react-redux'

import { sortTickets } from '../../redux/actions'

import { Button } from '../shared/button'

import classes from './sort.module.scss'

const buttonsConfig = [
  { id: 'cheepest', value: 'самый дешёвый' },
  { id: 'fastest', value: 'самый быстрый' },
  { id: 'getLucky', value: 'мне повезёт' },
]

function Sort({ sorting, sortTickets }) {
  const sortingButtons = buttonsConfig.map((button) => {
    const { id, value } = button
    const active = id === sorting ? true : false
    const sort = (e) => {
      sortTickets(e.target.id)
    }

    return (
      <Button
        className={classes['Sort__button']}
        onClick={sort}
        active={active}
        id={id}
        key={id}
      >
        {value}
      </Button>
    )
  })

  return (
    <section className={classes.Sort} role="toolbar">
      {sortingButtons}
    </section>
  )
}

const mapStatetoProps = (state) => {
  return {
    sorting: state.ticketSorting,
  }
}

// результат для (dispatch) => bindActionCreators(actions, dispatch) такой же
const mapDispatchToProps = (dispatch) => {
  return {
    sortTickets: (buttonID) => dispatch(sortTickets(buttonID)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Sort)
