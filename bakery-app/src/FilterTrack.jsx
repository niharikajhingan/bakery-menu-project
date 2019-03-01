import React, { Component } from 'react';
import './ItemList.css';

class FilterTrack extends Component {

	makeTypeFilter = () => {
		if (this.props.type !== "") {
			return (<div>Filtering by Type: {this.props.type}</div>);
		}
	}

	makeFlavorFilter = () => {

		if (this.props.flavor !== "") {
			return (<div>Filtering by Flavor: {this.props.flavor}</div>);
		}
	}

	makeSortFilter = () => {

		if (this.props.sorting !== "") {
			return (<div>Sorting by Price: {this.props.sorting}</div>);
		}
	}

	noFilters = () => {

		if ((this.props.sorting === "") && (this.props.flavor === "") && (this.props.type === "")) {
			console.log("In if statement");
			return (<div>No Filters/Sorting applied currently</div>);
		}
	}

render() {
	return (
		<div className="x">
		<h5>Currently Applied Filters:</h5>
		{this.makeTypeFilter()}
		{this.makeFlavorFilter()}
		{this.makeSortFilter()}
		{this.noFilters()}
	</div>
);
}
}

export default FilterTrack;