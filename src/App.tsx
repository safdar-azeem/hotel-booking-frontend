import CustomRoute from './config/routes.config'
import { authRoutes, privateRoutes, publicRoutes } from './routes/routes'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const App = () => {
	return (
		<section>
			<CustomRoute
				routes={[...publicRoutes, ...authRoutes, ...privateRoutes]}
			/>
			<ToastContainer />
		</section>
	)
}

export default App
