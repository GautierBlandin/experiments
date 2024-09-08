import { CenteredLayout } from '@experiments/shared-ui';
import React from 'react';
import { CounterController } from './counter.controller';

export function FunctionalUseStatePage() {
  return (
    <CenteredLayout>
      <CounterController />
    </CenteredLayout>
  );
}
