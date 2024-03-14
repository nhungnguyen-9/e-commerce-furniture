// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import axios from "axios";

// export default NextAuth({
//     session: {
//         strategy: 'jwt'
//     },
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "email" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials, req) {
//                 console.log('Credentials:', credentials); // Log input credentials
//                 try {
//                     const response = await axios.post("http://localhost:8017/api/auth/login", credentials);
//                     console.log('Response:', response.data); // Log response data
//                     const user = response.data;
//                     if (!user) {
//                         console.error('No user returned'); // Log if no user is returned
//                         throw new Error('Email hoặc mật khẩu không đúng.');
//                     }
//                     return user;
//                 } catch (error) {
//                     console.error('Error:', error); // Log any error that occurs
//                     throw new Error(error.response?.data?.message || "Có lỗi xảy ra trong quá trình xác thực!");
//                 }
//             }
//         })
//     ],
//     pages: {
//         signIn: '/login'
//     },
//     secret: 'nhaxinh'
// });

// test next-auth