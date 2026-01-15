import React from 'react';
import './ScheduleCard.css';

const ScheduleCard = ({ item, color }) => {
    const isSubTask = item.type === 'sub-task';

    return (
        <div
            className={`schedule-card ${isSubTask ? 'sub-task' : ''}`}
            style={{ borderLeftColor: color }}
        >
            <div className="time-column">
                <span className="start-time">{item.start}</span>
                <span className="end-time">{item.end}</span>
            </div>
            <div className="content-column">
                <h3 className="card-title">{item.title}</h3>
                <div className="card-details">
                    {item.location && <span className="location-badge">{item.location}</span>}
                    {item.note && <span className="note-text">{item.note}</span>}
                </div>
            </div>
        </div>
    );
};

export default ScheduleCard;
