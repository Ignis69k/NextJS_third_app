"use client"

import Image from "next/image";
import imgmoney from "@/assets/images/imgmoney.png";
import Footer from "@/components/Footer";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();

  //นำค่าที่ส่งมาจากหน้าแรกมาเก็บไว้ในตัวแปร
  const searchParams = useSearchParams();
  const money = searchParams.get("money");
  const people = searchParams.get("people");
  const moneyShare = searchParams.get("moneyShare");

  return (
    <div className="flex flex-col items-center w-full">
      {/* ส่วนชื่อเว็บ */}
      <h1 className="text-4xl font-bold text-center mt-20 text-blue-600">
        American Share แชร์เงินกันเถอะ
      </h1>

      {/* ส่วนชื่อหน้าเพจ */}
      <h2 className="text-2xl font-semibold text-center mt-10 text-blue-600">
        (ผลลัพธ์การคำนวณการแชร์เงิน)
      </h2>

      {/* ส่วนแสดงรูป */}
      <Image src={imgmoney} alt="Money Image" className="mt-10 w-50" />

      {/* ส่วนของการแสดงผลลัพธ์ */}
      <div className="mt-10 w-3/5 px-10 border border-gray-300 rounded-lg shadow-md py-8">
        <p className="text-lg font-medium text-gray-700 mb-2 text-center">
          จำนวนเงินที่ป้อน: {parseFloat(money || '0').toFixed(2)} บาท
        </p>
        <p className="text-lg font-medium text-gray-700 mb-2 text-center">
          จำนวนคนที่ป้อน: {people} คน
        </p>
        <p className="text-lg font-medium text-gray-700 mb-2 text-center">
          เงินที่ต้องแชร์กัน: {parseFloat(moneyShare || '0').toFixed(2)} บาท/คน
        </p>     

        {/* ปุ่มย้อนกลับ */}
        <button
          onClick={() => router.back()}
          className="mt-6 bg-blue-500 hover:bg-blue-700
                   text-white font-bold py-2 px-4 rounded mx-auto block"
          >
          ย้อนกลับ
        </button> 
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
