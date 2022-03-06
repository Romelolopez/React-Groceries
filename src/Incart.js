
import React from "react"

class Incart extends React.Component{
    
    handleSubmit =(event)=>{
        let index = event.target.parentNode.id
        this.props.removeItem(index)
    }


    render(){
        /*we use/set filteredGrocery in render because we want to 
        automactically get the items that isPurcahsed is true.
        we then use map to display those items*/
        let filteredGrocery =  this.props.groceryList.filter((item) => {
            if (item.isPurchased === true){
                
                return true
                
            } else {
                return false
            } 
        }) 
        console.log(filteredGrocery) 
    return(
    <div>
        
        <div className="g-list">
                <h3 class="h-text">In Cart:</h3>
                {filteredGrocery.map((grocery, index) => 
                <div key={index} className="list-item">
                    <div>Purchased Item: {grocery.item}</div>
                    <div>Quantitiy: {grocery.quantity}</div>
                    <div>Units: {grocery.units}</div>
                </div>
                )}
        </div>
    </div>
        )
    }
}

export default Incart 