import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const TaskSection = () => {
  return (
    <div className="fixed top-16 right-4 z-40 w-64">
      <Card className="bg-white shadow-lg border border-gray-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Task Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Completed</span>
            </div>
            <span className="font-medium">12</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-yellow-500" />
              <span>Pending</span>
            </div>
            <span className="font-medium">5</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};