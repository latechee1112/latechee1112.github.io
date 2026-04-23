import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
}

export function AccordionItem({ title, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors w-full text-left"
      >
        <span className="text-neutral-500">{isOpen ? '^' : '>'}</span>
        <span>{title}</span>
      </button>
      {isOpen && (
        <div className="pl-6 text-neutral-300 text-sm leading-relaxed">
          {content}
        </div>
      )}
    </div>
  );
}
