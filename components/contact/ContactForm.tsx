export function ContactForm() {
    return (
        <form className="space-y-6 w-full">
            <input
                type="text"
                placeholder="Your name"
                className="w-full px-5 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <input
                type="email"
                placeholder="Your email"
                className="w-full px-5 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
            <textarea
                rows={6}
                placeholder="Your message"
                className="w-full px-5 py-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            ></textarea>
            <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium transition cursor-pointer"
            >
                Send Message
            </button>
        </form>
    );
}