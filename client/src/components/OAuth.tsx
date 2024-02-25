import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

export default function OAuth() {
  return (
    <div className="w-full flex justify-center items-center gap-2">
      <GoogleOAuthProvider clientId="632331130444-7jm6gjvls1281vdvsj63ib815jadn6ea.apps.googleusercontent.com">
        <GoogleLogin
          theme="outline"
          shape="pill"
          type="icon"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
}
