import Authentication from "./sections/Authentication";
import { GoogleOAuthProvider } from "@react-oauth/google";
export default function App() {
  return (
    <GoogleOAuthProvider clientId="632331130444-7jm6gjvls1281vdvsj63ib815jadn6ea.apps.googleusercontent.com">
      <Authentication />
    </GoogleOAuthProvider>
  );
}
