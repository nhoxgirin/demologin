"use client"
import { useContext } from 'react'
import { UserContext } from './contexts/UserProvider'

function page() {
	const { user } = useContext(UserContext)
	return (
		<div>
			Home
			User: {user?.username}
		</div>
	)
}
export default page