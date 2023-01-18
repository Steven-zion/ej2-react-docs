


import { world_map } from 'world-map.ts';
import { population_density } from 'data.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';

ReactDOM.render(
            <MapsComponent id="maps">
                <LayersDirective>
                    <LayerDirective shapeData={world_map} shapeDataPath='name' shapePropertyPath='name'
                        dataSource={population_density}
                        shapeSettings={ {
                            colorValuePath: 'density',
                            colorMapping: [
                            {
                                from: 0, to: 100, color: 'skyblue',
                            },
                            {
                                from: 101, to: 200, color: 'blue',
                            },
                            {
                                color: 'green'
                            } ]
                        } }>
                    </LayerDirective>
                </LayersDirective>
            </MapsComponent>,
            document.getElementById("maps") as HTMLElement
);

