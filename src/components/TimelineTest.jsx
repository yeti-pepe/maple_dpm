
import React, { useEffect, useRef, useState } from 'react';
import { DataSet, Timeline } from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.css";


const groups = new DataSet([
    {id: 0, content: 'skill'},
    {id: 1, content: 'charging'},
    {id: 2, content: 'buff'}
]);

const TimelineTest = ({}) => {
    const [timeline, setTimeline] = useState();
    const container = useRef();

    useEffect(() => {
        let timeline = {destroy: () => {}};

        if (container.current) {

            let items = new DataSet([
                {
                    id: 4,
                    content: "Read-only",
                    editable: false,
                    start: "2010-08-26",
                    end: "2010-09-02",
                    group: 2,
                },
                {
                    id: 7,
                    content: "Remove Only",
                    editable: { updateTime: false, updateGroup: false, remove: true },
                    start: "2010-08-31",
                    end: "2010-09-03",
                    group: 0,
                },
                { id: 8, content: "Default", start: "2010-09-04T12:00:00", group: 2 },
            ]);
            var options = {
                editable: true, // default for all items
              };
            timeline = new Timeline(container.current, items, groups, options)
            window.timeline = timeline;
        }

        return () => {
            timeline.destroy();
        }
    },[container.current])

    return (
        <>
            <div ref={container}>
                {/* <Timeline
                    scene={scene}
                    style={{
                        maxHeight: "350px",
                        position: "fixed",
                        left: 0,
                        right: 0,
                        bottom: 0
                    }}
                /> */}
            </div>
        </>
    )
}

export default TimelineTest;