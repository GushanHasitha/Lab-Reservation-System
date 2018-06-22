import React, { Component } from 'react';
import '../assert/style.css';
class Home_page2 extends Component{
    constructor(){
        super();
        this.state = {
            customers: []
        }
    }

    componentDidMount(){
        fetch('api/customers')
            .then(res => res.json())
            .then(customers => this.setState({customers},() => console.log("customers fetch..",customers)))
    }

    render(){
        return(
            <div>
                <div className="card border-dark mb-3">
                    <div className="card-header">Reservation Table</div>
                    <div className="card-body text-dark">
                        <table className="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">08:00-09:00</th>
                                <th scope="col">09:00-10:00</th>
                                <th scope="col">10:00-11:00</th>
                                <th scope="col">11:00-12:00</th>
                                <th scope="col">Intervel</th>
                                <th scope="col">13:00-14:00</th>
                                <th scope="col">14:00-15:00</th>
                                <th scope="col">15:00-16:00</th>
                                <th scope="col">16:00-17:00</th>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>

                            </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        );


    }
}

export default Home_page2;