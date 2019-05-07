import React, { Component } from 'react';

import Auxx from '../../../hoc/Auxx/Auxx';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentDidUpdate(){
        console.log("order summary will update");
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.renderprops.ingredients[igKey]}</li>
        });

        return(
            <Auxx>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL ORDER</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>COMPLETE ORDER</Button>
        </Auxx>  
        );
    }
}


export default OrderSummary;
