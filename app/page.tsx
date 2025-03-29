"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, FileSpreadsheet, HelpCircle, Settings } from "lucide-react"

export default function Home() {
  // Customize these messages in order of appearance
  const birthdayMessages = [
    "¡Feliz Cumpleaños Carlos!",
    "Eres un gran amigo",
    "Recuerdo cuando trabajamos juntos en...",
    "Ese día que nos reímos tanto de...",
    "Tu habilidad con Excel siempre me ha impresionado",
    "Espero que tengas un día increíble",
    "Gracias por tu amistad",
    "¡Que cumplas muchos más!",
    "Haz clic en 'Mensaje Especial' para ver más",
    "Haz clic en 'Mensaje Especial' para ver más",
    "Haz clic en 'Mensaje Especial' para ver más",
    "Haz clic en 'Mensaje Especial' para ver más",
    "Haz clic en 'Mensaje Especial' para ver más",
  ]

  const emojiForCells = [
    "🎉",
    "😊",
    "👨‍💻",
    "👩‍💻",
    "📊",
    "🎉",
    "🎉",
    "🎉",
    "🎉",
    "😊",
    "👨‍💻",
    "👩‍💻",
    "📊",
  ]

  const columns = ["A", "B", "C", "D"]
  const rows = Array.from({ length: 9 }, (_, i) => i + 1)

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [revealedCells, setRevealedCells] = useState<string[]>([])
  const [highlightedCell, setHighlightedCell] = useState<string>("B2") // Start with B2 highlighted
  const [cellMessages, setCellMessages] = useState<Record<string, string>>({})
  const [cellEmojiIndices, setCellEmojiIndices] = useState<Record<string, number>>({})

  console.log(currentMessageIndex)

  // Function to get a random cell that hasn't been revealed yet
  const getRandomUnrevealedCell = () => {
    const allCells = []
    for (const col of columns) {
      for (const row of rows) {
        const cellId = `${col}${row}`
        if (!revealedCells.includes(cellId) && cellId !== highlightedCell) {
          allCells.push(cellId)
        }
      }
    }

    if (allCells.length === 0) return null
    return allCells[Math.floor(Math.random() * allCells.length)]
  }

  const handleCellClick = (cellId: string) => {
    // Only respond to clicks on the highlighted cell
    if (cellId !== highlightedCell) return

    // Reveal the current message in this cell
    const newCellMessages = { ...cellMessages }
    newCellMessages[cellId] = birthdayMessages[currentMessageIndex]
    setCellMessages(newCellMessages)

    // Store which emoji index to use for this cell
    const newCellEmojiIndices = { ...cellEmojiIndices }
    newCellEmojiIndices[cellId] = currentMessageIndex
    setCellEmojiIndices(newCellEmojiIndices)

    // Add this cell to revealed cells
    setRevealedCells([...revealedCells, cellId])

    // Move to next message
    const nextMessageIndex = currentMessageIndex + 1
    setCurrentMessageIndex(nextMessageIndex)

    // If we have more messages, highlight a new random cell
    if (nextMessageIndex < birthdayMessages.length) {
      const nextCell = getRandomUnrevealedCell()
      if (nextCell) {
        setHighlightedCell(nextCell)
      }
    } else {
      // No more messages, clear the highlight
      setHighlightedCell("")
    }
  }

  const renderCell = (row: number, col: string) => {
    const cellId = `${col}${row}`
    const hasMessage = cellMessages[cellId]
    const isHighlighted = cellId === highlightedCell
    const emojiIndex = cellEmojiIndices[cellId]

    return (
      <div
        key={cellId}
        className={`border-[0.5px] border-gray-200 h-12 flex items-center justify-center ${isHighlighted ? "bg-yellow-200 border-yellow-500 border-2 animate-pulse" : hasMessage ? "bg-green-50" : ""
          }`}
        onClick={() => handleCellClick(cellId)}
      >
        {hasMessage ? emojiForCells[emojiIndex] : ""}
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Excel-like header */}
      <div className="bg-[#217346] text-white p-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FileSpreadsheet size={24} />
          <span className="font-semibold">Carlos Birthday.xlsx</span>
        </div>
        <div className="flex gap-2">
          <Settings size={20} />
          <HelpCircle size={20} />
        </div>
      </div>

      {/* Menu bar */}
      <div className="bg-[#217346] text-white px-2 pb-1 flex gap-4 text-sm overflow-x-auto">
        <span className="whitespace-nowrap">Archivo</span>
        <span className="whitespace-nowrap">Inicio</span>
        <span className="whitespace-nowrap">Insertar</span>
        <span className="whitespace-nowrap">Fórmulas</span>
        <span className="whitespace-nowrap">Datos</span>
      </div>

      {/* Formula bar */}
      <div className="bg-gray-200 p-2 text-sm flex items-center border-b border-gray-300">
        <div className="bg-white border- border-gray-400 px-2 py-1 mr-2 w-8 flex items-center justify-between">
          {highlightedCell || "A1"}
        </div>
        <div className="bg-white border border-gray-400 px-2 py-1 flex-grow">
          {birthdayMessages[currentMessageIndex - 1] ? birthdayMessages[currentMessageIndex - 1] : "    "}
        </div>
      </div>


      {/* Spreadsheet */}
      <div className="flex-grow overflow-auto">
        <div className="grid grid-cols-[10px_repeat(4,minmax(20px,1fr))]">
          {/* Header row with column letters */}
          <div className="bg-gray-200 border-[0.5px] border-gray-100 h-5 flex items-center justify-center font-semibold"></div>
          {columns.map((col) => (
            <div
              key={col}
              className="bg-gray-200 border-[0.5px] border-gray-100 h-5 flex items-center justify-center font-semibold"
            >
              {col}
            </div>
          ))}

          {/* Rows */}
          {rows.map((row) => (
            <>
              {/* Row number */}
              <div
                key={`row-${row}`}
                className="bg-gray-200 text-xs border border-gray-300 h-12 flex items-center justify-center font-semibold"
              >
                {row}
              </div>
              {/* Cells for this row */}
              {columns.map((col) => renderCell(row, col))}
            </>
          ))}
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="bg-gray-200 p-3 border-t border-gray-300 flex justify-center">
        <Link
          href="/about"
          className={`px-4 py-2 rounded-md font-medium ${currentMessageIndex >= birthdayMessages.length
            ? "bg-[#217346] text-white animate-pulse"
            : "bg-gray-400 text-white"
            }`}
        >
          Mensaje Especial
        </Link>
      </div>
    </div>
  )
}

