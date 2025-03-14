export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden relative bg-black">
      <div className="absolute inset-0 w-full h-full p-8">
        <div 
          className="relative w-full h-full border-8 border-pink-400 rounded-lg overflow-hidden"
          style={{
            borderWidth: '8px',
            borderStyle: 'solid',
            borderColor: '#F472B6'
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/6vcyNOGbYz8?autoplay=1&mute=1&controls=1&loop=1&playlist=6vcyNOGbYz8"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </div>
      </div>
      <div className="absolute bottom-16 left-16 z-10">
        <h1 className="text-white text-4xl font-bold drop-shadow-lg">
          NZ Business Listings
        </h1>
        <p className="text-white text-xl mt-2 drop-shadow-lg">
          Coming Soon
        </p>
      </div>
    </main>
  )
} 