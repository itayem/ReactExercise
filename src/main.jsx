import React from 'react';
import ReactDOM from 'react-dom';



var request = new XMLHttpRequest();
   request.open("GET", "./js/movies.json", false);
   request.send(null);
   var my_JSON_object = JSON.parse(request.responseText);
   console.log(my_JSON_object);


var Button = React.createClass({
	render (){
		return (
		<a className="button" href="#"><span className="left-info">GET TICKETS NOW</span><span className="arrow-info"><span></span></span></a>
		);
	}
});

var Buttons = React.createClass({
	render(){
		return (<div className="buttons">
			<Button/>
			<Button/>
			<Button/>
			</div>
		);
		
	}
	
});


var BigItem = React.createClass({
	propTypes : {
		id : React.PropTypes.number,
		ifactive: React.PropTypes.bool,
		img: React.PropTypes.string,
		title : React.PropTypes.string,
		subtext: React.PropTypes.string
	} ,
	render(){
		var ifshow = false;
		if(this.props.ifactive == true){
			ifshow = "active w3-animate-right";
		}else{
			ifshow = "not-active w3-animate-right";
		}
		return (
		<li className={ifshow} id={this.props.id}>
			<img src={this.props.img}/>
			<div className="film-info">
				<h1>{this.props.title}
				<span></span>
				</h1>
			<h2>{this.props.subtext}</h2>
			</div>
				<Buttons/>
		</li>
		);
	}
	
});

var BigSlider = React.createClass({
	render(){
		return(
	 <div id="bigSlider">
		<a href="#/" id="direction-left">
			<img src="img/arrow_left.png"/>
		</a>
		<a href="#/" id="direction-right">
			<img src="img/arrow_right.png"/>
		</a>
		<ul id="SliderList">
		{my_JSON_object.map(function(object, i){
        return <BigItem id={object.index} img={object.bigIMG} ifactive={object.ifactive} title={object.title} subtext={object.text}/>;
		})}
		</ul>
		<div id="pointer">
			<div className="left-triangle"></div>
			<div className="right-triangle"></div>
		</div>
	</div>
		);
	}
});


var Thumbnails = React.createClass({

	render(){
		return <Carousel/>
	}
	
});


var Carousel = React.createClass({
	render(){
		return (<div className="carousel">
		{my_JSON_object.map(function(object, i){
        return <CarouselItem name={object.index} img={object.smallIMG} href={object.thumbnail} toptext={object.text} bottomtext={object.title}/>;
		})}

		</div>)
	}
});


var CarouselItem = React.createClass({
	propTypes : {
		name: React.PropTypes.number.isRequired,
		href : React.PropTypes.string.isRequired,
		img: React.PropTypes.string.isRequired,
		toptext: React.PropTypes.string.isRequired,
		bottomtext: React.PropTypes.string.isRequired
	},
	render(){
		return   (<a className="carousel-item flex-item " name={this.props.name} href={this.props.href}><img src={this.props.img}/><div className="details"><span>{this.props.toptext}</span><h3>{this.props.bottomtext}</h3></div></a>)
	}
});



var App = React.createClass({
  render() {
    return 	(
	<div>
	<BigSlider/>
	<Thumbnails/>
	</div>
	)
  }    
});


ReactDOM.render(<App/>, document.getElementById("container"));
