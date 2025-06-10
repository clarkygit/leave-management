//MAIN MENU
export const MainMenuData = [
  { 
    id: 1,
    path: "/dashboard",
    label: "Dashboard",
    icon:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
            </svg> 
  },
  { 
    id: 2,
    path: "/",
    label: "New Test",
    icon:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm.75 7a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5A.75.75 0 0 0 4.75 9Zm2.5-1.75a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0v-4Zm4-3.25a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75Z" clipRule="evenodd" />
            </svg> 
  },
   { 
    id: 3,
    path: "/",
    label: "Leave Request",
    icon:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M5.75 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5 10.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM10.25 7.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.25 8.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5Z" />
                <path fillRule="evenodd" d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1ZM3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V7Z" clipRule="evenodd" />
            </svg>
  },
  { 
    id: 4,
    path: "/",
    label: "Team",
    icon:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10.9 12.006c.11.542-.348.994-.9.994H2c-.553 0-1.01-.452-.902-.994a5.002 5.002 0 0 1 9.803 0ZM14.002 12h-1.59a2.556 2.556 0 0 0-.04-.29 6.476 6.476 0 0 0-1.167-2.603 3.002 3.002 0 0 1 3.633 1.911c.18.522-.283.982-.836.982ZM12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            </svg>
  },
  { 
    id: 5,
    path: "/",
    label: "Export",
    icon:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
                <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
            </svg>
  },
];


// SETTINGS MENU
export const SettingsMenuData = [
    {
        id: 1,
        path: "/",
        icon:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path d="M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z" />
                </svg>,
        label: "Dark Mode",
    },
    {
        id: 2,
        path: "/",
        icon:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848l.186-1.858Zm-.177 7.567-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997Z" clipRule="evenodd" />
                </svg>,
        label: "Settings",
    }
]


//DASHBOARD STATS
export const dashboardStats = [
    {
        title:"Vacation Balance",
        balance: "22",
        history: "3 taken this year",
        active: true,
    },
    {
        title:"PTO Balance",
        balance: "10",
        history: "5 taken this year",
        active: true,
    },
    {
        title:"Sick Leave Balance",
        balance: "14",
        history: "0 taken this year",
        active: true,
    },
    {
        title:"Maternity Balance",
        balance: "90",
        history: "0 taken this year",
        active: false,
    }
];


//LEAVE HISTORY
export const leaveHistory = [
    { id: 13894, type: 'Paid Time Off', from: new Date('2025-01-12'), to: new Date('2025-01-15'), days: 3, comments: '', status: 'Approved' },
    { id: 40892, type: 'Sick', from: new Date('2025-03-05'), to: new Date('2025-03-06'), days: 2, comments: 'Flu symptoms', status: 'Approved' },
    { id: 94893, type: 'Sick', from: new Date('2025-05-20'), to: new Date('2025-05-20'), days: 1, comments: 'Doctor appointment', status: 'Pending' },
    { id: 40943, type: 'Paid Time Off', from: new Date('2025-07-01'), to: new Date('2025-07-05'), days: 5, comments: 'Summer break', status: 'Pending' },
    { id: 18975, type: 'Vacation', from: new Date('2024-12-20'), to: new Date('2025-01-05'), days: 12, comments: 'Holiday season', status: 'Approved' },
    { id: 64093, type: 'Paid Time Off', from: new Date('2025-02-14'), to: new Date('2025-02-14'), days: 1, comments: 'Personal day', status: 'Rejected' },
    { id: 83729, type: 'Paid Time Off', from: new Date('2025-04-07'), to: new Date('2025-04-11'), days: 5, comments: '', status: 'Approved' },
    { id: 29833, type: 'Sick', from: new Date('2024-11-15'), to: new Date('2024-11-18'), days: 3, comments: 'COVID recovery', status: 'Approved' },
    { id: 90990, type: 'Vacation', from: new Date('2025-08-23'), to: new Date('2025-09-05'), days: 14, comments: 'European trip', status: 'Pending' },
    { id: 67281, type: 'Bereavement', from: new Date('2025-06-10'), to: new Date('2025-06-12'), days: 3, comments: 'Family funeral', status: 'Approved' }
];