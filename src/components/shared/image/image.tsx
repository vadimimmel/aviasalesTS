import classNames from 'classnames'

import styles from './image.module.scss'

import { ImageProps } from './ImageProps'

export function Image({
  src = 'https://via.placeholder.com/110x36',
  alt = 'image name',
  className,
  width = 100,
  height = 100,
  circle = false,
  ...attrs
}: ImageProps): JSX.Element {
  if (!src) {
    src = `https://via.placeholder.com/${width}x${height}`
  }

  const cn = classNames(className, { [styles.circle]: circle })

  return (
    <img
      src={src}
      alt={alt}
      className={cn}
      width={width}
      height={height}
      {...attrs}
    />
  )
}
