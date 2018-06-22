import React, { Component } from 'react';
import '../../components/assert/style.css';
import Datepicker from '../../components/Datepicker';

class Home_page1 extends Component{

    render(){
        return(
            <div>
                <div className="card border-dark mb-3" id='border'>
                    <div className="card-header">Filter Details</div>
                        <div className="card-body text-dark">
                            <div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlInput1">Date:</label>
                                            <Datepicker/>

                                        </div>



                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect1">Select Lab:</label>
                                            <select className="form-control" id="exampleFormControlSelect1">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                 </div>

                            </div>
                        </div>
                    </div>
                </div>
    );


    }
}

export default Home_page1;