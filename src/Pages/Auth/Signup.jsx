import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phoneNumber: '',
      address: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      phoneNumber: Yup.string().required('Phone number is required'),
      address: Yup.string().required('Home address is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setTimeout(() => {
        console.log('User registered', values);
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <motion.div 
      className="relative md:bg-[url('./drops.jpg')] bg-center h-screen bg-cover bg-no-repeat flex items-center justify-center"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 md:bg-black opacity-50 z-0"></div>
      <div className="flex flex-col md:flex-row items-stretch justify-center z-10 h-full">

        <motion.div 
          className="flex-1 md:max-w-md h-full rounded-lg overflow-hidden bg-white shadow-lg flex items-center justify-center"
          initial={{ x: -100 }} 
          animate={{ x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <img src={'./watercarry.png'} alt="Water Carrying" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          className="flex-1 md:max-w-md p-6 bg-white rounded-lg shadow-lg"
          initial={{ x: 100 }} 
          animate={{ x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={formik.handleSubmit}>
            <h1 className="text-blue-500 text-3xl text-center font-bold mb-4">SIGNUP</h1>

            <div className='py-2'>
              <label htmlFor="username" className="block font-medium">Username</label>
              <input 
                type="text" 
                id="username" 
                className="border rounded-lg outline-none p-3 w-full" 
                placeholder='username' 
                {...formik.getFieldProps('username')}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500 text-sm">{formik.errors.username}</div>
              ) : null}
            </div>

            <div className='pb-2'>
              <label htmlFor="email" className="block font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                className="border rounded-lg outline-none p-3 w-full" 
                placeholder='email' 
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className='pb-2'>
              <label htmlFor="phoneNumber" className="block font-medium">Phone Number</label>
              <input 
                type="text" 
                id="phoneNumber" 
                className="border rounded-lg outline-none p-3 w-full" 
                placeholder='phone number' 
                {...formik.getFieldProps('phoneNumber')}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-red-500 text-sm">{formik.errors.phoneNumber}</div>
              ) : null}
            </div>

            <div className='pb-2'>
              <label htmlFor="address" className="block font-medium">Home Address</label>
              <input 
                type="text" 
                id="address" 
                className="border rounded-lg outline-none p-3 w-full" 
                placeholder='address' 
                {...formik.getFieldProps('address')}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-red-500 text-sm">{formik.errors.address}</div>
              ) : null}
            </div>

            <div className='pb-4'>
              <label htmlFor="password" className="block font-medium">Password</label>
              <input 
                type="password" 
                id="password" 
                className="border rounded-lg outline-none p-3 w-full" 
                placeholder='password' 
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              ) : null}
            </div>

            <button 
              type="submit" 
              className={`w-full bg-blue-500 text-white p-3 transition-all duration-500 rounded-lg hover:bg-blue-600 ${formik.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={formik.isSubmitting}
            >
              Create Account
            </button>

            <p className="text-sm mt-3">Have an account? <Link to="/login"><span className='text-blue-500 font-bold'>Login</span></Link></p>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Signup;