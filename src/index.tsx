import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import 'normalize.css'
import './index.scss'

import { App } from './components/app'
import { ErrorBoundry } from './components/error-boundry'
import { AviasalesServiceProvider } from './components/aviasales-service-context'

import { store } from './redux/store'
import { aviasalesService } from './services/aviasales-service'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <AviasalesServiceProvider value={aviasalesService}>
        <App />
      </AviasalesServiceProvider>
    </ErrorBoundry>
  </Provider>
)
