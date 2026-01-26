export default function Footer() {
    return (
        <footer className="w-full bg-black/80 text-white py-6 flex flex-col items-center rounded-full">
            <div className="mb-4">
                <p className="text-lg">© 2024 Philips. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
                <a href="/terms" className="hover:underline">Terms of Service</a>
                <a href="/contact" className="hover:underline">Contact Us</a>
            </div>
        </footer>
    );
}