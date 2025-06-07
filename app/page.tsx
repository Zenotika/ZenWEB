// Redirect root '/' to '/storefront' for better UX
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/storefront');
  return null;
}
