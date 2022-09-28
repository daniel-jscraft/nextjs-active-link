import Link from 'next/link'
export default ()=> {
    return(
        <nav style={{
            lineHeight: '2rem',
            backgroundColor: 'lightsalmon',
            display: 'flex',
            gap: '10px'
        }}>
            <Link href="/">
                <a>Index</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
    )
}