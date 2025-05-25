"use client";
import { Button } from '@/components/ui/button';
import React, { useContext, useState } from 'react';
import { Loader2Icon } from 'lucide-react';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { PayPalButtons } from "@paypal/react-paypal-js";

function Billing() {
  const [loading, setLoading] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);
  const { user } = useUser();
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);

  // Save subscription info to DB after successful payment
  const SaveSubscription = async (paymentId: string) => {
    setLoading(true);
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      active: true,
      paymentId: paymentId,
      joinDate: moment().format('DD/MM/YYYY'),
    });
    setLoading(false);
    if (result) {
      window.location.reload();
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className='text-center font-bold text-3xl my-3'>Upgrade With Monthly Plan</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          {/* Free Plan */}
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">Free<span className="sr-only">Plan</span></h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 0$ </strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <span className="text-gray-700"> 10,000 Words/Month </span>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-gray-700"> 50+ Content Templates </span>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-gray-700"> Unlimited Download & Copy </span>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-gray-700"> 1 Month of History </span>
              </li>
            </ul>
            <div className="mt-5">
              {!userSubscription && (
                <Button disabled className='w-full rounded-full p-6' variant='outline'>
                  Active Plan
                </Button>
              )}
            </div>
          </div>
          {/* Paid Plan */}
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">Monthly<span className="sr-only">Plan</span></h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 9.99$ </strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <span className="text-gray-700"> 100,000 Words/Month  </span>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-gray-700"> 50+ Template Access </span>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-gray-700"> Unlimited Download & Copy  </span>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-gray-700"> 1 Year of History </span>
              </li>
            </ul>
            <div className="mt-5">
              {userSubscription ? (
                <Button disabled className='w-full rounded-full p-6' variant='outline'>
                  Active Plan
                </Button>
              ) : (
                <>
                  {!showPayPal && (
                    <Button
                      className='w-full rounded-full p-6'
                      variant='outline'
                      onClick={() => setShowPayPal(true)}
                      disabled={loading}
                    >
                      {loading && <Loader2Icon className='animate-spin mr-2' />}
                      Get Started
                    </Button>
                  )}
                  {showPayPal && (
                    <div className="mt-4">
                      <PayPalButtons
                        style={{ layout: "vertical", color: "blue", shape: "rect", label: "subscribe" }}
                        disabled={loading}
                        createOrder={async (data, actions) => {
                          return actions.order.create({
                            purchase_units: [{
                              amount: { value: "9.99" },
                              description: "Monthly Subscription",
                            }],
                          });
                        }}
                        onApprove={async (data, actions) => {
                          setLoading(true);
                          const details = await actions.order?.capture();
                          if (details && details.id) {
                            await SaveSubscription(details.id);
                          }
                        }}
                        onCancel={() => setShowPayPal(false)}
                      />
                    </div>
                  )}
                </>
              )}
              {loading && (
                <div className="text-center mt-4 text-purple-600 font-medium">
                  <Loader2Icon className='animate-spin inline-block mr-2' />
                  Processing payment, please wait...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;