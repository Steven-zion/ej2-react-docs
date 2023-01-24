// import the daterangepicker component
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    // creates a daterangepicker with min and max property
    minDate = new Date(new Date().getFullYear(), new Date().getMonth(), 15);
    maxDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15);
    render() {
        return <DateRangePickerComponent id="daterangepicker" placeholder='Select a range' min={this.minDate} max={this.maxDate}/>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('element'));
