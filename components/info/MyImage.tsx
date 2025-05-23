import Image from "next/image";

export function MyImage() {
    return (
        <div className="flex-1 w-full flex justify-center">
            <Image
                src="/3D.jpg"
                alt="Developer illustration"
                width={400}
                height={400}
                className="w-full max-w-sm h-auto object-contain"
            />
        </div>
    );
}