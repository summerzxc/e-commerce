// components/withAdminAuth.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

const withAdminAuth = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get("token");
      if (!token) {
        router.push("/auth/login");
        return;
      }

      try {
        const decoded = jwtDecode(token);
        console.log(decoded);
        if (decoded.isAdmin) {
          setIsLoading(false);
        } else {
          router.push("/auth/login");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        router.push("/auth/login");
      }
    }, [router]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAdminAuth;
