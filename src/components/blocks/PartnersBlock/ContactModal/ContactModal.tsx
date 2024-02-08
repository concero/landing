import { Modal } from '../../../layout/Modal/Modal'
import classNames from './ContactModal.module.pcss'
import { Input } from '../../../layout/Input/Input'
import object from '../../../../assets/images/JoinBlock/object1.png'
import { MainButton } from '../../../layout/MainButton/MainButton'
import { Button } from '../../../layout/Button/Button'
import close from '../../../../assets/icons/Close.svg'
import { useState } from 'react'
import axios from 'axios'

interface ContactModalProps {
  show: boolean
  setShow: (show: boolean) => void
  title: string
  body: string
}

export function ContactModal({ show, setShow, title, body }: ContactModalProps) {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
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
        setShow(false)
        setInputs({
          name: '',
          email: '',
          message: '',
        })
      })
  }

  return (
    <Modal show={show} setShow={setShow}>
      <div className={classNames.container}>
        <div className={classNames.formContainer}>
          <div className={classNames.titleContainer}>
            <h2>{title}</h2>
            <p className={'body2'}>{body}</p>
          </div>
          <form className={classNames.inputContainer}>
            <Input
              title={'Name'}
              type={'text'}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              value={inputs.name}
            />
            <Input
              title={'Email'}
              type={'email'}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              value={inputs.email}
            />
            <Input
              title={'Message'}
              inputType={'textarea'}
              type={'text'}
              onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
              value={inputs.message}
            />
            <MainButton size={'md'} onClick={handleSubmit}>
              <h4 className={classNames.buttonTitle}>Send</h4>
            </MainButton>
          </form>
        </div>
        <div className={classNames.imageContainer}>
          <img src={object} />
        </div>
        <Button className={classNames.closeButton} variant={'black'} size={'xs'} onClick={() => setShow(false)}>
          <img src={close} />
        </Button>
      </div>
    </Modal>
  )
}
