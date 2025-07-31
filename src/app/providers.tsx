'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {/* before rendering children, qwe wait till state updates */}
        {children}
      </PersistGate>
    </Provider>
  );
}
