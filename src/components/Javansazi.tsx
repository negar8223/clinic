export function Javansazi() {
  return (
    <>
      <div className="grid grid-cols-3">
        <div
          className="order-2 col-span-3 md:col-span-2 md:order-1 flex flex-col justify-center text-right p-4"
          style={{ direction: "rtl" }}
        >
          <h1 className="font-bold text-[#1c678d] text-lg mb-4">جوانسازی</h1>
          <p>
            کلینیک زیبایی آفرینش در زمینه جوانسازی نیز این امکان را فراهم آورده
            است تا زیباجویان عزیز بتوانند تمامی خدمات خود را در یک مرکز انجام
            دهند چرا که تمامی خدمات از جمله هایفو، درمااوکسی، آر اف فرکشنال و
            مزونیدلینگ با نظر مشاورین و پزشک بصورت کامل انجام می‌شود.
          </p>
        </div>
        <img
          className="col-span-3 md:col-span-1 order-1 md:order-2"
          src="https://reservation-pink.vercel.app/img/people.svg"
          alt="people"
        />
      </div>
    </>
  );
}
