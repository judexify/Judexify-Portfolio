import './index.css'
import LogoS from '../../../assets/images/logo-s.webp'

export default function Logo() {
  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={LogoS}
        alt="logo"
        width="400"
        height="400"
        fetchpriority="high"
      />
    </div>
  )
}
