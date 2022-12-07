import { connect } from 'react-redux'

import { Image } from '../shared/image'
import { Spinner } from '../spinner'

import classes from './logo.module.scss'

import logo from '../../assets/icons/Logo.svg'

type LogoProps = {
  loading: boolean
}

function Logo({ loading = false }: LogoProps) {
  return (
    <div className={classes.Logo} role='banner'>
      <Spinner loading={loading}>
        <Image
          src={logo}
          alt='aviasales_logo'
          width={98}
          height={98}
          circle={true}
        />
      </Spinner>
    </div>
  )
}

const mapStateToProps = ({ loading }: any) => {
  return {
    loading,
  }
}

export default connect(mapStateToProps)(Logo)
