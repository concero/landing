import { Card } from '../Card/Card'
import { Button } from '../../layout/Button/Button'
import classNames from './SendFormCard.module.pcss'
import { Input } from '../../layout/Input/Input'

export const SendFrom = () => {
  return (
    <Card padding={'lg'} className={classNames.container}>
      <div className={classNames.innerContainer}>
        <div>
          <h3 className={'heading'}>Stay up to date.</h3>
          <p className={'body2'}>Sign up for the newsletter.</p>
        </div>
        <form className={classNames.form}>
          <Input type={'text'} placeholder={'Enter your email'} />
          <Button variant="primary" className={classNames.sendButton}>
            Sign up
          </Button>
        </form>
      </div>
    </Card>
  )
}
