import { JSX } from "react";

type Tech = {
    name: string;
    icon: JSX.Element;
};

type TechCardProps = {
    category: string;
    techs: Tech[];
};

export function TechCard({ category, techs }: TechCardProps) {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-blue-400 transition flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-5 text-blue-400">{category}</h2>
            <ul className="flex flex-wrap gap-6 justify-center">
                {
                    techs.map(({ name, icon }) => (
                        <li
                            key={name}
                            className="flex flex-col items-center w-24 cursor-default group"
                            title={name}
                        >
                            <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">
                                {icon}
                            </div>
                            <span className="text-sm text-gray-300">{name}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}