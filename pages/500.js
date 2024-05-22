export default function Custom500() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-[200px] amita leading-[110%]">500</h1>
      <p className="bebas text-[56px]">Server-side error occurred</p>
      <Link
        href="/"
        className=" border mt-5 md:mb-12 px-6 py-4 rounded-full hover:bg-[#101011] duration-300 hover:text-white text-black border-white  bg-white w-fit flex items-center gap-2 satoshi-medium text-base md:text-xl "
      >
        Home
      </Link>
    </div>
  );
}
