import { MAIN_CONTENT } from "../assets/content";
import AboutImage from "../assets/projects/AboutImage.jpeg";

function About() {
  return (
    <div className="border-d border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl text-neutral-500">
        About <span className="text-neutral-300">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="w-4/5 h-auto" src={AboutImage} alt="AboutImageVineeth" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-neutral-500">{MAIN_CONTENT}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
