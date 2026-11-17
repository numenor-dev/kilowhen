'use client'

import { searchZip, type SearchState } from "@/app/actions/searchZip";
import { useState, useEffect, useActionState } from "react";
import { toast } from "@heroui/react";


export default function Search() {

    const [state, formAction, isPending] = useActionState<SearchState, FormData>(searchZip, null);
    const [zip, setZip] = useState('');

    useEffect(() => {
        if (state?.error) {
            toast.danger(state.error);
        }
    }, [state])

    return (
        <div className="fixed top-20 right-50">
            <form
                noValidate
                action={formAction}
                className="flex"
            >
                <label htmlFor="zip" className="sr-only">Zip code</label>
                <input
                    formNoValidate
                    id="zip"
                    name="zip"
                    value={zip}
                    onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
                    inputMode="numeric"
                    autoComplete="postal-code"
                    pattern="\d{5}"
                    maxLength={5}
                    aria-invalid={!!state?.error}
                    placeholder="Enter zip code"
                    className="border rounded-2xl h-8 w-36 pl-3"
                />
                <button
                    type="submit"
                    disabled={isPending}
                    className="bg-blue-500 rounded-2xl ml-2 px-3 cursor-pointer"
                >
                    {isPending ? 'Searching...' : 'Search'}
                </button>
            </form>
        </div>
    )
}