import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-100"> {/* แบ็คกราวด์สีหม่นๆ */}
        <div className="max-w-xl w-full bg-white shadow-lg rounded-lg p-8"> {/* ฟอร์มเป็นบล็อกสีขาว */}
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">คำนวณภาษี</h1>
          <form onSubmit={submitForm}>
            <div className="mb-4">
              <label htmlFor="salary" className="block text-lg font-medium text-gray-700">เงินเดือน:</label>
              <input
                type="text"
                name="salary"
                id="salary"
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="bonus" className="block text-lg font-medium text-gray-700">โบนัส:</label>
              <input
                type="text"
                name="bonus"
                id="bonus"
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="guarantee" className="block text-lg font-medium text-gray-700">หักประกันสังคมต่อเดือน:</label>
              <input
                type="text"
                name="guarantee"
                id="guarantee"
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="child" className="block text-lg font-medium text-gray-700">จำนวนบุตร:</label>
              <input
                type="text"
                name="child"
                id="child"
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="insurance" className="block text-lg font-medium text-gray-700">ค่าเบี้ยประกัน:</label>
              <input
                type="text"
                name="insurance"
                id="insurance"
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormData;
