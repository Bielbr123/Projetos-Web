const express = require('express')
const app = express()
const UserRepository = require('../model/userRepository')
require('dotenv').config()

const port = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const userRepo = new UserRepository()

app.get('/', (req, res) => {
    res.send('Servidor Express Rolando')
})

app.get('/users', (req, res) => {
    const users = userRepo.list() 
    res.status(200).json(users)
})

app.get('/users/:id', (req, res) => {
    const userId = Number(req.params.id)
    const user = userRepo.find(userId)
    if (!user){
        return res.status(404).json({ error: 'Usuário não encontrado!'})
    }else{
        res.status(200).json(user)}})

app.put('/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const { name, age, email } = req.body;
    
    // Validação: pelo menos um campo
    if (name === undefined && age === undefined && email === undefined) {
        return res.status(400).json({ 
            error: 'Pelo menos um campo (name, age, email) deve ser fornecido' 
        });
    }
    
    // Validação: se name existe, não está vazio
    if (name !== undefined && name.trim() === '') {
        return res.status(400).json({ 
            error: 'O campo "name" não pode estar vazio' 
        });
    }
    
    // Validação: se email existe, não está vazio
    if (email !== undefined && email.trim() === '') {
        return res.status(400).json({ 
            error: 'O campo "email" não pode estar vazio' 
        });
    }
    
    // Buscar usuário
    const user = userRepo.find(userId);
    if (!user) {
        return res.status(404).json({ 
            error: 'Usuário não encontrado' 
        });
    }
    
    // Atualizar
    const updatedUser = userRepo.update(userId, name, age, email);
    
    // Resposta com envelope "data"
    res.status(200).json({ data: updatedUser });
});

app.delete('/users/:id', (req, res) => {
    const userId = Number(req.params.id)
    const user = userRepo.find(userId)
    if (!user){
        return res.status(404).json({ error: 'Usuário não encontrado!'})
    }else{
        userRepo.delete(userId)
        return res.status(204).send()}
})

app.post('/users', (req, res) => {
    const { name, age, email } = req.body;
    
    // Validações
    if (!name || name.trim() === '') {
        return res.status(400).json({ 
            error: 'O campo "name" é obrigatório e não pode estar vazio' 
        });
    }
    
    if (!email || email.trim() === '') {
        return res.status(400).json({ 
            error: 'O campo "email" é obrigatório e não pode estar vazio' 
        });
    }
    
    // Criação
    const newUser = userRepo.create(name, age, email);
    
    // Resposta com envelope "data"
    res.status(201).json({ data: newUser });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})