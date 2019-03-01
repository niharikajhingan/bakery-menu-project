import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import ItemList from './ItemList';
import FilterTrack from './FilterTrack.jsx';

class Filters extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			type: "",
			flavor: "",
			sorting: ""
		};
	}
	
	// Filters items based on the filters currently selected
	filterItem = (item) => {
		
		console.log(this.state.type);
		console.log(this.state.flavor);

		if ((this.state.type === "") && (this.state.flavor === "")) {
			return true;
		}
		
		if (this.state.type === "") {
			return (this.state.flavor === item.flavor);
		}

		if (this.state.flavor === "") {
			return (this.state.type === item.type);
		}

		return ((this.state.type === item.type) && (this.state.flavor === item.flavor));
	}

	sortingMethod = (item1, item2) => {
		var p1 = parseInt(item1.price);
		var p2 = parseInt(item2.price);

		return (p1 - p2);
	}

	mySort = (itemList) => {

		if (this.state.sorting === "") {
			return itemList;
		} else if (this.state.sorting === "LowToHigh") {
			return itemList.sort(this.sortingMethod);
		} else {
			return itemList.sort(this.sortingMethod).reverse();
		}
	}
	
	
	/* TODO: Add an event handling method for when an item in dropdown is selected
	Per the DropdownButton documentation, this function should take in an eventKey and
	event
	*/
	typeSelected = (event) => {		
		this.setState({type: event});
	}

	flavorSelected = (event) => {
		this.setState({flavor: event});
	}

	sortingSelected = (event) => {
		this.setState({sorting: event});
	}

	resetType = () => {
		this.setState({type: ""});
	}

	resetFlavor = () => {
		this.setState({flavor: ""});
	}

	resetSort = () => {
		this.setState({sorting: ""});
	}
	
	render() {
		return (
			<div className="filter-list">
			<div className="mainBox">
			<h4>Use our Dessert Type and Flavor filters, or sort by price!</h4>
			<div>Find by category: </div>
			<div>
			<DropdownButton id="typeDropdown" title={"Type"}>
			<MenuItem eventKey="Cakes" onSelect={this.typeSelected}>Cakes</MenuItem>
			<MenuItem eventKey="Cupcakes" onSelect={this.typeSelected}>Cupcakes</MenuItem>
			<MenuItem eventKey="Cookies" onSelect={this.typeSelected}>Cookies</MenuItem>
			<MenuItem eventKey="Other Desserts" onSelect={this.typeSelected}>Other Desserts</MenuItem>
			</DropdownButton> &nbsp;
			<DropdownButton id="typeDropdown" title={"Flavor"}>
			<MenuItem eventKey="Chocolate" onSelect={this.flavorSelected}>Chocolate</MenuItem>
			<MenuItem eventKey="Vanilla" onSelect={this.flavorSelected}>Vanilla</MenuItem>
			<MenuItem eventKey="Fruit" onSelect={this.flavorSelected}>Fruit</MenuItem>
			<MenuItem eventKey="Special Flavors" onSelect={this.flavorSelected}>Special Flavors</MenuItem>
			</DropdownButton></div>
			<br />
			<div> or Sort results: </div>
			<div>
			<DropdownButton id="typeDropdown" title={"Sort by"}>
			<MenuItem eventKey="LowToHigh" onSelect={this.sortingSelected}>Price: Low to High</MenuItem>
			<MenuItem eventKey="HighToLow" onSelect={this.sortingSelected}>Price: High to Low</MenuItem>
			</DropdownButton></div>
			<br />
			<div className="currentFilters">
			<FilterTrack type={this.state.type} flavor={this.state.flavor} sorting={this.state.sorting} />
			<div>
			<br /> 
			<button id="resetType" onClick={this.resetType}>Remove Type Filter</button> &nbsp;
			<button id="resetFlavor" onClick={this.resetFlavor}>Remove Flavor Filter</button> &nbsp;
			<button id="resetSort" onClick={this.resetSort}>Reset Sorting</button>
			</div>
			</div>
			</div>
			<ItemList items={this.mySort(this.props.items.filter(this.filterItem))} />
			</div>
);
}
}

export default Filters;