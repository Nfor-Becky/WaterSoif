import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      // Simulate a login request (replace with actual API call)
      setTimeout(() => {
        if (values.username === 'user' && values.password === 'pass') {
          // Redirect or perform actions on successful login
          console.log('Login successful');
        } else {
          setErrors({ password: 'Invalid username or password' });
        }
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <div className="relative md:bg-[url('./drops.jpg')] bg-center h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <div className="absolute inset-0 md:bg-black opacity-50 z-0"></div>
      <div className="relative flex items-center md:h-[70vh] h-[40vh] md:max-w-4xl bg-white rounded-xl md:shadow-lg z-10">
        <div className="hidden md:flex md:flex-1 h-full rounded-xl bg-[url('./drops.jpg')] bg-cover bg-no-repeat p-4">
          <img src={'./watercarry.png'} alt="Water Carrying" className="w-full h-auto rounded-sm" />
        </div>
        <div className="md:flex-1 md:p-4 w-[300px] p-10 md:shadow-none shadow-2xl">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="text-blue-500 text-2xl text-center font-bold">LOGIN</h1>
            <div className='py-2'>
              <label htmlFor="username" className="block font-medium">Username</label>
              <input 
                type="text" 
                id="username" 
                className="border rounded outline-none p-2 w-full" 
                placeholder='username' 
                {...formik.getFieldProps('username')}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500 text-sm">{formik.errors.username}</div>
              ) : null}
            </div>
            <div className='pb-4'>
              <label htmlFor="password" className="block font-medium">Password</label>
              <input 
                type="password" 
                id="password" 
                className="border rounded outline-none p-2 w-full" 
                placeholder='password' 
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              ) : null}
            </div>
            <button 
              type="submit" 
              className={`w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all duration-700 ${formik.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Logging in...' : 'Login'}
            </button>
            <p className="text-sm">Don't have an account? <Link to="/signup"><span className='text-blue-500 font-bold'>SignUp</span></Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;