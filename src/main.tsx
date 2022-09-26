import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import 'semantic-ui-css/semantic.min.css'
import './assets/sass/main.scss'
import { store } from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<Suspense fallback={<span>loading...</span>}>
				<Router>
					<App />
				</Router>
			</Suspense>
		</Provider>
	</React.StrictMode>
)
