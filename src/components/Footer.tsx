export function Footer() {
  return (
    <>
      <div className="grid grid-cols-2 border-b pb-4 border-gray-500">
        <div className="grid grid-cols-2 grid-rows-2 p-10 order-2 col-span-2 md:order-1 md:col-span-1 md:gap-40">
          <div className=" flex flex-col justify-center text-right col-span-2 md:col-span-1 mt-4">
            <h1 className="font-bold text-[#1c678d] text-lg mb-4">
              شماره تماس
            </h1>
            <p className="text-sm">028-3289980</p>
            <p className="text-sm">028-3289981</p>
          </div>
          <div className="flex flex-col justify-center text-right col-span-2 md:col-span-1 mt-4">
            <h1 className="font-bold text-[#1c678d] text-lg mb-4">آدرس</h1>
            <p className="text-sm">قزوین خیابان عارف خیابان پرتو پلاک 27</p>
          </div>

          <div className=" flex flex-col justify-center text-right col-span-2 md:col-span-1 mt-4">
            <h1 className="font-bold text-[#1c678d] text-lg mb-4">ایمیل</h1>
            <p className="text-sm">info@afarinesh.com</p>
          </div>
          <div className=" flex flex-col justify-center text-right col-span-2 md:col-span-1 mt-4">
            <h1 className="font-bold text-[#1c678d] text-lg mb-4">
              اینستاگرام
            </h1>
            <p className="text-sm">Afarinesh_clinique@</p>
          </div>
        </div>
        <iframe
        title="map"
          className="w-full md:pl-10 md:py-10 md:h-full order-1 col-span-2 md:col-span-1 md:order-2"
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCpef-gkrTgpAJDV_ds5wM_VPa1D6vYlOw
      &q=Space+Needle,Seattle+WA"
        ></iframe>
      </div>
      <div className="flex justify-center">
        <p className=" mt-5 mb-5 text-sm md:text-base">
          کپی رایت ۱۴۰۰ کلینیک زیبایی آفرینش. تمامی حقوق برای ما محفوظ است. |
          قدرت گرفته توسط هایک
        </p>
      </div>
    </>
  );
}
