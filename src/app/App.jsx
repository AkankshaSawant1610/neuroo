import React from 'react';
import { AuthProvider } from '../features/auth/context/AuthContext';
import AppRoutes from './routes';
import '../index.css';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;