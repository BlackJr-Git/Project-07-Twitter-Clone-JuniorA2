import {Link} from 'react-router-dom'

function TwitterFooter() {
    return (
        <footer className='footer'>
            <Link>Term of Services</Link>
            <Link>Privacy Policy</Link>
            <Link>Cookie Policy</Link>
            <Link>Inprint</Link>
            <Link>Ads Infos</Link>
            <Link>More...</Link>
            <p>© 2021 Twitter, Inc.</p>
        </footer>
    )
}

export default TwitterFooter ;