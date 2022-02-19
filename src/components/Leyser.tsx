export function Leyser() {
  return (
    <>
      <div className="flex justify-center -mt-96 md:mt-36">
        <div className=" border-b-4 border-blue-300 mt-20 font-bold text-2xl text-[#1c678d]">
          خدمات
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div
          className="order-2 col-span-3 md:col-span-2 md:order-1 flex flex-col justify-center text-right p-4"
          style={{ direction: "rtl" }}
        >
          <h1 className="font-bold text-[#1c678d] text-lg mb-4">لیزر</h1>
          <p>
            کلینیک زیبایی آفرینش، برای رفاه حال زیباجویان عزیز و جوابدهی انواع
            پوستها درمقابل لیزر مجهز به سه دستگاه لیزر می‌باشد که هر سه دارای
            سیستم خنک کننده هستند:
          </p>
          <ul className="list-disc text-gray-500 m-2">
            <li>Gentle max pro 2020</li>
            <li>Gentle max pro 2021</li>
            <li>Gentle lase</li>
          </ul>
          <p>
            هر سه دستگاه هم برای آقایان و هم برای بانوان در ساعات متفاوت شبانه
            روز درنظر گرفته شده است. همچنین این کلینیک با مجرب ترین و باسابقه
            ترین اپراتورهای لیزر همکاری می‌نماید چرا که رضایت مشتریان عزیز
            اولویت هدف کار ما می‌باشد.
          </p>
        </div>
        <img
          className="col-span-3 md:col-span-1 order-1 md:order-2"
          src="https://reservation-pink.vercel.app/img/medicine.svg"
        ></img>
      </div>
    </>
  );
}
