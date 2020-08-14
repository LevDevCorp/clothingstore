import React from 'react'

export default class ErrorPage extends React.Component {
	private _convertStringToInt(value:string){
		return parseInt(value)
	}
	render(){
		return(
			<div className="container text-center mt-5">
			    <h1>ERROR</h1>
                <h4>Page Not Found</h4>
			</div>
		)
	}
}