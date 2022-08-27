import CustomRoute from './config/routes.config'
import { authRoutes, privateRoutes, publicRoutes } from './routes/routes'

const App = () => {
	return (
		<section>
			<CustomRoute
				routes={[...publicRoutes, ...authRoutes, ...privateRoutes]}
			/>
		</section>
	)
}

export default App
