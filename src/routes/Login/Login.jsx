import { useState, useRef, useEffect } from 'react';
import logo from '../../assets/Logo.png'
import { useNavigate } from 'react-router-dom';
import "../Login/style/Login.css"

function Login() {

    const navigate = useNavigate();
    const email = useRef();
    const senha = useRef();

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/usuarios')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setUsuarios(res);
            })
    }, []);

    function validade() {
        for (var i = 0; i < usuarios.length; i++) {
            if (usuarios[i].email === email.current.value && usuarios[i].senha === senha.current.value) {
                sessionStorage.setItem('usuario', usuarios[i].nome)
                return true
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validade()) {
            let token =
                Math.random().toString(16).substring(2) +
                Math.random().toString(16).substring(2);
            sessionStorage.setItem('email', email.current.value);
            sessionStorage.setItem('senha', token);
            navigate('/home');
        } else {
            alert('Dados inválidos.');
        }
    };

    return (
        <>
            <section className="login">
                <div className='card'>
                    <div className='container_img'>
                        <img src={logo} className='form-img' />
                    </div>
                    <h1 className='login-titulo'>Login</h1>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <img className='form-img' />
                        <div className="mb-3 input">
                            <label for="exampleFormControlInput1" className="form-label"><p className="form-label">Email de usuário:</p></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" required="required" ref={email} placeholder='exemple@gmail.com'></input>
                        </div>
                        <div className="mb-3 input">
                            <label for="exampleFormControlInput1" className="form-label"><p className="form-label">Senha de usuário:</p></label>
                            <input type="password" className="form-control" id="exampleFormControlInput1" required="required" ref={senha} placeholder='senha'></input>
                        </div>
                        <div className='buttonarea'>
                            <button className='btn login-button' type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login