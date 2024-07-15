import classNames from './Prototype.module.pcss'
import { Card } from '../../cards/Card/Card'
import { Button } from '../Button/Button'
import { IconArrowUpRight } from '@tabler/icons-react'

export interface PrototypeProps {
  title: string
  body: string
  srcImg: string
  buttons: {
    title: string
    link: string
    disabled?: boolean
  }[]
}

export function Prototype({ title, body, srcImg, buttons }: PrototypeProps) {
  return (
    <div className={classNames.container}>
      <div className={classNames.sideContainer}>
        <div className={classNames.titleContainer}>
          <h2>{title}</h2>
          <p className={'body1'}>{body}</p>
        </div>
        <div className={classNames.buttonsContainer}>
          {buttons.map((button, index) => {
            return (
              <Button
                variant={index >= 1 ? 'transparent' : 'primary'}
                key={index.toString()}
                size={'lg'}
                rightIcon={<IconArrowUpRight size={20} />}
                isDisabled={button.disabled}
                onClick={() => {
                  window.open(button.link, '_blank')
                }}
              >
                {button.title}
              </Button>
            )
          })}
        </div>
      </div>
      <div className={classNames.rightSideContainer}>
        <Card className={classNames.cardContainer}>
          <div className={classNames.imgContainer}>
            <img src={srcImg} />
          </div>
        </Card>
      </div>
    </div>
  )
}
