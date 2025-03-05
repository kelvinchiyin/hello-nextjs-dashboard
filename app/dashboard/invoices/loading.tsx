import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { lusitana } from '@/app/ui/fonts';

export default function Loading() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <div className="relative w-full md:w-auto">
          <div className="relative h-8 w-full rounded-md border px-4 md:w-72" />
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-[120px] rounded-lg bg-gray-100" />
        </div>
      </div>
      <InvoicesTableSkeleton />
    </div>
  );
} 