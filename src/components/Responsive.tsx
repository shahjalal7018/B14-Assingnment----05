export default function Responsive() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white pt-12 pb-6 text-gray-600">
      <div className="mx-auto max-w-xl px-6 md:px-12">
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-100 pt-6 text-xs text-gray-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="mt-4 flex items-center gap-6 sm:mt-0">
            <a href="#" className="hover:text-gray-600 transition">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}