import React from 'react'
import List from "./List"
import Incart from "./Incart"


class Grocery extends React.Component {
	constructor(props) {
		super(props);
		//The state object is where you store property values that belongs to the component.
		this.state = {
			groceryList: [{ id: 0, item: "Milk", units: "1/2 Gal", quantity: 1, isPurchased: false },
			{ id: 1, item: "Lays Classic", units: "1 Oz", quantity: 5, isPurchased: false },
			{ id: 2, item: "Wonder Bread", units: "1 LB", quantity: 1, isPurchased: false }],
			item: '',
			units: '',
			quantity: 0,
			isPurchased: false,
		};
		//handleChange is equal to any future instance of handleChange
		this.handleChange = this.handleChange.bind(this);
		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.reset = this.reset.bind(this);
	}

	handleChange(event) {
		//You can control the values of more than one input field by adding a name attribute to each element.
		//gets the name of the input
		let n = event.target.name;
		//gets the value of the input
		let value = event.target.value;
		//n & value are equal to state names. This is done so anything entered can set a state 
		this.setState({ [n]: value })
	}


	addItem(event)
	{
		//after we set a state with entered text, it gets stored in here
		const newItem = {
			id: this.state.groceryList.length + 1,
			item: this.state.item,
			units: this.state.units,
			quantity: this.state.quantity,
			isPurchased: false,
		};
		//We add the new item to the groceryList
		//Make copy, so you can update the state. (which you normally do not do)
		let cgl = [...this.state.groceryList, newItem]

		//We turn groceryList into cgl and reset all other the states. This way we can add a new item. 
		this.setState({
			groceryList: cgl,
			item: '',
			units: '',
			quantity: 0,
			isPurchased: false,
		}, () => console.log(this.state.groceryList));


		event.preventDefault();
	}

	//Remove an item from groceryList
	removeItem(index) 
	{
		//Make a copy of groceryList
		let gCopy = this.state.groceryList.slice()
		//Take the selected index out
		//(index is only possible because of maps used in the component "List")
		gCopy.splice(index, 1)
		//Set the state to the copy
		this.setState({groceryList: gCopy,})
	}

	//Add items to cart
	addToCart(index)
	{	
		//Makes a copy of grocerylist
		let newArry = this.state.groceryList.slice()
		//If the selected index "isPurchased" is false, change it to true. Vise versa
        newArry[index].isPurchased = !newArry[index].isPurchased
		//Update the state of groceryList
        this.setState({groceryList: newArry})
		
	}


	reset(){
		this.setState({groceryList: []})
	}

	render() {
		return (
			<div>
				<h1>Grocery List</h1>

				<form onSubmit={this.addItem}>
					<div className="g-form">
						<label> Item: </label>
							<div>
								<input type="text" name="item" value={this.state.item} onChange={this.handleChange} placeholder="example: Milk"/>
							</div>
						<label className="list-label"> Units: </label>
							<div>
								<input type="text"  name="units" value={this.state.units} onChange={this.handleChange} placeholder="example: Gallon"/>
							</div>
						<label className="list-label"> Quantity: </label>
							<input type="text" name="quantity" value={this.state.quantity} onChange={this.handleChange} />
						
						<div>
							<input type="submit" value="Submit"/>
						</div>
					</div>
				</form>

				

				<List groceryList={this.state.groceryList} removeItem={this.removeItem} getItem={this.addToCart} />
				<Incart groceryList={this.state.groceryList} removeItem={this.removeItem} />
				<div className="reset">
					<button onClick={this.reset} className="r-button">Reset</button>
				</div>
			</div>

		);
	}
}

export default Grocery