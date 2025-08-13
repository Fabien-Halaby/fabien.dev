import Link from "next/link";

export function AboutMe() {
    return (
        <div className="flex-1 text-center md:text-left space-y-6 lg:ml-15">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-400 leading-tight">
                Hey, Je suis Fabien Halaby
            </h1>
            <h3 className="text-xl md:text-2xl font-bold text-blue-400 leading-tight">
                Développeur React/Next - Golang - Rect Native
            </h3>
            {/* <p className="text-gray-300 text-lg">
                I craft modern web and mobile apps, automate workflows with DevOps, and explore data to build intelligent solutions.
            </p> */}

            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                <Link
                    href="/CV.pdf"
                    download
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded font-medium"
                >
                    Télécharger CV
                </Link>
          
                <Link
                    href="/project"
                    className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded font-medium"
                >
                    Projets
                </Link>
            </div>
        </div>
    );
}