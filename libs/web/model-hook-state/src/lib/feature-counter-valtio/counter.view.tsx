import React from 'react';
import { Button } from '@experiments/shared-ui';

interface CounterViewProps {
  count: number;
  doubled?: number;
  increment: () => void;
}

export const CounterView: React.FC<CounterViewProps> = ({ count, doubled, increment }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Counter</h2>
      <p className="text-xl mb-6 text-gray-600">
        Current count: <span className="font-semibold">{count}</span>
      </p>
      <p className="text-xl mb-6 text-gray-600">
        Current doubled: <span className="font-semibold">{doubled}</span>
      </p>
      <Button
        onClick={increment}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Increment
      </Button>
    </div>
  );
};
