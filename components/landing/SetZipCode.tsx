'use client';

import { useState } from "react";
import toast from "react-hot-toast";

const zipRegex = /^[0-9]+\.{5,}$/;
const toastConfig = {
    duration: 3000,
    richColors: true
} as const;

export default function SetZipCode() {

    const [zip, setZip] = useState('')

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const zipValue = formData.get("zip") as string;

        if (!zipValue) {
            toast.error("Please enter a zip code", toastConfig)
        }

        if (!zipRegex.test(zipValue)) {
            toast.error("Please enter a valid zip code", toastConfig)
        }

        setZip(zip)
    }

    return (
        <div className="fixed top-20 right-50">
            <form
                noValidate
                onSubmit={handleSubmit}
                className="flex"
                >
                <input
                    name="zip"
                    id="zip"
                    type="zip"
                    placeholder="Enter zip code"
                    className="border rounded-2xl h-8 w-36 pl-3"
                />
                <button
                    type="submit"
                    className="bg-blue-300 rounded-2xl ml-2 px-3 cursor-pointer">
                    Search
                </button>
            </form>
        </div>
    )
}