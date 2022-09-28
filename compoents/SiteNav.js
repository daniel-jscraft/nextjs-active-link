import Link from 'next/link'
import { useRouter } from 'next/router'

export default ()=> {
    const { asPath: currentPath } = useRouter()
    return(
        <nav style={{
            lineHeight: '2rem',
            backgroundColor: 'lightsalmon',
            display: 'flex',
            gap: '10px'
        }}>
            <Link href="/">
                <a style={{
                    border: (currentPath === '/') ? '1px dotted black' : 'none'
                }}>Index</a>
            </Link>
            <Link href="/about">
                <a style={{
                    border: (currentPath === '/about') ? '1px dotted black' : 'none'
                }}>About</a>
            </Link>
        </nav>
    )
}