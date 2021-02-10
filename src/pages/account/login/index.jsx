import React from 'react';
import {useFormik} from 'formik';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import {Container, Form, Button} from 'react-bootstrap';
import './index.css';
import accountService from '../../../services/accountService';

 const Login = () => {
    // const [email, setEmail] = useState('');
    // const [senha, setSenha] = useState('');


    const formik = useFormik({
        initialValues:{
            email: '',
            senha: ''
        },
        onSubmit : values => {
            alert(JSON.stringify(values));
            accountService
                .logar(values)
                .then(resultado => resultado.json())
                .then(resultado => {
                    console.log(JSON.stringify(resultado.data))
                })
                .catch(erro => {
                    console.error('API ERROR' + erro);
                })
        }


    });

    return (
        <div>
            <Header />
            <Container className='form-height'>
                <Form className='form-signin' onSubmit={formik.handleSubmit} >
                    <h1>Login</h1>
                    <small>Informe os dados abaixo</small>
                        
                    <hr/>
                    <Form.Group>
                        <Form.Label>Email </Form.Label>
                        <Form.Control
                         type="email"
                         name="email"
                         placeholder="Informe o email" 
                         value={formik.values.email} 
                         onChange={formik.handleChange}
                         required/>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Senha</Form.Label>
                        <Form.Control 
                        type="password"
                        name="senha"
                        placeholder="Informe a senha"
                        onChange={formik.handleChange} 
                        required/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    <br/><br/>
                    <a href='/conta/resetar-senha' style={{ marginTop :'30px'}}>Esqueci a senha!</a>
                </Form>
                
            </Container>
            <Footer />
        </div>
    )

}

export default Login;