import {trpc} from './trpc'
import { httpBatchLink } from '@trpc/client'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NotesList from './components/NotesList'

function App() {

  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() => 
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:8080/trpc'
        }),
      ],
    })
  )


  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <NotesList />
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App