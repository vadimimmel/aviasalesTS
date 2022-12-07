import classNames from 'classnames'

import styles from './checkbox.module.scss'

export function Checkbox({ children, id, className, onChange, ...attrs }) {
  const cn = classNames(styles.checkbox, className)

  return (
    <label className={cn}>
      <input
        className={styles['checkbox__input']}
        name={id}
        id={id}
        onChange={onChange}
        {...attrs}
      />
      <span className={styles['checkbox__custom']}></span>
      {children}
    </label>
  )
}

Checkbox.defaultProps = {
  id: '',
  children: '',
  className: '',
  onChange: () => {},
}
