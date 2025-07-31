'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [input, setInput] = useState(searchParams.get('search') || '');

  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (input) {
        params.set('search', input);
      } else {
        params.delete('search');
      }
      router.replace(`?${params.toString()}`);
    }, 300);

    return () => clearTimeout(timeout);
  }, [input]);

  return (
    <div className="max-w-md mx-auto my-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Поиск по названию..."
        className="w-full px-4 py-2 border rounded shadow focus:outline-none focus:ring"
      />
    </div>
  );
}
