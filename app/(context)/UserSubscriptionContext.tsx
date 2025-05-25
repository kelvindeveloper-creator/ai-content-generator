"use client";
import React, { createContext, useState } from "react";

export const UserSubscriptionContext = createContext({
  userSubscription: null,
  setUserSubscription: (_: any) => {},
});

export function UserSubscriptionProvider({ children }: { children: React.ReactNode }) {
  const [userSubscription, setUserSubscription] = useState(null);

  return (
    <UserSubscriptionContext.Provider value={{ userSubscription, setUserSubscription }}>
      {children}
    </UserSubscriptionContext.Provider>
  );
}