import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './App.css';
import Footer from 'components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { QuizContextProvider } from 'context/quiz/QuizContext';
import AppRoutes from 'routes/AppRoutes';
import { connect } from 'react-redux';
import { LogOut } from 'store/actions/authAction';

function App({ dispatch }) {
  const history = useHistory();
  const check = async () => {
    const Token = JSON.parse(localStorage?.getItem('token'));
    if (Token) {
      const decodedJwt = await jwt_decode(Token);
      if (decodedJwt.exp * 1000 < Date.now()) {
        toast.info('Your session has expired. Please login again.');
        localStorage.clear();
        window.location.reload();
        dispatch(LogOut());
        history.push('/');
      }
    } else {
      dispatch(LogOut());
      history.push('/');
    }
  };
  //  checking if the user's token expired or not
  useEffect(() => {
    check();
  }, []);

  return (
    <QuizContextProvider>
      <ToastContainer />

      {/* <Layout>  */}
      <div
        style={{
          background: '#000000',
        }}
      >
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
      {/* </Layout> */}
    </QuizContextProvider>
  );
}
const mapDispatchToProps = dispatch => {
  return dispatch;
};
export default connect(mapDispatchToProps)(App);
