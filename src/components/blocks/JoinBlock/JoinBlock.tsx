import { Block } from '../../layout/Block/Block'
import { Card } from '../../cards/Card/Card'
import classNames from './JoinBlock.module.pcss'
import object1 from '../../../assets/images/mainScreen/mainPageFigure.png'
import { Input } from '../../layout/Input/Input'
import axios from 'axios'
import { useState } from 'react'
import { Button } from '../../layout/Button/Button'
import { IconArrowUpRight } from '@tabler/icons-react'

export function JoinBlock() {
  const [inputs, setInputs] = useState({
    email: '',
  })

  function handleSubmit(e: any) {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/maygajao',
      data: inputs,
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setInputs({
          email: '',
        })
      })
  }

  return (
    <Block>
      <Card className={classNames.cardContainer}>
        <div className={classNames.titleContainer}>
          <div>
            <h2>Join our newsletter</h2>
            <p className={'body1'}>
              Subscribe to our newsletter for exclusive updates, contests, and breakthrough features.
            </p>
          </div>
          <div className={classNames.inputContainer}>
            <Input
              placeholder={'E-mail'}
              type={'email'}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              value={inputs.email}
            />
            {/*<MainButton size={'md'} className={classNames.mainButton} onClick={handleSubmit}>*/}
            {/*  <h4>Submit</h4>*/}
            {/*</MainButton>*/}
            <Button
              variant={'primary'}
              size={'lg'}
              className={classNames.launchAppButton}
              rightIcon={<IconArrowUpRight size={20} color={'var(--color-base-white)'} />}
              onClick={() => {
                window.open('https://app.concero.io', '_blank')
              }}
            >
              <h3 className={classNames.buttonTitle}>Subscribe</h3>
            </Button>
          </div>
        </div>
        <div className={classNames.imgContainer}>
          <img src={object1} />
        </div>
      </Card>
    </Block>
  )
}
