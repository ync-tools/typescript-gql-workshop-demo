import { Gql } from "./graphql-zeus"

const result = Gql.query({
    user: [
        {
          where: {
            username: { _eq: "person " },
          },
        },
        {
        // id: true,
        //   username: true,
        //   user_todos: [
        //     {},
        //     {
        //       todo: {
        //         id: true,
        //         description: true,
        //         is_completed: true,
        //       },
        //     },
        //   ],
        id: true,
        username: true,
        user_todos: [
            {},
            {
                todo:{
                    id: true,
                }
            }
        ]
        },
      ],
})