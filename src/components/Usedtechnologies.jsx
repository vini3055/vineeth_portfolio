import { RiReactjsLine, RiNodejsFill ,RiFlutterFill} from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiExpress, SiMysql, SiDjango} from"react-icons/si";

function UsedTechnologies() {
  return (

    <div className="border-b border-neutral-800 pb-24">
      {/* <h1 className="my-20 text-center text-4xl"> Technologies Used</h1> */}

      <h1 className="my-20 text-center text-4xl text-neutral-500">
        Technologies <span className="text-neutral-300">Used</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-600 p-4">
          <RiReactjsLine  className="text-6xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-600 p-4">
          <RiNodejsFill  className="text-6xl text-green-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-600 p-4">
          <RiFlutterFill  className="text-6xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-600 p-4">
          <BiLogoPostgresql  className="text-6xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-600 p-4">
          <SiMongodb  className="text-6xl text-green-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-600 p-4">
          <SiExpress  className="text-6xl text-neutral-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-600 p-4">
          <SiMysql  className="text-6xl text-yellow-400"/>
        </div>
      </div>
    </div>
  );
}

export default UsedTechnologies;
