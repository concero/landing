import { Modal } from '../../../layout/Modal/Modal'
import classNames from './ContactModal.module.pcss'
import { Input } from '../../../layout/Input/Input'
import object from '../../../../assets/images/JoinBlock/object1.svg'
import { MainButton } from '../../../layout/MainButton/MainButton'
import { Button } from '../../../layout/Button/Button'
import close from '../../../../assets/icons/Close.svg'

interface ContactModalProps {
  show: boolean
  setShow: (show: boolean) => void
  title: string
  body: string
}

export function ContactModal({ show, setShow, title, body }: ContactModalProps) {
  return (
    <Modal show={show} setShow={setShow}>
      <div className={classNames.container}>
        <div className={classNames.formContainer}>
          <div className={classNames.titleContainer}>
            <h2>{title}</h2>
            <p className={'body2'}>{body}</p>
          </div>
          <form className={classNames.inputContainer}>
            <Input title={'Name'} type={'text'} />
            <Input title={'Email'} type={'email'} />
            <Input title={'Message'} inputType={'textarea'} type={'text'} />
            <MainButton size={'md'}>
              <h4 className={classNames.buttonTitle}>Send</h4>
            </MainButton>
          </form>
        </div>
        <div className={classNames.imageContainer}>
          <img src={object} />
        </div>
        <Button className={classNames.closeButton} size={'xs'} onClick={() => setShow(false)}>
          <img src={close} />
        </Button>
      </div>
    </Modal>
  )
}
