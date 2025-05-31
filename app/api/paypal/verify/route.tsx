import { NextRequest, NextResponse } from "next/server";
import paypal from "@paypal/checkout-server-sdk";
import { db } from "@/utils/db";
import { UserSubscription } from "@/utils/schema";
import moment from "moment";

// Use environment variables for secrets!
const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!;
const clientSecret = process.env.NEXT_PUBLIC_PAYPAL_SECRET_ID!;

const environment = new paypal.core.LiveEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(req: NextRequest) {
  const { orderID, email, userName } = await req.json();

  // Verify the order with PayPal
  const request = new paypal.orders.OrdersGetRequest(orderID);
  try {
    const order = await client.execute(request);

    if (order.result.status === "COMPLETED") {
      // Save subscription to DB
      await db.insert(UserSubscription).values({
        email,
        userName,
        active: true,
        paymentId: orderID,
        joinDate: moment().format("DD/MM/YYYY"),
      });

      // Here you can also update tokens or any other logic
      // await db.update(...)

      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: "Payment not completed" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: "Verification failed" }, { status: 500 });
  }
}