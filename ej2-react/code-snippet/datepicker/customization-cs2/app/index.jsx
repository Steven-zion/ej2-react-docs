// import the datepickercomponent
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    function onRenderDayCell(args) {
        if (args.date.getDay() === 0 || args.date.getDay() === 6) {
            // sets isDisabled to true to disable the date.
            args.isDisabled = true;
            // To know about the disabled date customization, you can refer in "styles.css".
        }
    }
    return (
    // specifies the tag for render the DatePicker component
    <DatePickerComponent id="datepicker" cssClass="e-custom-style" renderDayCell={onRenderDayCell} placeholder="Enter date"/>);
}
ReactDOM.render(<App />, document.getElementById('element'));
