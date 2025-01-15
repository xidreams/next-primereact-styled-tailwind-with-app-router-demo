'use client'

import { useState } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { ListBox } from 'primereact/listbox'

export default function Home() {
  const [count, setCount] = useState<number>(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App</h1>
        <Button
          label="PrimeReact Button"
          className="p-button-raised p-button-rounded"
        />
        <div className="mt-4">
          <ListBox
            value={selectedOption}
            options={options}
            onChange={(e) => setSelectedOption(e.value)}
            style={{ width: '15rem' }}
          />
          {selectedOption && <p>Selected Option: {selectedOption}</p>}
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Tailwind Button
        </button>
      </div>
    </>
  )
}
