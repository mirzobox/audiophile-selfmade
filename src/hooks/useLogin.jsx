import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase-config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser, setError, setPending } from "../redux/slices/user";

function useLogin() {
  const dispatch = useDispatch();
  function loginWithGoogleProvider() {
    dispatch(setPending(true));
    signInWithPopup(auth, googleProvider)
      .then(({ user }) => {
        toast.success(`Welcome ${user.displayName} !`);
        dispatch(setUser(user));
        dispatch(setPending(false));
        dispatch(setError(false));
      })
      .catch(({ message }) => {
        toast.error(message);
        dispatch(setPending(true));
        dispatch(setError(true));
      });
  }
  // Signin
  function loginWithDisplayNameAndEmailAndPassword({
    displayName,
    email,
    password,
  }) {
    dispatch(setPending(false));
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName });
        toast.success(`Welcome ${user.displayName} !`);
        dispatch(setUser(user));
        dispatch(setPending(false));
        dispatch(setError(false));
      })
      .catch(({ message }) => {
        toast.error(message);
        dispatch(setPending(true));
        dispatch(setError(true));
      });
  }
  // Login
  function loginWithEmailAndPassword({ email, password }) {
    dispatch(setPending(false));
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        toast.success("Welcome come back )");
        dispatch(setUser(user));
        dispatch(setPending(false));
        dispatch(setError(false));
      })
      .catch(({ message }) => {
        toast.error(message);
        dispatch(setPending(true));
        dispatch(setError(true));
      });
  }

  return {
    loginWithGoogleProvider,
    loginWithDisplayNameAndEmailAndPassword,
    loginWithEmailAndPassword,
  };
}

export default useLogin;
