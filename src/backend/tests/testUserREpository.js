module.exports = class UserRepository {
    constructor() {
        this.users = [];
        this.id = 1;
    }

    create(name, age, email) {
        const newUser = {
            id: this.id,
            name: name,
            age: age,
            email: email
        };
        this.users.push(newUser);
        this.id += 1;
        return newUser;
    }

    list() {
        return this.users;
    }

    find(id) {
        return this.users.find(user => user.id === id) || null;
    }

    update(id, name, age, email) {
        // Encontra o índice do usuário no array
        const index = this.users.findIndex(user => user.id === id);
        
        // Se não encontrar, retorna null
        if (index === -1) {
            return null;
        }

        // Atualiza apenas os campos que foram enviados
        // (mantém os valores antigos se não forem fornecidos)
        const user = this.users[index];
        if (name !== undefined) user.name = name;
        if (age !== undefined) user.age = age;
        if (email !== undefined) user.email = email;

        // Retorna o usuário atualizado
        return user;
    }

    delete(id) {
        // Encontra o índice do usuário no array
        const index = this.users.findIndex(user => user.id === id);
        
        // Se não encontrar, retorna false
        if (index === -1) {
            return false;
        }

        // Remove o usuário do array
        this.users.splice(index, 1);
        return true;
    }
};