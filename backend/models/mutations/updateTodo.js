const graphql = require("graphql");
const { GraphQLString, GraphQLID, GraphQLBoolean } = graphql;
const TodoType = require("../types/todoType.js");
const { todos, users } = require("../../models");

const updateTodo = {
    type: TodoType,
    args: {
        id: { type: GraphQLID }, // ID of the todo to update
        description: { type: GraphQLString },
        completion: { type: GraphQLBoolean },
    },
    async resolve(parent, args) {
        try {
            // Find the todo by ID
            const existingTodo = await todos.findByPk(args.id);

            if (!existingTodo) {
                throw new Error(`Todo with ID ${args.id} not found`);
            }

            // Update the existing todo
            await existingTodo.update({
                description: args.description || existingTodo.description,
                completion: args.completion !== undefined ? args.completion : existingTodo.completion,
            });

            return existingTodo;
        } catch (err) {
            throw new Error(`Failed to update todo: ${err.message}`);
        }
    },
};

module.exports = updateTodo;
