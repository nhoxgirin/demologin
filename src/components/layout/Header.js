/*
import HomePage from '@/src/containers/home/HomePage'
import React from 'react'
//rfce
function page(){
	return {<HomePage />}
}
export default page
*/
import React from 'react'
//import HomePage from '@/src/containers/home/HomePage'
import Menu from '@/src/components/layout/Menu'

function Header(props){
	const  {companyName,...rest}=props
	return (
	<div>
		<div className="text-2xl">
		{companyName}
		</div>
		<Menu companyName="SHOPEE" logo="đây là logo" {...rest} />
	</div>
	)
}
export default Header