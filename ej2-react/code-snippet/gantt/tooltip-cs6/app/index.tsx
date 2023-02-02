

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, EditSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
   child: 'subtasks'
  };
  public editOptions: EditSettingsModel = {
    allowTaskbarEditing: true
  };
  public tooltipTemplate(props:any) {
    return (<div>Duration : {props.duration}</div>)
  };
  public template: any = this.tooltipTemplate;
  public tooltipSettings: any = {
     editing: this.template.bind(this)
  };
    render() {
        return <GanttComponent dataSource={data} taskFields={this.taskFields}
           tooltipSettings={this.tooltipSettings} editSettings={this.editOptions} height = '450px'>
            <Inject services={[Edit]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));

