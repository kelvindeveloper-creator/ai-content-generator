"use client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { UserSubscriptionProvider } from "@/app/(context)/UserSubscriptionContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test" }}>
      <UserSubscriptionProvider>
        {children}
      </UserSubscriptionProvider>
    </PayPalScriptProvider>
  );
}