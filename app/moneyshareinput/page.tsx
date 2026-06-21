"use client"

import Image from "next/image";
import imgmoney from "@/assets/images/imgmoney.png";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  
  // สร้าง state สำหรับเก็บค่าของเงินและจำนวนคน
  const [money, setMoney] = useState("");
  const [people, setPeople] = useState("");

  // สร้างฟังก์ชันคำนวณเงินแชร์และเปิดไปยังหน้า /moneyshareoutput และส่งค่าของเงินและจำนวนคน และเงินที่ต้องแชร์กันไปแสดง
  const handleCalCulateClick = () => {
    // Validate input
    if (!money || !people) {
      alert("กรุณาป้อนเงินและจำนวนคนให้ครบถ้วน");
      return;
    }

    // คำนวณเงินแชร์
    const moneyShare = parseFloat(money) / parseInt(people);
    // alert(moneyShare.toFixed(2)); // แสดงผลลัพธ์การคำนวณเงินแชร์

    // เปิดไปยังหน้า /moneyshareoutput และส่งค่าของเงินและจำนวนคน และเงินที่ต้องแชร์กันไปแสดง
    router.push(`/moneyshareoutput?money=${money}&people=${people}&moneyShare=${moneyShare}`);
  }

  return (
    <div className="flex flex-col items-center w-full">
      {/* ส่วนชื่อเว็บ */}
      <h1 className="text-4xl font-bold text-center mt-20 text-blue-600">
        American Share แชร์เงินกันเถอะ
      </h1>

      {/* ส่วนชื่อหน้าเพจ */}
      <h2 className="text-2xl font-semibold text-center mt-10 text-blue-600">
        (ป้อนข้อมูลเพื่อคำนวณการแชร์เงิน)
      </h2>

      {/* ส่วนแสดงรูป */}
      <Image src={imgmoney} alt="Money Image" className="mt-10 w-50" />

      {/* ส่วนของการป้อนข้อมูล เงินกับคน  และปุ่มคำนวณ*/}
      <div className="mt-10 w-3/5 px-10 border border-gray-300 rounded-lg shadow-md py-8">
        {/* ป้อนเงิน */}
        <label className="block text-lg font-medium text-gray-700 mb-2">
          ป้อนเงิน
        </label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="จำนวนเงิน"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
        />

        {/* ป้อนจำนวนคน */}
        <label className="block text-lg font-medium text-gray-700 mt-6 mb-2">
          ป้อนจำนวนคน
        </label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="จำนวนคน"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />

        {/* ปุ่มคำนวณ ทำหน้าที่ 2 อย่าง คือ 1. คำนวณ 2. เปิดไปยังหน้า /moneyshareoutput เอาเงิน คน และเงินที่ต้องแชร์กันไปแสดง */}
        <button 
          onClick={ handleCalCulateClick }
          className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          คำนวณ
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
