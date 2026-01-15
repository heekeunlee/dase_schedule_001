import React from 'react';
import ScheduleCard from './ScheduleCard';
import './ScheduleList.css';

const ScheduleList = ({ scheduleData, currentDay, personColor }) => {
    const daySchedule = scheduleData.days[currentDay] || [];

    if (daySchedule.length === 0) {
        return (
            <div className="empty-state">
                <span className="empty-emoji">🎉</span>
                <p>일정이 없는 날이에요!</p>
            </div>
        );
    }

    return (
        <div className="schedule-list">
            {daySchedule.map((item, index) => (
                <ScheduleCard
                    key={index}
                    item={item}
                    color={personColor}
                />
            ))}
        </div>
    );
};

export default ScheduleList;
