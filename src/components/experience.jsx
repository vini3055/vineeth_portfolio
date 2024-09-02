import { EXPERIENCE } from "../assets/content";

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl text-neutral-500">
        Experience
      </h1>
      <div>
        {EXPERIENCE.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-500">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                <span className="text-neutral-800">{experience.role}</span> -{" "}
                <span className="text-neutral-500">{experience.company}</span>
              </h6>
              <p className="text-neutral-400">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
