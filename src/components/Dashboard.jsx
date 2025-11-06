import { useMemo } from 'react';
import { CheckCircle2, Clock, Loader2, Megaphone, CalendarCheck } from 'lucide-react';

const sampleTasks = [
  { id: 1, title: 'Prepare sprint report', status: 'Pending' },
  { id: 2, title: 'Client follow-up', status: 'In Progress' },
  { id: 3, title: 'Update onboarding docs', status: 'Done' },
  { id: 4, title: 'Team standup notes', status: 'Pending' },
];

const attendance = [
  { name: 'Nami', present: true },
  { name: 'Zoro', present: true },
  { name: 'Sanji', present: false },
  { name: 'Usopp', present: true },
  { name: 'Robin', present: true },
];

const announcements = [
  { id: 1, text: 'Treasure hunt Friday! Dress code: Straw Hats.', date: '2025-11-05' },
  { id: 2, text: 'Quarterly review next week. Bring metrics.', date: '2025-11-10' },
];

export default function Dashboard() {
  const summary = useMemo(() => {
    const total = sampleTasks.length;
    const done = sampleTasks.filter(t => t.status === 'Done').length;
    const attendanceRate = Math.round(
      (attendance.filter(a => a.present).length / attendance.length) * 100
    );
    return { total, done, attendanceRate };
  }, []);

  return (
    <section id="dashboard" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">🗺️</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Dashboard</h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
          <div className="flex items-center gap-2 text-blue-800"><CheckCircle2 className="h-5 w-5" /> Tasks Done</div>
          <p className="text-3xl font-extrabold text-blue-900 mt-2">{summary.done}/{summary.total}</p>
        </div>
        <div className="p-4 rounded-xl bg-yellow-50 border border-yellow-100">
          <div className="flex items-center gap-2 text-yellow-800"><CalendarCheck className="h-5 w-5" /> Attendance Rate</div>
          <p className="text-3xl font-extrabold text-yellow-900 mt-2">{summary.attendanceRate}%</p>
        </div>
        <div className="p-4 rounded-xl bg-red-50 border border-red-100">
          <div className="flex items-center gap-2 text-red-800"><Megaphone className="h-5 w-5" /> Announcements</div>
          <p className="text-3xl font-extrabold text-red-900 mt-2">{announcements.length}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-5 rounded-xl border bg-white shadow-sm">
          <h3 className="font-semibold text-blue-900 mb-4 flex items-center gap-2"><Clock className="h-5 w-5 text-blue-600" /> Task List</h3>
          <ul className="space-y-3">
            {sampleTasks.map(task => (
              <li key={task.id} className="flex items-center justify-between p-3 rounded-lg border bg-blue-50/50">
                <span className="text-blue-900 font-medium">{task.title}</span>
                <span
                  className={
                    'px-3 py-1 rounded-full text-xs font-semibold ' +
                    (task.status === 'Done'
                      ? 'bg-green-100 text-green-800'
                      : task.status === 'In Progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-700')
                  }
                >
                  {task.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <div className="p-5 rounded-xl border bg-white shadow-sm">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2"><Loader2 className="h-5 w-5 text-red-500" /> Announcements</h3>
            <ul className="space-y-3">
              {announcements.map(a => (
                <li key={a.id} className="p-3 rounded-lg bg-yellow-50 border border-yellow-100">
                  <p className="text-blue-900 text-sm">{a.text}</p>
                  <p className="text-xs text-blue-900/60 mt-1">{a.date}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-xl border bg-white shadow-sm">
            <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2"><CalendarCheck className="h-5 w-5 text-blue-500" /> Attendance</h3>
            <ul className="space-y-2">
              {attendance.map(a => (
                <li key={a.name} className="flex items-center justify-between p-2 rounded-md bg-blue-50/60">
                  <span className="text-blue-900">{a.name}</span>
                  <span className={
                    'text-xs font-semibold px-2 py-1 rounded-full ' +
                    (a.present ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800')
                  }>{a.present ? 'Present' : 'Absent'}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
