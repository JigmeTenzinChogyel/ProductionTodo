const graphql = require("graphql");
const { users } = require("../../models")
const { GraphQLID, GraphQLString } = graphql;

const deleteUser = {
    type: GraphQLString,
    args: {
        id: { type: GraphQLID},
    },
    async resolve (parent, args) {
        try {
            const userToDelete = await users.findByPk(args.id);
            if(!userToDelete) throw new Error(`User id not found`);
            if (userToDelete.todos && userToDelete.todos.length > 0) {
                await Promise.all(userToDelete.todos.map(todo => todo.update({ user_id: null })));
            }
            await userToDelete.destroy();
            return { message: 'User deleted successfully'}
        } catch (err) {
            throw new Error(`Error deleting user: ${err}`)
        }
        
    }
}

module.exports = deleteUser;