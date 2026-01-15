import React, { useState } from 'react';
import Header from './components/Header';
import PersonSwitcher from './components/PersonSwitcher';
import DayTabs from './components/DayTabs';
import ScheduleList from './components/ScheduleList';
import WeeklySchedule from './components/WeeklySchedule';
import { schedules } from './data/schedules';

function App() {
  const [currentPerson, setCurrentPerson] = useState('dawon');
  const [currentDay, setCurrentDay] = useState('mon');
  const [viewMode, setViewMode] = useState('day'); // 'day' or 'week'

  const activeSchedule = schedules[currentPerson];
  const personColor = activeSchedule.color;

  return (
    <div className="app-container">
      <Header />
      <PersonSwitcher
        currentPerson={currentPerson}
        onSwitch={setCurrentPerson}
      />

      <div className="view-toggle-container" style={{ padding: '0 20px', margin: '10px 0', display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={() => setViewMode(viewMode === 'day' ? 'week' : 'day')}
          style={{
            padding: '8px 16px',
            borderRadius: '20px',
            backgroundColor: '#fff',
            border: '1px solid #eee',
            fontSize: '0.9rem',
            fontWeight: '600',
            color: '#555',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          {viewMode === 'day' ? '📅 주간 보기' : '📋 일간 보기'}
        </button>
      </div>

      {viewMode === 'day' ? (
        <>
          <DayTabs
            currentDay={currentDay}
            onSwitch={setCurrentDay}
            currentPersonColor={personColor}
          />
          <main>
            <ScheduleList
              scheduleData={activeSchedule}
              currentDay={currentDay}
              personColor={personColor}
            />
          </main>
        </>
      ) : (
        <main>
          <WeeklySchedule
            scheduleData={activeSchedule}
            personColor={personColor}
          />
        </main>
      )}
    </div>
  );
}

export default App;
