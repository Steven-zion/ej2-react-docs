// import the datepickercomponent
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    dateValue = new Date();
    render() {
        return <DatePickerComponent id="datepicker" value={this.dateValue} format='yyyy-MM-dd' placeholder='Enter date'/>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('element'));
