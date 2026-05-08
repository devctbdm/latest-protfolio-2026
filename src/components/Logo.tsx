import { CodeXml } from 'lucide-react';
import Link from 'next/link';

const Logo = ({ text }: { text: string }) => {
  return (
    <>
      <Link href="/" className="flex items-center gap-2">
        <CodeXml className="h-8 w-8 text-blue-400" />{' '}
        <span className="font-bold text-3xl bg-linear-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
          {text}
        </span>
      </Link>
    </>
  );
};

export default Logo;
