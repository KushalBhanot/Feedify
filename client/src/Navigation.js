import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';
import googleAuth from './service/auth';
import firebase from './config/firebase-config';
import { googleProvider } from './config/authMethod';
import Axios from 'axios';
// import { Auth } from './context/authContext';

function Navigation(props) {
    // const { state, dispatch } = useContext(Auth);

    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginClickHandler = async (provider) => {
        // setIsLoggedIn(true);

        const res = await googleAuth(provider);
        // auth
        //     .signInWithPopup(provider)
        //     .catch((error) => {
        //         alert(error.message);
        //     })

        console.log(res);

        var user = firebase.auth().currentUser;
        localStorage.setItem("user_id", user.uid);

        if (user != null) {
            const userData = {
                name: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
                uid: user.uid
            }

            // dispatch({ type: "LOGIN", payload: userData });

            console.log(userData);

            Axios.post(`http://localhost:3002/add/user`, userData)
                .then(res => {
                    console.log(res.data);
                })
        }
    }

    const signOutClickHandler = async (provider) => {
        // setIsLoggedIn(false);

        firebase.auth().signOut().then(() => {
            localStorage.removeItem("user_id");
            window.location.reload();
            console.log("Signed out the user!");
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <Navbar className="header__controls">
            <Navbar.Brand className="brand__controls" href="https://github.com/KushalBhanot" target="_blank">Feedify</Navbar.Brand>
            {localStorage.getItem("user_id") !== null
                ?
                <button onClick={() => signOutClickHandler(googleProvider)} className="signOut__controls">Sign Out</button>
                :
                <button onClick={() => loginClickHandler(googleProvider)} className="login__controls">Login</button>}
            {/* {isLoggedIn && <button onClick={() => signOutClickHandler(googleProvider)} className="signOut__controls">Sign Out</button>} */}
        </Navbar>
    );
}

export default Navigation;