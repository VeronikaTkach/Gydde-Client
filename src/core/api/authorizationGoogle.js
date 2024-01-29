// import { LocalStorageItems } from '../constants/LocalStorageItems';
// import { collectSearchParams } from '../helpers/collectSearchParams';
// import googleRequest from '../utils/googleRequestUtils';
// import mainRequest from '../utils/mainRequestUtils';

// export const googleAuthorization = {
//   getToken: async (code) => {
//     const params = collectSearchParams({
//       code: code,
//       client_id: atob(process.env.REACT_APP_GOOGLE_CLIENT_ID),
//       client_secret: atob(process.env.REACT_APP_GOOGLE_SECRET_KEY),
//       redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
//       grant_type: 'authorization_code',
//     });

//     try {
//       const result = await googleRequest.post('', params);
// console.log(result)
//       return result.data.id_token;
//     } catch (error) {
//       console.error(error);
//     }
//   },

//   sendToken: async (idToken) => {
//     const data = {
//       id_token: idToken,
//     };
// console.log(idToken)

//     console.log(`OAuth ${idToken}`);
//     try {
//       const result = await mainRequest.get('/auth/gmail', {
//         headers: {
//           Authorization: `OAuth ${idToken}`,
//         },
//       });
// console.log(result)
//       localStorage.setItem(LocalStorageItems.JwtToken, result.token);
//     } catch (error) {
//       console.error(error);
//     }
//   },
// };
