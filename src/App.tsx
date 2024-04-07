import React from "react"

function App() {
  return (
    <>
      <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
        {/* 左側のコンテンツ */}
        <div className="flex flex-col text-white overflow-hidden">
          <div className="bg-slate-800 px-2">this</div>
          <div className="bg-blue-500 text-white p-4">
            This is an example component with Tailwind CSS!
          </div>
        </div>
        {/* 右側のコンテンツ */}
        <div className="bg-gray-700">
          <div className="grid grid-cols-[300px_1fr] gap-4 m-10">
            {/* 左側の列 */}
            <div className="image">画像１</div>
            {/* 右側の列 */}
            <div className="flex flex-col justify-between">
              <div className="name">名前</div>
              <div className="image">画像２</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
