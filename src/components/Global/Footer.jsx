import Link from "@/components/Global/Link";

export default function Footer() {
    return (
        <footer className="absolute mt-10 inset-x-0 bottom-5 flex flex-col gap-6 items-center justify-center">
            <div className="text-sm text-gray-500">With Credit to: <Link text="Tina" href="https://github.com/Tina-Mai" />, and my good friend <Link text="Shizhe" href="https://github.com/shizhehe" />, for their wonderful work and template, thank you both very much </div>
        </footer>
    );
}