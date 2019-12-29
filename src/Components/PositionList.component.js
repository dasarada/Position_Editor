import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Position = props => (
    <tr>
        <td className={props.position.position_type  == 'Short' ? 'short' : ''}>{props.position.position_security}</td>
        <td className={props.position.position_type  == 'Short' ? 'short' : ''}>{props.position.position_portfolio}</td>
        <td className={props.position.position_type  == 'Short' ? 'short' : ''}>{props.position.position_custodian}</td>
        <td className={props.position.position_type  == 'Short' ? 'short' : ''}>{props.position.position_type}</td>
        <td className={props.position.position_type  == 'Short' ? 'short' : ''}>{props.position.position_amount}</td>
        <td className={props.position.position_type  == 'Short' ? 'short' : ''}>{props.position.position_price}</td>
        <td>
            <Link to={"/editPosition/"+props.position._id}>Edit</Link>
        </td>
    </tr>
)

class PositionList extends Component
{
	constructor(props){
		super(props);
		this.state = {positions : []};
	}

    componentDidMount() {
        axios.get('http://localhost:4000/positions/')
            .then(response => {
                this.setState({ positions: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    positionList() {
        return this.state.positions.map(function(currentPosition, i){
            return <Position position={currentPosition} key={i} />;
        })
    }

	render(){
		return (
            <div>
                <h3>Positions List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Security</th>
                            <th>Portfolio</th>
                            <th>Custodian</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.positionList() }
                    </tbody>
                </table>
            </div>
        )
    }
}


export default PositionList;