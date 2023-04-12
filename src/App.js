import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Courses from './components/courses/Courses';
import Home from './components/Home';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgetPassword from './components/auth/ForgetPassword';
import ResetPassword from './components/auth/ResetPassword';
import Contact from './components/Contact';
import Enroll from './components/payment/Enroll';
import PaymentSuccess from './components/payment/PaymentSuccess';
import Notfound from './components/layouts/Notfound';
import PaymentFail from './components/payment/PaymentFail';
import CoursePage from './components/courses/CoursePage';
import Profile from './components/profile/Profile';
import UpdatePassword from './components/profile/UpdatePassword';
import UpdateProfile from './components/profile/UpdateProfile';
import CreateCourses from './components/admin/CreateCourses';
import Users from './components/admin/Users';
import AdminCourses from './components/admin/AdminCourses';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import User from './redux/actions/user';
import { ProtectedRoute } from 'protected-route-react';
import CourseAction from './redux/actions/course';
import Lectures from './components/admin/Lectures';

function App() {
  // window.addEventListener('contextmenu', e => {
  //   e.preventDefault();
  // });

  const { error, message, isLogged, user, loading } = useSelector(
    state => state.user
  );
  const { courses } = useSelector(state => state.course);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
  }, [dispatch, message, error]);
  useEffect(() => {
    dispatch(User.getUser());
    dispatch(CourseAction.getAllCourses());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Header user={user} isLogged={isLogged} />
      <div className="mt-16 container mx-auto">
        {' '}
        <Routes>
          <Route path="/" element={<Home courses={courses} />} />
          <Route path="/courses" element={<Courses courses={courses} />} />

          <Route
            path="/course/:id"
            element={
              <ProtectedRoute isAuthenticated={isLogged}>
                <CoursePage user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login isLogged={isLogged} />} />
          <Route
            path="/profile"
            element={
              <Profile user={user} loading={loading} isLogged={isLogged} />
            }
          />
          <Route path="/register" element={<Register isLogged={isLogged} />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/changepassword" element={<UpdatePassword />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route
            path="/enroll"
            element={
              // <ProtectedRoute isAuthenticated={isLogged}>
              <Enroll user={user} />
              // </ProtectedRoute>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />

          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/paymentfail" element={<PaymentFail />} />

          {/* Protected Route--------only for admin */}

          {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}

          <Route path="/admin/courses" element={<AdminCourses />} />
          <Route path="/admin/course/:id" element={<Lectures />} />
          <Route path="/admin/createcourse" element={<CreateCourses />} />
          <Route path="/admin/users" element={<Users />} />
        </Routes>
      </div>

      <Footer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
