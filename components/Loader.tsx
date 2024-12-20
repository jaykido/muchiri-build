function Loader() {
  return (
    <div className="flex justify-center items-center h-screen relative">
      {/* Text in the center */}
      <span className="absolute text-lg font-bold text-blue-600">Muchiri</span>
      {/* Spinning circle */}
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
    </div>
  );
}

export default Loader;
