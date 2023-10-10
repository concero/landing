import classNames from './LaunchAppIcon.module.pcss'
import ArrowUpRight from '../../../assets/icons/ArrowUpRight.svg'

export function LaunchAppIcon({
  size = 'sm',
  className = null,
}: {
  size?: 'sm' | 'md' | 'lg'
  className?: string | null
}) {
  let classes = classNames[size]
  if (className) {
    classes += ` ${className}`
  }
  return (
    <div className={`${classNames.container} ${classes}`}>
      <img src={ArrowUpRight} className={classNames.icon} />
    </div>
  )
}
