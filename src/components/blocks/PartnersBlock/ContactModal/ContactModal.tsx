import { Modal } from '../../../layout/Modal/Modal'
import classNames from './ContactModal.module.pcss'
import { Input } from '../../../layout/Input/Input'
import object from '../../../../assets/images/mainScreen/mainPageFigure.png'
import { Button } from '../../../layout/Button/Button'
import { useState } from 'react'
import axios from 'axios'
import { IconX } from '@tabler/icons-react'

interface ContactModalProps {
  show: boolean
  setShow: (show: boolean) => void
  title: string
  body?: string
  isMessageNeeded?: boolean
}

export function ContactModal({ show, setShow, title, body, isMessageNeeded = true }: ContactModalProps) {
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
            {body ? <p className={'body2'}>{body}</p> : null}
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
            {isMessageNeeded ? (
              <Input
                title={'Message'}
                inputType={'textarea'}
                type={'text'}
                onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
                value={inputs.message}
              />
            ) : null}
            <Button size={'md'} onClick={handleSubmit}>
              <h4 className={classNames.buttonTitle}>Send</h4>
            </Button>
          </form>
        </div>
        <div className={classNames.imageContainer}>
          <img src={object} />
        </div>
        <Button
          className={classNames.closeButton}
          variant={'black'}
          size={'xs'}
          onClick={() => setShow(false)}
          leftIcon={<IconX color={'var(--color-base-white)'} />}
        ></Button>
      </div>
    </Modal>
  )
}
