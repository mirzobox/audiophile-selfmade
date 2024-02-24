import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { toast } from "react-toastify";
import SignOutIcon from "../assets/shared/desktop/icon-logout.svg";

function AuthManager() {
  function out() {
    const confirmation = confirm("Do you want to out Audiophile site ?");
    confirmation &&
      signOut(auth)
        .then(() => toast.success("Signout succesfully :)"))
        .catch(({ message }) => {
          toast.error(message);
        });
  }
  return (
    <button
      className="text-white-50 ml-6 font-bold hover:underline"
      title="Click and signout"
      onClick={out}
    >
      <img
        className="h-6 w-6 object-contain"
        src={SignOutIcon}
        alt="Signout icon"
        width="24"
        height="24"
      />
    </button>
  );
}

export default AuthManager;
