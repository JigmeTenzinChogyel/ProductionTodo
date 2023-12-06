const graphql = require("graphql");
const { GraphQLString, GraphQLID } = graphql;
const TodoType = require("../types/todoType.js");
const { todos, users } = require("../../models");

const createTodo = {
    type: TodoType,
    args: {
        description: { type: GraphQLString },
        user_id: { type: GraphQLID }, // Assuming user_id is passed along with description
    },
    async resolve(parent, args) {
        try {
            // Find the user by user_id
            const user = await users.findByPk(args.user_id);

            if (!user) {
                throw new Error("User not found");
            }
            
            // Create a new todo with the provided description and associate it with the user
            const newTodo = await todos.create({
                description: args.description,
                completion: false, // Assuming completion is false by default
                userId: args.user_id,
                user_id: args.user_id,
            });

            // Associate the todo with the user
            await user.addTodo(newTodo);

            return newTodo;
        } catch (err) {
            throw new Error(`Failed to create todo: ${err.message}`);
        }
    },
};

module.exports = createTodo;
