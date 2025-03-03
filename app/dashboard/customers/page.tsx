import CustomersTable from '@/app/ui/customers/table';
export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  return (
    <CustomersTable searchParams={props.searchParams} />
  );
}