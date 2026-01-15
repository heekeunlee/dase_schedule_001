import React, { useRef, useEffect } from 'react';
import './DayTabs.css';

const days = [
    { id: 'mon', label: '월' },
    { id: 'tue', label: '화' },
    { id: 'wed', label: '수' },
    { id: 'thu', label: '목' },
    { id: 'fri', label: '금' },
    { id: 'sat', label: '토' },
    { id: 'sun', label: '일' },
];

const DayTabs = ({ currentDay, onSwitch, currentPersonColor }) => {
    const tabsRef = useRef(null);
    const activeTabRef = useRef(null);

    useEffect(() => {
        if (activeTabRef.current) {
            activeTabRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }, [currentDay]);

    return (
        <div className="day-tabs-container">
            <div className="day-tabs" ref={tabsRef}>
                {days.map((day) => (
                    <button
                        key={day.id}
                        ref={currentDay === day.id ? activeTabRef : null}
                        className={`day-tab ${currentDay === day.id ? 'active' : ''}`}
                        onClick={() => onSwitch(day.id)}
                        style={currentDay === day.id ? { backgroundColor: currentPersonColor, color: '#fff' } : {}}
                    >
                        {day.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DayTabs;
