import react from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Auth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const formData = {
        username: 'emilys',
        password: 'emilyspass',
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
            
            
            if (!response.ok) {
                throw new Error('Sign up failed. Please try again later.');
            } 

            const data = await response.json();
            console.log('Sign up successful:', data);
            localStorage.setItem("token", data.accessToken);
        } catch (error) {
            console.error( error);
            setError(error.message || "An error occurred during sign up.");
        } finally {
            setLoading(false);
        }
    }
    // console.log(formData);





    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <section className="space-y-4 p-6 max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-cyan-300 mb-4">
            <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent">
              Log in
            </span>
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-gray-300">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:border-cyan-300"
                placeholder="First Name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-300">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:border-cyan-300"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Log in
            </button>
          </form>
        </section>
      </div>
    );
};

export default Auth;


// const formData = {
//     username: username,
//     password: password
//   }
  
//   const handleSubmit = aysnc () => {
//     try {
//       const response = await fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       })
      
//       if (!response.ok) {
//         throw new Error("Login failed. Try again later")
//       }
      
//       const data = await response.json();
//       localStorage.setItem("token", data.accessToken)
//       toast.success('Login successful')
//       router.push('/dashboard')
//     } catch (error) {
//       console.error(error)
//       setError(error.message || "Whatever the error message is")
//     } finally {
//       setLoading(false)
//     }
//   }


// async function loginUser(email, password) {
//     try {
//       const response = await fetch('https://example.com/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
  
//       // Check status codes
//       switch (response.status) {
//         case 200:
//           const data = await response.json();
//           console.log('✅ Login successful:', data);
//           break;
  
//         case 400:
//           console.warn('⚠ Bad Request: Missing fields or invalid data');
//           break;
  
//         case 401:
//           console.warn('❌ Unauthorized: Incorrect email or password');
//           break;
  
//         case 403:
//           console.warn('🚫 Forbidden: You are not allowed to log in');
//           break;
  
//         case 404:
//           console.warn('❓ Not Found: Endpoint might be wrong');
//           break;
  
//         case 500:
//           console.error('💥 Server Error: Try again later');
//           break;
  
//         default:
//           console.warn(Unhandled status: ${response.status});
//       }
//     } catch (error) {
//       console.error('Network or parsing error:', error);
//     }
//   }

// https://dummyjson.com/auth/login