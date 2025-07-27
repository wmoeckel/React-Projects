import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react";
import { createViewWeek, createViewMonthGrid } from '@schedule-x/calendar';
import { createEventModalPlugin } from '@schedule-x/event-modal'; // ✅ Make sure this is installed
import '@schedule-x/theme-default/dist/calendar.css';

export default function Calendar() {
    const calendar = useCalendarApp({
        views: [
            createViewWeek(),
            createViewMonthGrid()
        ],
        events: [
            {
                id: 1,
                title: 'My New Event',
                start: '2025-01-01 00:00',
                end: '2025-01-01 02:00',
                description: 'Sunshower'
            }
        ],
        selectedDate: '2025-01-01',
        plugins: [
            createEventModalPlugin()
        ]
    });

    return (
        <div>
            <p className="space">space</p>
            <h1>Calendar</h1>
            <div>
                <ScheduleXCalendar calendarApp={calendar} />
            </div>
            <div className="footer">
                <h2>Contact:</h2>
                <ul>
                    <li><p>Email: musicscene@gmail.com</p></li>
                    <li className="list"><p>Instagram: @Music_Scene</p></li>
                </ul>
            </div>
        </div>
    );
}
