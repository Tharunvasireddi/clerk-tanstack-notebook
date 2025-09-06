import {
  SignedIn,
  SignInButton,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const App = () => {
  return (
   <header>
    <SignedOut>
      <SignInButton/>
    </SignedOut>
   </header>
  );
};

export default App;
