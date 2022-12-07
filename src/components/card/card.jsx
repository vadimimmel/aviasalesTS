import { Image } from '../shared/image'

import styles from './card.module.scss'

export function Card({ ticketData }) {
  const {
    price,
    iconLink,
    route,
    backRoute,
    duration,
    backDuration,
    layovers,
    backLayovers,
    stops,
    backStops,
    date,
    backDate,
  } = ticketData

  return (
    <div className={styles.Card}>
      <div className={styles['Card__price']}>{price} р</div>
      <div className={styles['Card__logoWrapper']}>
        <Image
          src={iconLink}
          alt="s7"
          className={styles['Card__logo']}
          width={110}
          height={36}
        />
      </div>
      <div className={styles['Card__about']}>
        {/* информацию о рейсе "туда" */}
        <div className={styles['Card__info']}>
          <div className={styles['Card__descr']}>{route}</div>
          <div className={styles['Card__value']}>{date}</div>
        </div>
        <div className={styles['Card__info']}>
          <div className={styles['Card__descr']}>в пути</div>
          <div className={styles['Card__value_length']}>{duration}</div>
        </div>
        <div className={styles['Card__info']}>
          <div className={styles['Card__descr']}>{layovers}</div>
          <div className={styles['Card__value']}>{stops}</div>
        </div>
        {/* информация о рейсе "обратно" */}
        <div className={styles['Card__info']}>
          <div className={styles['Card__descr']}>{backRoute}</div>
          <div className={styles['Card__value']}>{backDate}</div>
        </div>
        <div className={styles['Card__info']}>
          <div className={styles['Card__descr']}>в пути</div>
          <div className={styles['Card__value_length']}>{backDuration}</div>
        </div>
        <div className={styles['Card__info']}>
          <div className={styles['Card__descr']}>{backLayovers}</div>
          <div className={styles['Card__value']}>{backStops}</div>
        </div>
      </div>
    </div>
  )
}
