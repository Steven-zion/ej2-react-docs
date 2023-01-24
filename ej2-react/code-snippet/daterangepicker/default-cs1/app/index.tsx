{% raw %}



import { DateRangePicker, DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {

    private daterangeInstance: DateRangePicker;

    public componentDidMount() {
        const proxy = this;
        document.onkeyup = (e) => {
            if (e.altKey && e.keyCode === 84 /* t */) {
                // press alt+t to focus the control.
                 proxy.daterangeInstance.element.focus();
            }
        };
    }

    public render() {
        return <DateRangePickerComponent placeholder="Select a range" ref={(scope) => { (this.daterangeInstance as DateRangePicker | null)= scope; }}/>
    }
};
ReactDOM.render(<App />, document.getElementById('element'));


{% endraw %}