import classNames from 'classnames'

import styles from './checkbox.module.scss'

type CheckboxProps = {
  children?: string
  id?: string
  className?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  attrs: any
}

export function Checkbox({
  children,
  id = '',
  className = '',
  onChange,
  ...attrs
}: CheckboxProps) {
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
