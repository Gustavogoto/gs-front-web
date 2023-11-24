import {} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import "../Nav/style/nav.css"
import { BsBook } from "react-icons/bs";

function Nav() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('email')
        sessionStorage.removeItem('senha');
        alert('Sua sessão foi finalizada.')
        navigate('/')
    }

    const validade = (e) => {
        e.preventDefault();
        const atualUser = sessionStorage.getItem('usuario');
        if (atualUser) {
            navigate('/home');
        } else {
            alert('Efetue o login antes de transitar pelo site.');
        }
    }

    const getUser = sessionStorage.getItem('usuario')
    const getEmail = sessionStorage.getItem('email')

    return (
        <>
            <nav className="navbar-container">

                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <BsBook className='icon'/>
                        </a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to='/'>Login</Link></li>
                            <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </li>
                    <span className="text-global">
                        Global Solution 2023 - Engenharia de Software
                    </span>
                </ul>

                <div className='container-final'>
                    <span className="navbar-text">
                        {getEmail ? (
                            <div className='infousuario m-0 p-0'>
                                <p className='texto_info'>Olá, {getUser}!</p>
                                <p className='texto_info'>Email: {getEmail}</p>
                            </div>
                        ) : (
                            <p className="m-0 p-0"></p>
                        )}
                    </span>
                    <button className="btn navbar-brand" onClick={validade}>
                        <img src={Logo} width="150px" height="100px" alt='Logo da empresa' />
                    </button>
                </div>



            </nav>
        </>
    )
}

export default Nav
