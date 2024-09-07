const Footer = () => {
  return (
    <footer className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid mx-auto grid-cols-6 items-center md:grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr] gap-8">
          <div className="border border-red-500 col-span-3 order-4  md:order-1 md:col-auto">
            item-1
          </div>
          <div className="border border-red-500 col-span-3 order-5 md:order-2 md:col-auto">
            item-2
          </div>
          <div className="border border-blue-400 col-span-2 md:col-auto md:order-3">
            item-3
          </div>
          <div className="border border-blue-400 col-span-2 md:col-auto md:order-4">
            item-4
          </div>
          <div className="border border-blue-400 col-span-2 md:col-auto md:order-5">
            item-5
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
