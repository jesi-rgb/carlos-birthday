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
            <h1 className="text-xl font-bold text-[#217346]">Feliz cumple mamawebo</h1>
          </div>

          <div className="space-y-4 mb-6">
            <p className="text-gray-700">
              mamawebo mamawebaso
            </p>
            <p className="text-gray-700">
              de parte de tu Jesi que te aprecia un montón. aprende a programar ya illo
            </p>
            <p className="text-gray-700">
              si necesitas cualquier cosa pues me preguntas que pa eso estamos hombreee
            </p>
          </div>

          <div className="text-sm text-gray-500">
            <p>{new Date().toLocaleDateString('en-GB')}</p>
            <p className="text-xs">Arsa que toma producciones, S.L</p>
          </div>
        </div>

        <Link href="/" className="mt-6 flex items-center gap-2 text-[#217346] font-medium">
          <ArrowLeft size={16} />
          patrás
        </Link>
      </div>
    </div>
  )
}

