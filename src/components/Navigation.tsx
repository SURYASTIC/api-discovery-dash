import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/', label: 'Tasks' },
  { path: '/orders', label: 'Orders' },
  { path: '/task-reporting', label: 'Task Reporting' },
  { path: '/ip-data', label: 'IP Data' },
  { path: '/asrs', label: 'ASRs' },
  { path: '/quick-start', label: 'Quick Start' },
  { path: '/transaction-status', label: 'Transaction Status' },
  { path: '/settings', label: 'Settings' },
  { path: '/enhanced-search', label: 'Enhanced Search' },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-[#FEF7CD] to-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-900">BPM</span>
              <span className="text-xl text-gray-700">Portal</span>
            </Link>
          </div>
          <div className="flex space-x-4 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'nav-link whitespace-nowrap hover:bg-blue-50 rounded-md',
                  location.pathname === item.path && 'active-nav-link bg-blue-50'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};