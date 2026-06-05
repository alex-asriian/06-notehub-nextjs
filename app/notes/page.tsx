import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { fetchNotes } from '@/app/lib/api'
import NotesClient from '@/app/notes/NotesClient'

export default async function NotesPage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['notes'],
    queryFn: () => fetchNotes(),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  )
}
