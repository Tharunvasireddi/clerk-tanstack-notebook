import {
  SignedIn,
  SignInButton,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { Outlet } from "@tanstack/react-router";

const App = () => {
  return (
    <>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </header>
      <Outlet />
    </>
  );
};

export default App;
