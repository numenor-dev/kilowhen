'use server'

import { redirect } from 'next/navigation'

export type SearchState = { error?: string } | null

export async function searchZip(_prev: SearchState, formData: FormData): Promise<SearchState> {
  const zip = String(formData.get('zip') ?? '').trim()

  if (!/^\d{5}$/.test(zip)) return { error: 'Please enter a valid zip code.' }

  const region = await lookupRegion(zip)
  if (!region) return { error: "No data for this region yet." }

  redirect(`/region/${region}`)
}