{% raw %}
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    let daterangeInstance;
    React.useEffect(() => {
        const proxy = this;
        document.onkeyup = (e) => {
            if (e.altKey && e.keyCode === 84 /* t */) {
                // press alt+t to focus the control.
                proxy.daterangeInstance.element.focus();
            }
        };
    }, []);
    return <DateRangePickerComponent placeholder="Select a range" ref={(scope) => { daterangeInstance = scope; }}/>;
}
;
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}