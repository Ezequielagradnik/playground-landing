import { supabase } from '@/lib/supabase'

export default async function Home() {
  const { data } = await supabase.from('messages').select('content').single()

  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <h1 className="text-6xl font-bold text-white">
        {data?.content ?? 'Loading...'}
      </h1>
    </main>
  )
}
