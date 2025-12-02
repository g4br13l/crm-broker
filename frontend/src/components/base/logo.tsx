import Image from 'next/image'



export function Logo() {
  return (
    <div className="bg-secondary p-2 rounded-md">
      <Image
        src="/vercel.svg"
        alt="logo"
        width={20}
        height={20}
      />
    </div>

  )
}
