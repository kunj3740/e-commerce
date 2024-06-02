"use client"
import { Activity, ActivityIcon, ActivitySquareIcon } from "lucide-react";


export const PaymentPage = () => {
  return (
    <div>
        <div className=" text-slate-800 text-xl md:text-3xl font-bold flex items-center justify-center mt-6">
            <ActivitySquareIcon className="mr-2"/>Make Payment
        </div>
    </div>
  )
}
export default PaymentPage;