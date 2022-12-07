import classNames from 'classnames'

import styles from './image.module.scss'

type ImageProps = {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  circle?: boolean
  attrs?: any
}

export function Image({
  src = 'https://via.placeholder.com/110x36',
  alt = 'image name',
  className,
  width = 100,
  height = 100,
  circle = false,
  ...attrs
}: ImageProps) {
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
