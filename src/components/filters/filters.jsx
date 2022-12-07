import { connect } from 'react-redux'

import { Checkbox } from '../shared/checkbox'

import { setLayoverFilter } from '../../redux/actions'

import styles from './filters.module.scss'

function Filters({ filters, setLayoverFilter }) {
  const changeFilter = (e) => {
    setLayoverFilter(e.target.id)
  }

  const filterList = filters.map((filter) => {
    const { id, value, status } = filter

    return (
      <Checkbox
        className={styles['Filters__label']}
        type="checkbox"
        id={id}
        key={id}
        onChange={changeFilter}
        checked={status}
      >
        {value}
      </Checkbox>
    )
  })

  return (
    <section className={styles.Filters}>
      <form>
        <fieldset className={styles['Filters__options']}>
          <legend className={styles['Filters__name']}>
            количество пересадок
          </legend>
          {filterList}
        </fieldset>
      </form>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.layoverFilter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLayoverFilter: (filterID) => dispatch(setLayoverFilter(filterID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
