import Link from "next/link";



const mockUrls = [
  "https://06tqpyfu7s.ufs.sh/f/Wcq0L2BQv3LsXPO6YkJ0vgqoGWY5putCVUn8f7RiDwALMcQZ",
  "https://06tqpyfu7s.ufs.sh/f/Wcq0L2BQv3LsQFEGOXTm6OKRcMb87FnCVQp2uBrdXoUhYHvD",
  "https://06tqpyfu7s.ufs.sh/f/Wcq0L2BQv3LsPrrHGSdwcJ7s5LB40vAfoIDWbkHGEzhT68MF",
  "https://06tqpyfu7s.ufs.sh/f/Wcq0L2BQv3Ls6kHAWN24MHFmN4nRDKVzBjAEvSkusQJq1gLl"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        
        {[...mockImages,...mockImages,...mockImages].map((image) => (
          <div key={image.id} className="w-48">
              <img src={image.url} />
          </div>
        ))}
      </div>
      <h1>Hello (gallery in progress)</h1>
    </main>
  );
}
