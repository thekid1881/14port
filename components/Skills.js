import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiRuby } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { SiGoogleauthenticator } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiStripe } from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";

export default function Skills() {
    return (
        <div>
            <div className="border-solid p-2 my-2 border-2 border-white rounded-md w-full text-start justify-items-start font-semibold align-top text-4xl">
                <p>
                    Frameworks
                </p>
                <div className="flex flex-row my-4">
                    <TbBrandNextjs 
                        className="text-5xl mx-2"
                    />
                    <FaReact
                        className="text-5xl mx-2"
                    />
                    <SiFlask
                        className="text-5xl mx-2"
                    />
                    <SiRubyonrails
                        className="text-5xl mx-2"
                    />
                    <SiExpo
                        className="text-5xl mx-2"
                    />
                </div>
            </div>
            <div className="border-solid p-2 my-2 border-2 border-white rounded-md w-full text-start justify-items-start font-semibold align-top text-4xl">
                <p>
                    Languages
                </p>
                <div className="flex flex-row my-4">
                    <SiJavascript 
                        className="text-5xl mx-2"
                    />
                    <SiPython
                        className="text-5xl mx-2"
                    />
                    <SiRuby
                        className="text-5xl mx-2"
                    />
                    <TbFileTypeSql
                        className="text-5xl mx-2"
                    />
                    <SiTailwindcss
                        className="text-5xl mx-2"
                    />
                </div>
            </div>
            <div className="border-solid p-2 my-2 border-2 border-white rounded-md w-full text-start justify-items-start font-semibold align-top text-4xl">
                <p>
                    Integrations
                </p>
                <div className="flex flex-row my-4">
                    <SiSupabase
                        className="text-5xl mx-2"
                    />
                    <SiGoogleauthenticator
                        className="text-5xl mx-2"
                    />
                    <SiMongodb
                        className="text-5xl mx-2"
                    />
                    <SiStripe
                        className="text-5xl mx-2"
                    />
                    <TbBrandOauth
                        className="text-5xl mx-2"
                    />
                </div>
            </div>
        </div>
    );
}