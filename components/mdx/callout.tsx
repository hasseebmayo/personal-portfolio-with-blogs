import { cn } from '@/lib/utils';
import { Info, TriangleAlert, ShieldAlert } from 'lucide-react';

interface CalloutProps {
 children?: React.ReactNode;
 type?: 'default' | 'warning' | 'danger';
}

export function Callout({
 children,

 type = 'default',
 ...props
}: CalloutProps) {
 return (
  <div
   className={cn('my-6 flex items-center rounded-md border-2 border-l-4 p-4', {
    'border-blue-600 bg-gray-50 text-black': type === 'default', // Neutral default
    'border-yellow-600 bg-yellow-100 text-yellow-800': type === 'warning', // Warning
    'border-red-600 bg-red-100 text-red-800': type === 'danger', // Danger
   })}
   {...props}
  >
   <span className="mr-4 text-2xl">
    {type === 'warning' ? (
     <TriangleAlert className="text-yellow-600" />
    ) : type === 'danger' ? (
     <ShieldAlert className="text-red-600" />
    ) : (
     <Info className="text-gray-600" />
    )}
   </span>
   <div>{children}</div>
  </div>
 );
}
