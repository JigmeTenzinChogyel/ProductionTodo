const graphql = require("graphql");
const { GraphQLID } = graphql;
const TodoType = require("../types/todoType.js");
const { todos, users } = require("../../models");
const { combineResolvers } = require('graphql-resolvers');
const isAuthenticated = require("../../helpers/authCombineResolvers.js");

const deleteTodo = {
    type: TodoType,
    args: {
        id: { type: GraphQLID }, // Assuming ID is passed to identify the todo
    },
    resolve: combineResolvers(isAuthenticated, async (parent, args) => {
        try {
            // Find the todo by ID
            const todoToDelete = await todos.findByPk(args.id);

            if (!todoToDelete) {
                throw new Error(`Todo with ID ${args.id} not found`);
            }

            // Delete the todo
            await todoToDelete.destroy();

            return { message: 'Todo deleted successfully' };
            
        } catch (err) {
            throw new Error(`Failed to delete todo: ${err.message}`);
        }
    }),
};

module.exports = deleteTodo;
