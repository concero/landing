import { Block } from '../../layout/Block/Block'
import { Card } from '../../cards/Card/Card'
import classNames from './JoinBlock.module.pcss'
import { MainButton } from '../../layout/MainButton/MainButton'
import object1 from '../../../assets/images/JoinBlock/object1.png'
import { Input } from '../../layout/Input/Input'
import axios from 'axios'
import { useState } from 'react'

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
            <h2>Join newsletter</h2>
            <p className={'body1'}>Be the first to know about progress, trading competitions, new features and more.</p>
          </div>
          <div className={classNames.inputContainer}>
            <Input
              placeholder={'E-mail'}
              type={'email'}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              value={inputs.email}
            />
            <MainButton size={'md'} className={classNames.mainButton} onClick={handleSubmit}>
              <h4>Submit</h4>
            </MainButton>
          </div>
        </div>
        <div className={classNames.imgContainer}>
          <img src={object1} />
        </div>
      </Card>
    </Block>
  )
}
