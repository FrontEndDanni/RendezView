import React from 'react';
import '../styling/dashboardpage.css';

function DashboardPage() {
  const schedules = [
    { id: 1, title: 'Schedule 1', date: '2023-06-16', time: '10:00 AM' },
    { id: 2, title: 'Schedule 2', date: '2023-06-17', time: '2:30 PM' },
    { id: 3, title: 'Schedule 3', date: '2023-06-18', time: '9:00 AM' },
    { id: 4, title: 'Schedule 4', date: '2023-06-19', time: '4:00 PM' },
  ];

  return (
    <div className="dashboard">
      <h2>Schedules</h2>
      <div className="schedule-list">
        {schedules.map((schedule) => (
          <div className="schedule-card" key={schedule.id}>
            <h3>{schedule.title}</h3>
            <p>Date: {schedule.date}</p>
            <p>Time: {schedule.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
