"use client";

export type UserSubscription = {
  plan: "free" | "pro";
  // Add other fields if needed, e.g. wordsUsed, expiry, etc.
};
import React, { createContext, useState } from "react";

export const UserSubscriptionContext = createContext<{
  userSubscription: UserSubscription | null;
  setUserSubscription: React.Dispatch<React.SetStateAction<UserSubscription | null>>;
}>({
  userSubscription: null,
  setUserSubscription: () => {},
});

export function UserSubscriptionProvider({ children }: { children: React.ReactNode }) {
  const [userSubscription, setUserSubscription] = useState<UserSubscription | null>(null);

  return (
    <UserSubscriptionContext.Provider value={{ userSubscription, setUserSubscription }}>
      {children}
    </UserSubscriptionContext.Provider>
  );
}
