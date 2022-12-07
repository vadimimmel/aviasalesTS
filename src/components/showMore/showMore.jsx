import classNames from 'classnames'
import { connect } from 'react-redux'

import { Button } from '../shared/button'

import styles from './showMore.module.scss'

import { setNumberOfTicketsDisplayed } from '../../redux/actions'

function ShowMore({ setNumberOfTicketsDisplayed, numberOfTickets }) {
  const cn = classNames(styles.button)

  return (
    <Button
      className={cn}
      onClick={() => {
        setNumberOfTicketsDisplayed(numberOfTickets)
      }}
    >
      показать ещё {numberOfTickets} билетов
    </Button>
  )
}

export default connect(null, { setNumberOfTicketsDisplayed })(ShowMore)
