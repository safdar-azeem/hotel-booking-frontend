import { lazy } from 'react'
import { IRoute, Routes } from '../types/routes.type'

export const publicRoutes: IRoute[] = [
	{
		path: Routes.Home,
		type: 'public',
		element: lazy(() => import('../pages/public/Home')),
		childrens: [],
	},
]

export const privateRoutes: IRoute[] = [
	{
		path: Routes.Dashboard,
		type: 'private',
		element: lazy(() => import('../pages/private/Dashboard')),
		childrens: [],
	},
]

export const authRoutes: IRoute[] = [
	{
		path: Routes.SignUp,
		type: 'auth',
		element: lazy(() => import('../pages/auth/SignUp')),
	},
	{
		path: Routes.Login,
		type: 'auth',
		element: lazy(() => import('../pages/auth/Login')),
	},
]
