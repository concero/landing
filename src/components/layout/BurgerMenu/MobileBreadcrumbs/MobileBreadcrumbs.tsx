import classNames from './MobileBreadcrumbs.module.pcss'
import { Link, useMatch } from 'react-router-dom'
import { routes } from '../../../../constants/routes'
import { Button } from '../../Button/Button'

export function MobileBreadcrumbs() {
  const matchSwap = useMatch(routes.home)
  const matchEarn = useMatch(routes.prototypes)

  return (
    <ul className={classNames.container}>
      <Link to={routes.home} className={classNames.link}>
        <Button variant={'black'} className={`${classNames.listButton} ${matchSwap ? classNames.active : ''}`}>
          <h5>Home</h5>
        </Button>
      </Link>
      <Link to={routes.prototypes} className={classNames.link}>
        <Button variant={'black'} className={`${classNames.listButton} ${matchEarn ? classNames.active : ''}`}>
          <h5>Prototypes</h5>
        </Button>
      </Link>
      <div className={classNames.separator} />
    </ul>
  )
}
