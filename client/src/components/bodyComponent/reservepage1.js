import React, { Component } from 'react';
import '../assert/style.css';
import Datepicker from './Datepicker';

class Reserve_panel1 extends Component{
    constructor(props) {
        super(props);
        this.state = {date: '',lab: 'Lab C',time:'08:00-09:00'};
        this.handledate = this.handledate.bind(this);
        this.handletime = this.handletime.bind(this);
        this.onstartDateChanged = this.onstartDateChanged.bind(this);


    }


    handledate(event) {
        console.log(event.target.value);

        this.setState({lab: event.target.value});
    }
    handletime(event) {
        console.log(event.target.value);
        this.setState({time: event.target.value});
    }
    onstartDateChanged(newData1){
        console.log(Datepicker.getState());

    }
    render(){
        return(
            <div>
                <div className="card border-dark mb-3">
                    <div className="card-header">Filter Details</div>
                    <div className="card-body text-dark">

                        <div>
                            <form>
                                <div className="row">

                                    <div className="col-md-3">

                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlInput1">Date:</label>
                                            <Datepicker data={this.state.startDate} onstartDateChanged={this.onstartDateChanged} />

                                        </div>



                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect1">Select Lab:</label>
                                            <select className="form-control" id="exampleFormControlSelect1" name="labname" value={this.state.lab} onChange={this.handledate} >
                                                <option value="Lab A">Lab A</option>
                                                <option value="Lab B">Lab B</option>
                                                <option value="Lab C">Lab C</option>
                                                <option value="Lab D">Lab D</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlSelect1" value={this.state.time} >Time Slot:</label>
                                            <select className="form-control" id="exampleFormControlSelect1" name="labtime" onChange={this.handletime}>
                                                <option value="08.00-09.00">08.00-09.00</option>
                                                <option value="09.00-10.00">09.00-10.00</option>
                                                <option value="10.00-11.00">10.00-11.00</option>
                                                <option value="11.00-12.00">11.00-12.00</option>
                                                <option value="13.00-14.00">13.00-14.00</option>
                                                <option value="14.00-15.00">14.00-15.00</option>
                                                <option value="15.00-16.00">15.00-16.00</option>
                                                <option value="16.00-17.00">16.00-17.00</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <br/>
                                            <button type="button" className="btn btn-default">Check Avalability</button>

                                        </div>

                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="alert alert-success text-center">
                                            <strong>Avalable!</strong> Indicates a successful or positive action.
                                        </div>
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col-md-12">
                                        <div align="center">
                                            <button type="submit" className="btn btn-primary">RESERVE</button>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );


    }
}

export default Reserve_panel1;