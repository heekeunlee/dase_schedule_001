import React, { useState } from 'react';
import Header from './components/Header';
import PersonSwitcher from './components/PersonSwitcher';
import DayTabs from './components/DayTabs';
import ScheduleList from './components/ScheduleList';
import { schedules } from './data/schedules';

function App() {
  const [currentPerson, setCurrentPerson] = useState('dawon');
  const [currentDay, setCurrentDay] = useState('mon');

  const activeSchedule = schedules[currentPerson];
  const personColor = activeSchedule.color;

  return (
    <div className="app-container">
      <Header />
      <PersonSwitcher
        currentPerson={currentPerson}
        onSwitch={setCurrentPerson}
      />
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
    </div>
  );
}

export default App;
