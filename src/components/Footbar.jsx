import '../styles/Footbar.css'

function Footbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>Covid ID</a></div>
            <p className='description'>Developed by rendi</p>
            <div className="menu">
                <ul>
                    <li><a href="#home">Global</a></li>
                    <li><a href="#courses">Indonesia</a></li>
                    <li><a href="#tutors">Provinsi</a></li>
                    <li><a href="#partners">About</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Footbar
