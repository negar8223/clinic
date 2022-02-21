export function Tazrigh() {
  return (
    <>
      <div className="grid grid-cols-3">
        <img
          className="col-span-3 md:col-span-1"
          src="https://reservation-pink.vercel.app/img/hospital.svg"
          alt="hospital"
        />
        <div
          className="col-span-3 md:col-span-2 flex flex-col justify-center text-right p-4"
          style={{ direction: "rtl" }}
        >
          <h1 className="font-bold text-[#1c678d] text-lg mb-4">تزریق</h1>
          <p>
            کلینیک زیبایی آفرینش، تمامی خدمات تزریقی زیبایی را برای زیباجویان
            عزیز، از جمله انواع مزوتراپی های صورت و سر(جوانسازی و چربی سوز)،
            مزووایت، بوتاکس(ضدچروک و ضدتعریق)، تزریق ژل در نواحی مختلف و به روش
            های متفاوت، و همچنین فیلر مو را برای زیباجویان عزیزمان فراهم آورده
            است.
          </p>
          <p className="mt-3">
            {" "}
            لازم به ذکر است که تمامی خدمات با برندهای معتبر و قابل تایید توسط
            تکنسین های مجرب انجام می‌شود.
          </p>
        </div>
      </div>
    </>
  );
}
