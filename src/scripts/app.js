import React from 'react'
import ReactDOM from 'react-dom'	
import Backbone from 'backbone'
import AppView from './AppView.js'

const app = function() {

const NumberModel = Backbone.Model.extend({
	url: function(){
		return "http://numbersapi.com/" + this.num + "/year?json"
	}, 
	parse: function(rawJSON){
		console.log(rawJSON.text)
		return rawJSON.text
	},
	initialize: function(num){
		this.num = num
	}
})

var Router = Backbone.Router.extend({
	routes: {
		"home": "goHome",
		"number/:number": "searchNumbers",
		"*catchall": "routeHome"
	},

	initialize: function() {
		Backbone.history.start()
	},

	routeHome: function(){
		location.hash = "home"
	},

	goHome: function(){
		ReactDOM.render(<AppView />,document.querySelector('.container'))			
	},

	searchNumbers: function(num){
		var numMod = new NumberModel(num)
		numMod.fetch().then(function(){
			ReactDOM.render(<AppView numMod={numMod} />,document.querySelector('.container'))	
		})
	}

})

new Router()

}

app()