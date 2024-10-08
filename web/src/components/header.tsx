import Link from "next/link";

export default function Header({ title }: { title: string }) {
    return (
        <header id="header" className="w-full flex items-center bg-gray-100 mt-[88px] border">
            <div className="py-4 w-[1260px] mx-auto px-5">
                <h1 className="text-2xl font-bold text-red-700 my-auto">{title} - Website</h1>
                {/* <nav id="navmenu" className="hidden md:flex items-center space-x-4">
                    <ul className="flex space-x-4">
                        <li><a href="index.html#hero" className="text-blue-600 hover:text-blue-800">Home</a></li>
                    </ul>
                    <button className="md:hidden text-xl">
                        <i className="bi bi-list"></i>
                    </button>
                </nav> */}

                {/* <a className="btn-getstarted bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" href="index.html#about">Get Started</a> */}

            </div>
        </header>

    );
}