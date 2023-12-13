// import { useRecoilCallback } from "recoil";
// import { useUpsert } from "./useUpsert";
// import { useGetAllTodoForOneUserLazyQuery } from "../../../../graphql/types";

// export const useTodo = (user_id: string) => {
//   const { upsert } = useUpsert();

//   const [ getAllTodoForOneUserQuery ] = useGetAllTodoForOneUserLazyQuery({
//     variables: {
//       id: user_id,
//     },
//   });

//   const setTodo = useRecoilCallback(
//     () => async () => {
//       const { data, error } = await getAllTodoForOneUserQuery();
//       const res = data?.getAllTodoForOneUser;

//       if (error) {
//         throw new Error(`${error}`);
//       } else {
//         if (Array.isArray(res)) {
//           // Iterate through the array and upsert each contact
//           res.forEach((todo) => upsert({ ...todo }));
//         } else {
//           console.error("Unexpected data format:", data);
//         }
//       }
//     },
//     [upsert, getAllTodoForOneUserQuery, user_id]
//   );

//   return {
//     setTodo,
//   };
// };
