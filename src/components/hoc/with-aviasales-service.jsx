import { AviasalesServiceConsumer } from '../aviasales-service-context'

const withAviasalesService = () => (Component) => {
  return (props) => {
    return (
      <AviasalesServiceConsumer>
        {(aviasalesService) => {
          return <Component {...props} aviasalesService={aviasalesService} />
        }}
      </AviasalesServiceConsumer>
    )
  }
}

export { withAviasalesService }
