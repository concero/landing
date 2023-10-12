import { FC, ReactNode } from 'react'
import classNames from './Card.module.pcss'
import { animated, useInView } from '@react-spring/web'
import { slowfadeInUp } from '../../../constants/animations'

interface CardProps {
  children: ReactNode
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  color?: 'white' | 'main' | 'black'
  className?: string
}

export const Card: FC<CardProps> = ({ children, padding, color, className }) => {
  let classes = `${classNames.container} ${padding ? classNames[`padding${padding}`] : ''}`
  if (color) classes = classes.concat(` ${classNames[color]}`)
  if (className) classes = classes.concat(` ${className}`)

  const [ref, springs] = useInView(() => slowfadeInUp, { once: true })

  return (
    <animated.div ref={ref} style={springs} className={classes}>
      {children}
    </animated.div>
  )
}
