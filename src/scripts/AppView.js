import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'


const AppView = React.createClass({
	
	_handleKey: function(e){
		if(e.keyCode === 13){
			this._searchNumber(e.target.value)
		}
	},

	_searchNumber: function(num){
		return location.hash = `number/${num}`
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
				<input type="text" placeholder="type in a year" onKeyDown={this.props.handleKey} />
			</header>
			)
	}
})

const MainContainer = React.createClass({
	render: function(){
		console.log(this)
		return (
			<div id="MainContainer">
				<Content numMod={this.props.numMod} />
			</div>
			)
	}
})

const Content = React.createClass({
	render: function(){
		console.log(this.props.numMod)
		return (
			<div className="content">
				{this.props.numMod}
			</div>
			)
	}
})

export default AppView