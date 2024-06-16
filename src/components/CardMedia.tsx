export default function CardMedia() {
  return (
    <div className="w-64 h-60 flex flex-col justify-center items-center text-dark-grayish-blue space-y-4 bg-grayish-blue-card">
      <div className="flex gap-3">
        <img src="./icon-facebook.svg" alt="" />
        <p>@nathanf</p>
      </div>
      <p className="text-6xl font-bold text-black">1987</p>
      <span className="tracking-extens uppercase">Followers</span>
      <div className="flex gap-3">
        <img src="./icon-up.svg" alt="" />
        <p>12 Today</p>
      </div>
    </div>
  );
}
