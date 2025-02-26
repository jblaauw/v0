"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NotesSection } from "@/components/notes-section"
import { BottleSelector } from "@/components/bottle-selector"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface Note {
  name: string
  percentage: number
}

const BottleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12">
    <path d="M8 2h8m-8 0v3m8-3v3M6 5h12l-1 15H7L6 5z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const bottleOptions = [
  { id: "bottle1", name: "Classic", icon: <BottleIcon /> },
  { id: "bottle2", name: "Modern", icon: <BottleIcon /> },
  { id: "bottle3", name: "Vintage", icon: <BottleIcon /> },
]

export default function DesignPage() {
  const [prompt, setPrompt] = useState("")
  const [story, setStory] = useState("")
  const [selectedBottle, setSelectedBottle] = useState("bottle1")
  const [label, setLabel] = useState("")

  const [topNotes, setTopNotes] = useState<Note[]>([
    { name: "Citrus", percentage: 10 },
    { name: "Fruity", percentage: 10 },
    { name: "Herbal", percentage: 10 },
    { name: "Citrus", percentage: 10 },
    { name: "Mint", percentage: 10 },
  ])

  const [middleNotes, setMiddleNotes] = useState<Note[]>([
    { name: "Floral", percentage: 10 },
    { name: "Fruity", percentage: 10 },
    { name: "Spice", percentage: 10 },
    { name: "Woods", percentage: 10 },
    { name: "Herbal", percentage: 10 },
  ])

  const [baseNotes, setBaseNotes] = useState<Note[]>([
    { name: "Woody", percentage: 10 },
    { name: "Amber", percentage: 10 },
    { name: "Floral", percentage: 10 },
    { name: "Fruity", percentage: 10 },
    { name: "Spice", percentage: 10 },
  ])

  const updateTopNote = (name: string, percentage: number) => {
    setTopNotes((notes) => notes.map((note) => (note.name === name ? { ...note, percentage } : note)))
  }

  const updateMiddleNote = (name: string, percentage: number) => {
    setMiddleNotes((notes) => notes.map((note) => (note.name === name ? { ...note, percentage } : note)))
  }

  const updateBaseNote = (name: string, percentage: number) => {
    setBaseNotes((notes) => notes.map((note) => (note.name === name ? { ...note, percentage } : note)))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Your prompt:</h2>
              <Textarea
                placeholder="Describe the fragrance you want to create..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Your story:</h2>
              <Textarea
                placeholder="Tell us the story behind your fragrance..."
                value={story}
                onChange={(e) => setStory(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-12">
              <NotesSection title="Top Notes" notes={topNotes} onUpdateNote={updateTopNote} />
              <NotesSection title="Middle Notes" notes={middleNotes} onUpdateNote={updateMiddleNote} />
              <NotesSection title="Base Notes" notes={baseNotes} onUpdateNote={updateBaseNote} />
            </div>
          </div>

          <div className="space-y-12">
            <BottleSelector options={bottleOptions} selectedBottle={selectedBottle} onSelect={setSelectedBottle} />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Add your label</h2>
              <Textarea
                placeholder="Enter your custom label text..."
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Final product</h2>
              <div className="aspect-square relative bg-muted rounded-lg p-8 flex items-center justify-center">
                <BottleIcon />
                {label && (
                  <div className="absolute bottom-8 left-0 right-0 text-center px-4">
                    <p className="text-sm font-medium truncate">{label}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-12">
          <Button variant="outline">Save Draft</Button>
          <Button>Continue to Summary</Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

