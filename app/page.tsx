import Image from "next/image";
import imgmoney from "@/assets/images/imgmoney.png"
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full">

      {/* ส่วนชื่อเว็บ */}
      <h1 className="text-4xl font-bold text-center mt-20 text-blue-600">
        American Share แชร์เงินกันเถอะ
      </h1>

      {/* ส่วนแสดงรูป */}
      <Image src={imgmoney} alt="Money Image" className="mt-20 w-50" />

      {/* ส่วนแสดงปุ่มเพื่อไปยังหน้า /moneyshareinput */}
      <Link href="/moneyshareinput" 
            className="mt-20 px-6 py-3 bg-blue-600 text-white rounded-lg 
                     hover:bg-blue-700 transition duration-300">
         Go to American Share Calculator
      </Link>

      {/* ส่วนแสดง Footer */}
      <Footer />
    </div>
  );
}