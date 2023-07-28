import Navbar from "../components/Navbar";
import "./HomePage.css";
function HomePage() {
  return (
    <>
      <Navbar />
      <div class="h-remaining p-5 sm:p-10 flex items-center justify-between gap-10">
        <div className="flex flex-col gap-5 sm:gap-10 cutive-mono items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl tracking-wider font-bold gradient">
              CLOCKOMORO
            </h1>
          </div>
          <div className="text-sm sm:text-lg md:text-2xl sm:leading-[2rem] md:leading-[2.5rem] text-center">
            Clockomoro is an open-source web application designed to enhance
            developers' productivity and time management using the Pomodoro
            Technique. The Pomodoro Technique is a time management method that
            involves breaking work into intervals, typically 25 minutes long,
            separated by short breaks.
          </div>
          <div className="cutive-mono p-4 bg-orange-300 rounded-2xl w-[120px] grid place-content-center hover:opacity-70 hover:cursor-pointer transition-all duration-[0.2s]">
            Timer
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/clock.png" alt="" className=" min-w-[400px] rounded-xl" />
        </div>
      </div>
    </>
  );
}
export default HomePage;
