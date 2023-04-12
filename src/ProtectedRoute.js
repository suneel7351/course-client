import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ path, element }) {
  const isAuthenticated = true; // Replace with your authentication logic

  return (
    <Route
      path={path}
      element={isAuthenticated ? element : <Navigate to="/login" replace />}
    />
  );
}
export default ProtectedRoute;
