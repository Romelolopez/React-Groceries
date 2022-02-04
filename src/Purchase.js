
import React from "react"



class Purchased extends React.Component{
     
    render(){
    return(
    <div>
        <div>
            <p>Items Needed</p>
            {this.props.groceryList.map(obj =>
            <p key={obj.id} value={obj.isPurchased}>{obj.item} {obj.units} {obj.quantity}<span><button>Remove</button></span></p>
            )}
        </div>
    </div>
        )
    }
}

export default Purchased 