import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'

const AppView = React.createClass({
	
	_handleKey: function(e){
		e.preventDefault()
		// if(e.keyCode === 13){
			// console.log(e.target.numberinput.value)
			// console.log(e.target.select.value)
			this._searchNumber(e.target.numberinput.value, e.target.select.value)
			e.target.numberinput.value = ''
		// }
	},

	_searchNumber: function(num,type){
		return location.hash = `number/${num}/${type}`
	},

	render: function(){
		console.log(this)
		return (
			<div id="appContainer">
				<Header handleKey={this._handleKey} />
				<MainContainer numMod={this.props.numMod} />
			</div>
			)
	}
})


const Header = React.createClass({

	render: function(){
		return (
			<header id="mainHeader">
				<h1>what's your number?</h1>
				<form onSubmit={this.props.handleKey}>
					<select name="select">
						<option value="math">math</option>
						<option value="year">year</option>
						<option value="trivia">trivia</option>
					</select>
				<input type="text" placeholder="type in a year" ref="number" name="numberinput" />
				<button type="submit">submit</button>
				</form>
			</header>
			)
	}
})

const MainContainer = React.createClass({
	render: function(){
		console.log(this.props.numMod)
		return (
			<div id="MainContainer">
				<Content numMod={this.props.numMod} />
			</div>
			)
	}
})

const Content = React.createClass({
	render: function(){
		console.log(this.props.numMod.attributes)
		var date
		if(!this.props.numMod.get('date')){
			date = ''
		} else {
			date = `date: ${this.props.numMod.get('date')}`
		}
		return (
			<div className="content">
				<h2>{this.props.numMod.get('number')}</h2>
				<p>{date}</p>
				<p>{this.props.numMod.get('text')}</p>
			</div>
			)
	}
})

export default AppView