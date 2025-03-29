import Link from "next/link"
import { ArrowLeft, FileSpreadsheet } from "lucide-react"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Excel-like header */}
      <div className="bg-[#217346] text-white p-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FileSpreadsheet size={24} />
          <span className="font-semibold">Carlos Birthday - Note.xlsx</span>
        </div>
      </div>

      <div className="flex-grow p-4 flex flex-col items-center">
        <div className="bg-white border border-gray-300 shadow-lg max-w-md w-full p-6 rounded-md">
          <div className="border-b border-gray-200 pb-3 mb-4">
            <h1 className="text-xl font-bold text-[#217346]">Nota para Carlos</h1>
            <p className="text-gray-500 text-sm">Hoja1!A1:H15</p>
          </div>

          <div className="space-y-4 mb-6">
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
            </p>
            <p className="text-gray-700">
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            </p>
            <p className="text-gray-700">
              Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae.
            </p>
            <p className="text-gray-700 font-bold">¡Feliz cumpleaños, amigo!</p>
          </div>

          <div className="text-sm text-gray-500">
            <p>Creado: {new Date().toLocaleDateString()}</p>
            <p>Por: Tu amigo</p>
          </div>
        </div>

        <Link href="/" className="mt-6 flex items-center gap-2 text-[#217346] font-medium">
          <ArrowLeft size={16} />
          Volver a la hoja de cálculo
        </Link>
      </div>
    </div>
  )
}

