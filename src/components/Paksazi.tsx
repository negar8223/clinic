export function Paksazi() {
  return (
    <>
      <div className="grid grid-cols-3">
        <img
          className="col-span-3 md:col-span-1"
          src="https://reservation-pink.vercel.app/img/doctor.svg"
        ></img>
        <div
          className="col-span-3 md:col-span-2 flex flex-col justify-center text-right p-4"
          style={{ direction: "rtl" }}
        >
          <h1 className="font-bold text-[#1c678d] text-lg mb-4">پاکسازی</h1>
          <p>
            مرکز زیبایی آفرینش دارای انواع پکیج های پاکسازی که شامل میکرودرم ها،
            انواع روش ها و ماسک های گوناگون، همچنین انواع ماسک های ال ای دی و
            نورتراپی مطابق با هرنوع پوستی می‌باشد. که تمامی این خدمات توسط
            تکنسین های مجرب در این کلینیک به خدمت زیباجویان عزیزمان می‌رسد.
          </p>
        </div>
      </div>
    </>
  );
}
