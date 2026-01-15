import React from 'react';
import './WeeklySchedule.css';

const days = [
    { id: 'mon', label: '월' },
    { id: 'tue', label: '화' },
    { id: 'wed', label: '수' },
    { id: 'thu', label: '목' },
    { id: 'fri', label: '금' },
    { id: 'sat', label: '토' },
    { id: 'sun', label: '일' },
];

const timeSlots = [];
for (let h = 9; h <= 21; h++) {
    timeSlots.push(`${h}:00`);
    timeSlots.push(`${h}:30`);
}

const WeeklySchedule = ({ scheduleData, personColor }) => {
    // Helper to calculate grid row based on time
    const getGridRow = (timeStr) => {
        const [hours, minutes] = timeStr.split(':').map(Number);
        const startHour = 9;
        // Each hour is 2 slots (30 mins each). Starting from 9:00 at row 2 (row 1 is header)
        // Formula: (hours - startHour) * 2 + (minutes / 30) + 2
        return (hours - startHour) * 2 + (minutes / 30) + 2;
    };

    return (
        <div className="weekly-schedule-container">
            <div className="weekly-grid">
                {/* Header Row */}
                <div className="grid-header-cell time-col"></div>
                {days.map(day => (
                    <div key={day.id} className="grid-header-cell">{day.label}</div>
                ))}

                {/* Time Slots Background */}
                {timeSlots.map((time, index) => (
                    <React.Fragment key={time}>
                        <div className="grid-time-cell" style={{ gridRow: index + 2 }}>
                            {time.endsWith('00') ? time : ''}
                        </div>
                        {days.map(day => (
                            <div key={`${day.id}-${time}`} className="grid-cell" style={{ gridRow: index + 2 }}></div>
                        ))}
                    </React.Fragment>
                ))}

                {/* Events */}
                {days.map((day, dayIndex) => {
                    const dayEvents = scheduleData.days[day.id] || [];
                    return dayEvents.map((event, eventIndex) => {
                        const startRow = getGridRow(event.start);
                        const endRow = getGridRow(event.end);

                        return (
                            <div
                                key={`${day.id}-${eventIndex}`}
                                className="schedule-event-block"
                                style={{
                                    gridColumn: dayIndex + 2, // +2 because col 1 is time
                                    gridRowStart: startRow,
                                    gridRowEnd: endRow,
                                    backgroundColor: personColor,
                                    opacity: 0.9
                                }}
                            >
                                <div className="event-title">{event.title}</div>
                                {event.location && <div className="event-location">{event.location}</div>}
                                <div className="event-time">{event.start}-{event.end}</div>
                            </div>
                        );
                    });
                })}
            </div>
        </div>
    );
};

export default WeeklySchedule;
