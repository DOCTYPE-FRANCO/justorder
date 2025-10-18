import React from "react"
import {Routes, Route} from "react-router-dom"
import Homepage from "./Components/Homepage"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Mealsdelight from "./Components/Mealsdelight"
import Hisgrace from "./Components/Hisgrace"
import Heritage from "./Components/Heritage"

function App() {

  return (
    <div className="min-h-screen w-full bg-white relative text-gray-800">
      {/* Zigzag Lightning - Light Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
            repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.06) 30px, rgba(107, 114, 128, 0.06) 31px),
            repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55, 65, 81, 0.05) 40px, rgba(55, 65, 81, 0.05) 41px),
            repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31, 41, 55, 0.04) 35px, rgba(31, 41, 55, 0.04) 36px)
          `,
        }}
      />
      {/* Your Content/Components */}

      <div className="z-10">
        <Header />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/mealsd" element={<Mealsdelight />} />
            <Route path="/heritage" element={<Heritage />} />
            <Route path="/hisgrace" element={<Hisgrace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
