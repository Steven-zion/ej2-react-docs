import { DateTimePickerComponent, Inject, MaskedDateTime } from '@syncfusion/ej2-react-calendars';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
function App() {
    return <DateTimePickerComponent enableMask={true}><Inject services={[MaskedDateTime]}/></DateTimePickerComponent>;
}
ReactDOM.render(<App />, document.getElementById('element'));
