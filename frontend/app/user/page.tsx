"use client";
import { useOCAuth } from "@opencampus/ocid-connect-js";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

interface DecodedToken {
  user_id: number;
  eth_address: string;
  edu_username: string;
  iss: string;
  iat: number;
  exp: number;
  aud: string;
  [key: string]: any;
}

const UserPage = () => {
  const { authState } = useOCAuth();
  const router = useRouter();

  if (authState.error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 p-4 rounded-md shadow-md">
          <p className="text-red-600">Error: {authState.error.message}</p>
        </div>
      </div>
    );
  } else {
    let userInfo: DecodedToken | null = null;

    if (authState.idToken) {
      userInfo = jwtDecode<DecodedToken>(authState.idToken);
    }

    return (
      <div className="App min-h-screen flex flex-col items-center justify-between">
        hi
      </div>
    );
  }
};

export default UserPage;
