import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Datepicker extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        minDate={moment()}
        maxDate={moment().add(14, "days")}
        placeholderText="Select a date"
        className="form-control"
        name="labdate"
            />;
    }
}

export default Datepicker;

