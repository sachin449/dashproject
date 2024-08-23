"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const ProtectRoute = (WrappedComponent, allowedRoles) => {
  return function ProtectedRouteWrapper(props) {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        try {
          // Retrieve cookies from the document
          const cookieString = document.cookie;
          console.log('Cookies:', cookieString);

          // Find the token cookie
          const tokenCookie = cookieString.split('; ').find(row => row.startsWith('token='));
          if (!tokenCookie) {
            console.log('No token found in cookies');
            router.push('/auth');
            return;
          }

          // Extract the token from the cookie
          const token = tokenCookie.split('=')[1];
          console.log('Retrieved token:', token);

          // Send a request to the /api/user endpoint with the token
          const response = await axios.get('/api/user', {
            headers: { Authorization: `Bearer ${token}` },
          });

          // Get the role from the response
          const { role } = response.data.user;
          console.log('User role:', role);

          // Check if the user's role is allowed to access the route
          if (!allowedRoles.includes(role)) {
            console.log(`Role ${role} not allowed. Redirecting to /auth`);
            router.push('/auth');
          }
        } catch (error) {
          console.error('Auth check error:', error);
          router.push('/auth');
        }
      };

      checkAuth();
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default ProtectRoute;
