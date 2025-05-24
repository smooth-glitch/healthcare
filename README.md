
# React Healthcare Dashboard (Assignment - May 2025)

## Project Checklist

- [ ] Project initialized with React (create-react-app or Vite)
- [ ] Folder structure created
- [ ] App.js layout built (header, sidebar, main content)
- [ ] Sidebar component implemented
- [ ] Header component implemented
- [ ] DashboardMainContent with subcomponents scaffolded
- [ ] Mock data files created
- [ ] Components receive and display mock data via props
- [ ] Responsive styling added (media queries, flex/grid)
- [ ] Visual design matches reference image
- [ ] Hosted online (Vercel, Netlify, etc.)
- [ ] Repository pushed to GitHub

---

## Folder Structure

```
/src
  /components
    Header.jsx
    Sidebar.jsx
    DashboardMainContent.jsx
    DashboardOverview.jsx
    AnatomySection.jsx
    HealthStatusCards.jsx
    CalendarView.jsx
    UpcomingSchedule.jsx
    ActivityFeed.jsx
    SimpleAppointmentCard.jsx
  /data
    appointments.js
    healthData.js
    calendar.js
    navigation.js
  /styles
    App.css
    Header.css
    Sidebar.css
  App.js
  index.js
```

---

## Component Breakdown

| Component                | Status | Description |
|--------------------------|--------|-------------|
| App                      | ⬜️      | Root layout |
| Header                   | ⬜️      | Top bar: logo, search, profile |
| Sidebar                  | ⬜️      | Left nav links with icons |
| DashboardMainContent     | ⬜️      | Main content container |
| DashboardOverview        | ⬜️      | Summary overview |
| AnatomySection           | ⬜️      | Body illustration + health indicators |
| HealthStatusCards        | ⬜️      | Status cards (lungs, teeth, bone) |
| CalendarView             | ⬜️      | Static calendar + appointment data |
| UpcomingSchedule         | ⬜️      | Organized daily schedule |
| ActivityFeed             | ⬜️      | Visual activity (static bar chart) |
| SimpleAppointmentCard    | ⬜️      | Reusable card component for schedule |

---

## Technical Decisions

| Area                | Choice        | Notes |
|---------------------|---------------|-------|
| React setup         | create-react-app | Beginner friendly |
| Styling             | CSS / CSS Modules | Based on comfort level |
| Icon Library        | Font Awesome / Lucide | Based on availability |
| Deployment Target   | Vercel         | Fast, React-optimized |
| Data Format         | JS modules     | Easier to import and modify |

---

## Notes

- Use placeholder or open-source images for anatomy illustration.
- Match typography and colors from design closely.
