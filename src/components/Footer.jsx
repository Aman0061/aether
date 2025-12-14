const Footer = () => {
  return (
    <footer id="contact" className="bg-[#F9F8F6] pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-neutral-900">
              Давайте создадим что-то
              <br />
              <span className="italic">вечное.</span>
            </h2>
            <a
              href="mailto:hello@aether.com"
              className="text-xl md:text-2xl border-b border-neutral-300 pb-2 hover:border-black transition-colors"
            >
              hello@aether.com
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm font-light">
            <div>
              <h5 className="uppercase tracking-[0.2em] mb-6 text-neutral-400 text-xs">Студия</h5>
              <p className="mb-1">Москва</p>
              <p className="mb-1">Россия</p>
              <p>+7 (999) 000-00-00</p>
            </div>
            <div>
              <h5 className="uppercase tracking-[0.2em] mb-6 text-neutral-400 text-xs">Социальные сети</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-neutral-500 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neutral-500 transition-colors">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-neutral-500 transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-neutral-400 border-t border-neutral-200 pt-8">
          <p>&copy; 2024 Aether Studio. Все права защищены.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-neutral-600">
              Конфиденциальность
            </a>
            <a href="#" className="hover:text-neutral-600">
              Условия
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

