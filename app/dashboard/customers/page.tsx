import Image from "next/image"

export default function Page() {
    return (
        <>
            <h2>Customers Page</h2>

            <Image src="/typescript.svg" alt="typscript logo" height={100} width={100} />
            <Image src="/svg.svg" alt="svg logo" height={100} width={100} />
            <Image src="/terraform.svg" alt="terraform logo" height={100} width={100} />
            
        </>
    )
}