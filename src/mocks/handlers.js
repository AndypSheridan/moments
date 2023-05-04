import { rest } from "msw";

const baseURL = "https://drf-api-aps.herokuapp.com/";

export const handlers = [
    rest.get(`${basURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                pk: 2,
                username: "testuser1",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 2,
                profile_image:
                    "https://res.cloudinary.com/dzvaxeems/image/upload/v1/media/../default_profile_sigwcy",
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200))
    })
];
