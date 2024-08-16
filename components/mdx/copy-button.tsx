'use client';
import { Check, Copy } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';

export function MdxButtonCopy({ text }: { text: string }) {
 const [isCopied, setIsCopied] = useState(false);
 console.log('Working....');
 const copy = async () => {
  await navigator.clipboard.writeText(text);
  setIsCopied(true);

  setTimeout(() => {
   setIsCopied(false);
  }, 3000);
 };

 return (
  <Button variant="ghost" size="icon" onClick={copy} disabled={isCopied}>
   {isCopied ? <Check className="h-5 w-5" /> : <Copy className="h-4 w-4" />}
  </Button>
 );
}
