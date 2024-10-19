"use client"
import Image from "next/image";


export default function Home() {
  return (
    <div>
	<Header menu={[]}/>
	</div>
	);
}
function Menu({menu}){
	
}
function Header({menu}{
	return (
	<div>{menu.map(ele,index)}</div>
	);
}
function Header2({menu}{
	return (
	<div>{menu.map(ele)}</div>
	);
}
function Header({menu}{
	return (
	<div>{
		menu.map(ele,index)=>{
			const numb=111
			return <div key={ele.name}>{ele}</div>
		}
	}</div>
	);
}
function Header3({menu}{
	return (
	<div>{
		menu.map(ele,index)=><div key={ele.name}>{ele}</div>
	}</div>
	);
}
function Header4({menu,companyName}{
	return (
	<div>{
		
	}</div>
	);
}
function Header5({menu,companyName}{
	return (
	<div>{
		
	}</div>
	);
}
function Header5(props){
	const {menu,companyName}
	return (
	<div>{
		{companyName}
	}</div>
	<Menu {...props}/>
	);
}
function Home2() {
	const menu=[
	
	{name:"home",url:"/"},
	{name:"home2",url:"/"},
	{name:"search",url:"/"}
	]
	const companyName="tiki"
  return (
    <div>
	<Header companyName={companyName} menu={menu}/>
	</div>
	);
}
export default Home2