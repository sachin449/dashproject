// pages/index.js

import { useAuth } from '../context/AuthContext';
import { signInWithGoogle, logout } from '../lib/auth';
import { Dashboard } from '../components/Dashboard';

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={logout} className="btn btn-primary">Logout</button>
          <a href="/profile" className="btn btn-secondary">Profile</a>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}
