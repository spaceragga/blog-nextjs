"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import Spinner from "../../components/Spinner";
import ClientOnly from "../../components/ClientOnly";

const Profile = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      if (user) {
        setLoading(false);
      }
    };
    checkAuthentication();
  }, [user]);

  return (
    <ClientOnly>
      <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center p-24">
        {loading ? (
          <Spinner />
        ) : user ? (
          <p>
            Welcome, {user?.displayName} - you are logged in to the profile page
            - a protected route.
          </p>
        ) : (
          <p>You must be logged in to view this page - protected route.</p>
        )}
      </div>
    </ClientOnly>
  );
};

export default Profile;
