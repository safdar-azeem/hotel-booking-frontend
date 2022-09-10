export interface IRoute {
	path: string
	element: React.ComponentType<any>
	exact?: boolean
	index?: boolean
	childrens?: IRoute[]
	type: 'public' | 'private' | 'auth' | null
}

export enum Routes {
	Home = '/',
	Login = '/login',
	SignUp = '/signup',
	Dashboard = '/dashboard',
	Hotels = '/hotels',
	Hotel = '/hotel:id',
	Rooms = '/rooms',
}

export interface IHotelCard {
	id: string
	imgSrc: string
	location: string
	hotelTitle: string
	rating: string
	price: number
}
