import React, {Component} from "react";

class CreatePosition extends Component{
	constructor(props)
	{
		super(props);

		this.onChangePositionSecurity = this.onChangePositionSecurity.bind(this);
		this.onChangePositionPortfolio = this.onChangePositionPortfolio.bind(this);
		this.onChangePositionCustodian = this.onChangePositionCustodian.bind(this);
		this.onChangePositionType = this.onChangePositionType.bind(this);
		this.onChangePositionAmount = this.onChangePositionAmount.bind(this);
		this.onChangePositionPrice = this.onChangePositionPrice.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			position_security : '',
			position_portfolio : '',
			position_custodian : '',
			position_type : '',
			position_amount : '',
			position_price : ''
		}
	}

	onChangePositionSecurity(e) {
        this.setState({
            position_security: e.target.value
        });
    }

    onChangePositionPortfolio(e) {
        this.setState({
            position_portfolio: e.target.value
        });
    }

    onChangePositionCustodian(e) {
        this.setState({
            position_custodian: e.target.value
        });
    }

    onChangePositionType(e) {
        this.setState({
            position_type: e.target.value
        });
    }

    onChangePositionAmount(e) {
        this.setState({
            position_amount: e.target.value
        });
    }

    onChangePositionPrice(e) {
        this.setState({
            position_price: e.target.value
        });
    }

    onSubmit(event) {
    	event.preventDefault();

    	console.log(`Form submitted:`);
    	console.log(`Position Security: ${this.state.position_security}`);
    	console.log(`Position Portfolio: ${this.state.position_portfolio}`);
    	console.log(`Position Custodian: ${this.state.position_custodian}`);
    	console.log(`Position Type: ${this.state.position_type}`);
		console.log(`Position Amount: ${this.state.position_amount}`);
		console.log(`Position Price: ${this.state.position_price}`);

		this.setState( {
			position_security : '',
			position_portfolio : '',
			position_custodian : '',
			position_type : '',
			position_amount : '',
			position_price : ''
		})
    }

	render(){
		return(
			<div style={{marginTop: 10}}>
				<h3>Create New Position</h3>
				<form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Security: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.position_security}
                                onChange={this.onChangePositionSecurity}
                        />
                    </div>
                    <div className="form-group">
                        <label>Portfolio: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.position_portfolio}
                               onChange={this.onChangePositionPortfolio}
                        /> 
                    </div>
                    <div className="form-group">
                        <label>Custodian: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.position_custodian}
                               onChange={this.onChangePositionCustodian}
                        /> 
                    </div>
                    <div className="form-group">
                        <label>Amount: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.position_amount}
                               onChange={this.onChangePositionAmount}
                        /> 
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.position_price}
                               onChange={this.onChangePositionPrice}
                        /> 
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="positionTypes" 
                                    id="positionLong" 
                                    value="Long"
                                    checked={this.state.todo_priority==='Long'} 
                                    onChange={this.onChangePositionType}
                                    />
                            <label className="form-check-label">Long</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="positionTypes" 
                                    id="positionShort" 
                                    value="Short"
                                    checked={this.state.todo_priority==='Short'} 
                                    onChange={this.onChangePositionType}
                                    />
                            <label className="form-check-label">Short</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Position" className="btn btn-primary" />
                    </div>
                </form>						
			</div>
			);
	}
}



export default CreatePosition;
