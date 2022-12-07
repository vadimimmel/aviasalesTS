import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Logo } from '../logo'
import { Filters } from '../filters'
import { Sort } from '../sort'
import { Results } from '../results'

import { withAviasalesService } from '../hoc'
import { fetchSearchID } from '../../redux/actions'
import { compose } from '../../helpers'

import styles from './app.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <Logo />
      <Filters />
      <Sort />
      <Results />
    </div>
  )
}

function AppContainer({ searchID, fetchSearchID }) {
  useEffect(() => {
    if (!searchID) {
      fetchSearchID()
    }
  }, [searchID, fetchSearchID])

  return <App />
}

const mapStateToProps = ({ searchID }) => {
  return {
    searchID,
  }
}

// ВАРИАНТ БЕЗ ACTION CREATOR

// const mapDispatchToProps = (dispatch, { aviasalesService }) => {
//   return {
//     fetchSearchID: fetchSearchID(dispatch, aviasalesService),
//   }
// }

//ВАРИАНТ С ACTION CREATOR, ИСПОЛЬЗУЯ БИБЛИОТЕКУ THUNK

const mapDispatchToProps = (dispatch, { aviasalesService }) => {
  return bindActionCreators(
    { fetchSearchID: fetchSearchID(aviasalesService) },
    dispatch
  )
}

export default compose(
  withAviasalesService(),
  connect(mapStateToProps, mapDispatchToProps)
)(AppContainer)
