import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

const LoginModal = () => {
    const [open, setOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [users, setUsers] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleUsersChange = (e) => {
        setUsers(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const startSession = () => {
        if (users.trim() !== '' && password.trim() !== '') {
            navigate('/Menu');
            closeModal();
        } else {
            alert('Por favor, completa todos los campos antes de iniciar sesión.');
        }
    };

    return (
        <>
            <div className='principal'>
                <div className='col-md-1 mx-auto text-center'>
                    <Button style={{ backgroundColor: '#22577E', color: 'white', margin: 30, padding: 15, marginBottom: 30}} size="lg" onClick={openModal}>ACCESS</Button>{' '}
                </div>
            </div>

            <Modal isOpen={open} toggle={closeModal}>
                <ModalHeader>
                    Iniciar Sesión
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="usuario"> Usuario </Label>
                        <Input type="text" id="usuario" value={users} onChange={handleUsersChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password"> Contraseña </Label>
                        <Input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={handlePasswordChange} />
                    </FormGroup>
                    <Button color="info" onClick={toggleShowPassword}>
                        Check
                    </Button>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={startSession}>Iniciar Sesión</Button>
                    <Button color="secondary" onClick={closeModal}>Cerrar</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default LoginModal;