import { ABOUT_TEXT, MAIN_CONTENT } from "../assets/content";
import profilePic from "../assets/projects/vineeth.jpeg";
function Main() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-black pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Vineeth Kondayil
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className=" my-3 max-w-xl py-6 font-light tracking-tighter text-neutral-500">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img class="object-contain h-120 w-120" src={profilePic} alt="Vineeth Kondayil Profile Pic" />
          </div>
        </div>
        ;
      </div>
    </div>
  );
}

export default Main;
