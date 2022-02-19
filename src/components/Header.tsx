export function Header() {
  return (
    <>
      <div className="flex flex-wrap flex-col h-screen justify-between">
        <div className="absolute top-5 left-28 flex items-center z-50 invisible md:visible">
          <button className="bg-blue-300 rounded-sm text-xl pb-2 text-white px-2">
            ورود
          </button>
          <div className="ml-4 text-[#1c678d] hover:text-blue-300">خدمات</div>
          <a className="ml-4 text-blue-300 border-b-2 border-blue-300">
            <div className=" m-4">خانه</div>
          </a>
        </div>
        <img
          className="absolute w-14 h-14 md:right-14 right-8"
          src="https://reservation-pink.vercel.app/img/logo.png"
        ></img>
        <img
          className="absolute z-40 mt-32 md:mt-12 w-screen md:w-2/3"
          src="https://reservation-pink.vercel.app/img/header.svg"
        ></img>
        <img
          className="absolute right-0 w-4/5 md:w-3/5"
          src="https://reservation-pink.vercel.app/img/wave.svg"
        ></img>
        <div className="absolute flex flex-col items-end right-28 top-10 md:right-72  md:top-96">
          <p className="md:text-lg text-base">کلینیک زیبایی آفرینش</p>
          <p className="md:text-3xl text-base text-[#1c678d]">
            برای رفاه حال زیبا جویان
          </p>
          <button className="bg-[#1c678d] text-white pb-2 pt-1 px-2 rounded-sm text-sm mt-3 md:hidden">
            ورود
          </button>
        </div>
      </div>
    </>
  );
}
