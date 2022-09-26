import {
	BaseQueryFn,
	createApi,
	FetchArgs,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

interface CustomError {
	data: {
		message: string
	}
}

const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:5001/api/v1/',
	}) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (body) => ({
				url: '/login',
				method: 'POST',
				body,
			}),
		}),
		signup: builder.mutation({
			query: (body) => ({
				url: '/register',
				method: 'POST',
				body,
			}),
		}),
	}),
})

export const { useLoginMutation, useSignupMutation } = authApi

export default authApi
