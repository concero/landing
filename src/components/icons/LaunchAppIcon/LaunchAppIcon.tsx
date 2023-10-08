import classNames from './LaunchAppIcon.module.pcss'
import ArrowUpRight from '../../../assets/icons/ArrowUpRight.svg'

export function LaunchAppIcon({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const classes = classNames[size]
  return (
    <div className={`${classNames.container} ${classes}`}>
      <img src={ArrowUpRight} className={classNames.icon} />
    </div>
  )
}
