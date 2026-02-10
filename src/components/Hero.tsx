export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight font-serif">
          Kashyap Nathan
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl leading-relaxed">
          I left Georgia Tech to build{' '}
          <a
            href="https://trymeridian.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-700 underline underline-offset-2"
          >
            Meridian
          </a>{' '}
          with one of my close friends.
        </p>
      </div>
    </section>
  )
}
