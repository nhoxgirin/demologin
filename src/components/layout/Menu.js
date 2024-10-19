
import React from 'react'

function Menu({menu,companyName,logo}){
	return (
	<div>
		<div>
		{logo?<div>{logo}</div>:"textlogo"}
		</div>
		{
			menu.map((el,index)=>
				<div key={index}>{el.name}</div>
			)
		}
	</div>
	)
}
export default Menu