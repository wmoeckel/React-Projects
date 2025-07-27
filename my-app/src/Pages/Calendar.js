import { ScheduleXCalendar, useCalendarApp} from "@schedule-x/react";
import {createViewWeek, createViewMonthGrid} from '@schedule-x/calendar';
import '@schedule-x/theme-default/dist/calendar.css'
export default function Calendar() {
    const calendar:calendarApp = useCalendarApp(config: {
        views:[
            createViewWeek,
            createViewMonthGrid
        ],
        events:[
            {
                id: 1,
                title: 'My NEw Event',
                start: '2025-01-01 00:00',
                end: '2025-01-01 02:00',
            }
        ],
        selectedDate:'2025-01-01'
    })
    return(
        <div>
            <p class="space">space</p>
            <h1>Calendar</h1>
            <div>
                <ScheduleXCalendar calendarApp={calendar}/>
            </div>
            <div class="footer">
                    <h2>Contact:</h2>
                    <ul>
                        <li><p>Email: musicscene@gmail.com</p></li>
                        <li class="list"><p>Instagram: @Music_Scene</p></li>
                    </ul>
            </div>
        </div>
    );
}