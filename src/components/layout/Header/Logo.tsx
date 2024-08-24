import logoImg from '../../../assets/icons/Logo.svg'

export const Logo = () => (
  <div style={{ height: 20, width: 121, position: 'relative' }}>
    <img src={logoImg} style={{ height: 20, width: 121, objectFit: 'fill' }} />
  </div>
)
