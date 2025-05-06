"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FormEvent, useCallback } from "react"

export function Form() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault()

      const formData = new FormData(event.target as HTMLFormElement)

      const params = new URLSearchParams(searchParams.toString())
      params.set("q", String(formData.get("q")))

      router.push(`${pathname}?${params.toString()}`)
    },
    [pathname, router, searchParams],
  )

  return (
    <form
      className="flex justify-center items-center w-full"
      onSubmit={handleSubmit}
    >
      <input
        autoFocus
        className="text-gray-900 py-3 px-4 rounded-2xl border-none outline-0 max-w-xs md:max-w-sm w-full shadow-lg font-normal"
        type="search"
        placeholder="Insira a sua localização"
        name="q"
        defaultValue={searchParams.get("q") ?? ""}
      />
    </form>
  )
}
