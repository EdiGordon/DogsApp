export function FooTer() {
    return <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} {' '}
        <a className='text-dark' href='https://github.com/EdiGordon'>
            Edi Gordon Dev. All Rights Reserved.
        </a>
    </div>
}

export default FooTer;