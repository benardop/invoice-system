import { CurrencyDollarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <CurrencyDollarIcon className="h-12 w-12 rotate-[0deg]" />
      <p className="text-[44px]">IGIS</p>
    </div>
  );
}
