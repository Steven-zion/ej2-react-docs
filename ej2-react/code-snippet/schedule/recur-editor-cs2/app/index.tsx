import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { RecurrenceEditorComponent, RecurrenceEditorChangeEventArgs }
  from '@syncfusion/ej2-react-schedule';

function App() {
  let recObject: RecurrenceEditorComponent;
  React.useEffect(() => {
    let outputElement: HTMLElement = document.querySelector('#rule-output') as HTMLElement;
    recObject.setRecurrenceRule('FREQ=DAILY;INTERVAL=2;COUNT=8');
    outputElement.innerText = recObject.value as string;
  }, []);
  function onChange(args: RecurrenceEditorChangeEventArgs): void {
    let outputElement: HTMLElement = document.querySelector('#rule-output') as HTMLElement;
    outputElement.innerText = args.value;
  }
  return (<div className='content-wrapper recurrence-editor-wrap'>
    <div style={{ paddingBottom: '15px' }}>
      <label>Rule Output</label>
      <div className='rule-output-container'>
        <div id='rule-output'></div>
      </div>
    </div>
    <div className='RecurrenceEditor'>
      <RecurrenceEditorComponent id='RecurrenceEditor' ref={t => recObject = t} change={onChange}></RecurrenceEditorComponent>
    </div>
  </div>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



