import React from 'react';
import './index.css';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';

function App() {
    return (
        <section className="flex flex-col justify-center items-center gap-10 h-screen">
            <img className="luizn w-36" src="./luizn.svg" alt="Logo" />
            <h1 className="flex gap-4 text-white font-mono text-4xl font-bold">
                <span className="text-orange-500">LuiznDev</span> | Template
            </h1>
            <ul className="flex flex-row items-center gap-4">
                <li className="bg-neutral-800 w-24 h-24 flex justify-center items-center rounded-2xl border border-white/20">
                    <FaReact className="text-orange-500 text-5xl" />
                </li>
                <li className="bg-neutral-800 w-24 h-24 flex justify-center items-center rounded-2xl border border-white/20">
                    <RiTailwindCssFill className="text-orange-500 text-5xl" />
                </li>
                <li className="bg-neutral-800 w-24 h-24 flex justify-center items-center rounded-2xl border border-white/20">
                    <SiVite className="text-orange-500 text-5xl" />
                </li>
            </ul>
            <section className="flex gap-4 absolute top-20">
                <a className="flex items-center gap-2 text-white duration-500 hover:text-black hover:bg-white border border-white/40 rounded-xl p-2" href="https://tailwindcss.com/docs/">
                    <RiTailwindCssFill className="text-orange-500" />Tailwind CSS
                </a>
                <a className="flex items-center gap-2 text-white duration-500 hover:text-black hover:bg-white border border-white/40 rounded-xl p-2" href="https://react.dev/">
                    <FaReact className="text-orange-500" />React
                </a>
                <a className="flex items-center gap-2 text-white duration-500 hover:text-black hover:bg-white border border-white/40 rounded-xl p-2" href="https://vite.dev/guide/">
                    <SiVite className="text-orange-500" />Vite
                </a>
            </section>
            <div className="absolute top-0 flex items-center justify-center h-screen bg-orange-500">
                <div className="absolute top-40 left-[-60vw] w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute top-[90vh] left-[40vw] w-48 h-48 bg-orange-500 rounded-full blur-2xl opacity-50"></div>
                <div className="absolute top-[-10vh] left-[40vw] w-32 h-32 bg-orange-500 rounded-full blur-xl opacity-60"></div>
            </div>
        </section>
    );
}

export default App;