import { fetchCustomersPages } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import CustomersTableContent from '@/app/ui/customers/table';

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCustomersPages(query);

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
        <CustomersTableContent query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}