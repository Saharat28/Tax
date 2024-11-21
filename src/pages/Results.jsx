import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  const salary = parseInt(formData.salary) || 0;
  const bonus = parseInt(formData.bonus) || 0;
  const child = parseInt(formData.child) || 0;
  const guarantee = parseInt(formData.guarantee) || 0;
  const insurance = parseInt(formData.insurance) || 0;

  const salaryOfYear = salary * 12 + bonus;
  const expenses = salaryOfYear * 0.5 <= 100000 ? salaryOfYear * 0.5 : 100000;
  const selfDeduction = 60000;
  const childDeduction = child * 30000 <= 60000 ? child * 30000 : 60000;
  const socialSecurity = guarantee * 12 <= 30000 ? guarantee * 12 : 30000;
  const insuranceDeduction = insurance <= 100000 ? insurance : 100000;
  const totalDeduction = selfDeduction + childDeduction + socialSecurity + insuranceDeduction;
  const totalIncome = salaryOfYear - expenses - totalDeduction > 0 ? salaryOfYear - expenses - totalDeduction : 0;

  const calculateTax = (income) => {
    let tax = 0;
    if (income <= 100000) {
      tax = 0;
    } else if (income <= 300000) {
      tax = (income - 100000) * 0.05;
    } else if (income <= 1000000) {
      tax = (income - 100000) * 0.10;
    } else {
      tax = (income - 100000) * 0.15;
    }

    return tax;
  };

  const taxPayable = calculateTax(totalIncome);

  const getTaxRate = (income) => {
    if (income <= 100000) {
      return 0;
    } else if (income <= 300000) {
      return 5;
    } else if (income <= 1000000) {
      return 10;
    } else {
      return 15;
    }
  };

  const taxRate = getTaxRate(totalIncome);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">ผลลัพธ์การคำนวณภาษี</h1>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-lg text-gray-700">เงินได้ทั้งปี:</span>
            <span className="text-lg text-gray-800">{salaryOfYear} บาท</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-lg text-gray-700">ค่าใช้จ่าย:</span>
            <span className="text-lg text-gray-800">{expenses} บาท</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-lg text-gray-700">ค่าลดหย่อน:</span>
            <span className="text-lg text-gray-800">{totalDeduction} บาท</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-lg text-gray-700">เงินได้พึงประเมินสุทธิ:</span>
            <span className="text-lg text-gray-800">{totalIncome} บาท</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-lg text-gray-700">อัตราภาษี:</span>
            <span className="text-lg text-gray-800">{taxRate}%</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-lg text-gray-700">ภาษีที่ต้องชำระ:</span>
            <span className="text-lg text-gray-800">{taxPayable} บาท</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;