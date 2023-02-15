import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // define the array of string
    const sportsData = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
    return (
    // specifies the tag for render the DropDownList component
    <DropDownListComponent id="ddlelement" dataSource={sportsData} placeholder="Select a game"/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
