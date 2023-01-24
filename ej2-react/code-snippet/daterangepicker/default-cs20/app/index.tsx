

// import the daterangepicker component
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    return (
        <DateRangePickerComponent id="daterangepicker" placeholder='Select a range' minDays={3} maxDays={7} />
    )
};
ReactDOM.render(<App />, document.getElementById('element'));


