import React from 'react'
import ReactDOM from 'react-dom'	
import Backbone from 'backbone'
import AppView from './AppView.js'

const app = function() {

const NumberModel = Backbone.Model.extend({
	url: function(){
		return "http://numbersapi.com/" + this.num + "/" + this.type + "?json"
	}, 
	parse: function(rawJSON){
		console.log(rawJSON.text)
		return rawJSON
	},
	initialize: function(num,type){
		this.num = num
		this.type = type
	}
})

var Router = Backbone.Router.extend({
	routes: {
		"home": "goHome",
		"number/:number/:type": "searchNumbers",
		"*catchall": "routeHome"
	},

	initialize: function() {
		Backbone.history.start()
	},

	routeHome: function(){
		location.hash = "home"
	},

	goHome: function(){
		var numMod = new NumberModel()
		ReactDOM.render(<AppView numMod={numMod} />,document.querySelector('.container'))			
	},

	searchNumbers: function(num,type){
		var numMod = new NumberModel(num,type)
		numMod.fetch().then(function(){
			ReactDOM.render(<AppView numMod={numMod} />,document.querySelector('.container'))	
		})
	}

})

new Router()

}

app()