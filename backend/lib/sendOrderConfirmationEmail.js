import {resend} from './resend.js';
export async function sendOrderConfirmationEmail(
  {
  emailAddress,
  customerName,
  orderNumber,
  pickupDate,
}
){
  const{data,error}=await resend.emails.send({
    from:'onboarding@resend.dev',
    to:[emailAddress],
    subject: 'Your Lina Bakery order confirmation',
    html:`
      <h2>Thank you for your order, ${customerName}!</h2>
      <p>Your order number is <strong>${orderNumber}</strong>.</p>
      <p>Pickup date: <strong>${pickupDate}</strong></p>
      <p>We have received your payment successfully.</p>
    `,

});
if(error){
  throw new Error(error.message);
}
 return data; 
}