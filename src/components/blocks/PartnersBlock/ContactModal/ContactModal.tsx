import { Modal } from '../../../layout/Modal/Modal'
import classNames from './ContactModal.module.pcss'
import { Input } from '../../../layout/Input/Input'
import object from '../../../../assets/images/mainScreen/mainPageFigure.webp'
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
    socialMedia: '',
  })

  function handleSubmit(e: any) {
    e.preventDefault()

    if (!inputs.name || !inputs.email) {
      return
    }

    axios({
      method: 'POST',
      url: 'https://send.concero.io/api/v1/client/cltkp48yy0009swvupzjn5ezi/responses',
      data: {
        surveyId: 'clu2fnr98001gmiks31g00uml',
        userId: `${inputs.email}`,
        finished: true,
        data: {
          name: inputs.name,
          email: inputs.email,
          discordOrTwitterUsername: inputs.socialMedia,
          message: inputs.message,
        },
      },
    })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setShow(false)
        setInputs({
          name: '',
          email: '',
          message: '',
          socialMedia: '',
        })
      })
  }

  return (
    <Modal show={show} setShow={setShow}>
      <div className={classNames.container}>
        <div className={classNames.formContainer}>
          <div className={classNames.titleContainer}>
            <h2>{title}</h2>
            <Button
              className={classNames.closeButton}
              // variant={'secondaryGrey'}
              size={'md'}
              onClick={() => setShow(false)}
              leftIcon={<IconX style={{}} strokeWidth={1.5} height={21} width={21} color={'var(--color-gray-700)'} />}
            />
          </div>
          <form className={classNames.inputContainer}>
            <Input
              title={'Name'}
              type={'text'}
              placeholder="Name Surname"
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              value={inputs.name}
            />
            <Input
              title={'Email'}
              type={'email'}
              placeholder="your@mail.com"
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              value={inputs.email}
            />
            <Input
              title={`Discord <span style="color: var(--color-grey-500);">(Optional)</span>`}
              type={'email'}
              placeholder="Username or ID"
              onChange={(e) => setInputs({ ...inputs, socialMedia: e.target.value })}
              value={inputs.socialMedia}
            />

            <Input
              title={'Message'}
              inputType={'textarea'}
              type={'text'}
              placeholder="Hello!"
              onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
              value={inputs.message}
            />
            <div style={{ alignSelf: 'flex-start', marginTop: 8 }}>
              <Button size={'lg'} onClick={handleSubmit}>
                <h4 className={classNames.buttonTitle}>Send message</h4>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}
