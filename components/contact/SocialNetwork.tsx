import { 
  FaFacebook, 
  FaLinkedin, 
  FaWhatsapp, 
  FaGithub, 
  FaXTwitter 
} from "react-icons/fa6";
import { 
  MdEmail, 
  MdPhone 
} from "react-icons/md";

export function SocialNetwork() {
    return (
        <div className="space-y-6 lg:ml-20 lg:mt-10">
            <h2 className="text-4xl font-bold text-blue-400">Let’s Connect</h2>

            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <MdPhone className="text-blue-400 text-2xl" />
                    <span>+261 38 29 354 74</span>
                </div>

                <div className="flex items-center gap-3">
                    <MdEmail className="text-blue-400 text-2xl" />
                    <span>fabien.dev@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                    <FaWhatsapp className="text-green-400 text-2xl" />
                    <span>+261 38 29 354 74</span>
                </div>
            </div>

            <div className="flex gap-6 pt-6">
                <a
                    href="https://facebook.com/fabienhalaby.rajo"
                    target="_blank"
                    className="text-blue-500 hover:text-blue-600 text-2xl transition"
                >
                    <FaFacebook />
                </a>

                <a
                    href="https://www.linkedin.com/in/fabien-halaby-170746310"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-500 text-2xl transition"
                >
                    <FaLinkedin />
                </a>
            
                <a
                    href="https://github.com/Fabien-Halaby"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-500 text-2xl transition"
                >
                    <FaGithub />
                </a>
                
                <a
                    href="https://x.com/FabienHalaby"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-500 text-2xl transition"
                >
                    <FaXTwitter />
                </a>
            </div>
        </div>
    );
}