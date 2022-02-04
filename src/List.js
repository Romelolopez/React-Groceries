
import React from "react"


class List extends React.Component{

    handleClick=(event)=>{
        let index = event.target.parentNode.id
        this.props.getItem(index)
        
    }

    handleSubmit=(event)=>{
        let index = event.target.parentNode.id
        this.props.removeItem(index)
        
        console.log("index" + index)
        console.log(event.target.parentNode.attributes[1].value)
        console.log(this.props.groceryList[index].isPurchased)
    }

    render(){
        
    return(
    <div>
        {/* <div>
            <p>Items Needed</p>
            {this.props.groceryList.map((obj, index) =>
            <div key={obj.id} id={index} value={obj.isPurchased} className="list-item">
                <div>Item: {obj.item}</div> 
                <div>Units: {obj.units}</div> 
                <div>Quantity: {obj.quantity}</div> 
                
            <button onClick={this.handleSubmit}>Remove</button>
            <button onClick={this.handleClick}>{this.props.groceryList[index].isPurchased ? "Remove From Cart" : "Add To Cart"}</button>
                
            </div>
            )}
            
        </div> */}

    <div>
        <div className="g-list">
            <h2>Items Needed</h2>
            {this.props.groceryList.map((obj, index) =>
            <div key={obj.id} id={index} className="list-item" value={obj.isPurchased} >
                <div value={obj.isPurchased}>Item: {obj.item}</div>
                <div value={obj.isPurchased}>Units: {obj.units}</div>
                <div value={obj.isPurchased}>Quantity: {obj.quantity}</div>
                
                    <button onClick={this.handleSubmit} className="g-list-button">Remove</button>
                    <button onClick={this.handleClick} className="g-list-button">{this.props.groceryList[index].isPurchased ? "Remove From Cart" : "Add To Cart"}</button>
                
            </div>
            )}
            
        </div>
    </div>

    </div>
        )
    }
}

export default List 