import { CenteredLayout } from '@experiments/shared-ui';
import React from 'react';
import { CounterController } from './counter.controller';

export function ValtioPage() {
  return (
    <CenteredLayout>
      <CounterController />
    </CenteredLayout>
  );
}
