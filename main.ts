// deno serve
Deno.serve((req: Request) => {
    const { url, method } = req;
    const new_url = new URL(url);

    if (new_url.pathname === "/" && method === "GET") {
        return new Response("<h1>Welcome to the home page</h1>", {
            status: 200,
            headers: {
                "content-type": "text/html",
            },
        });
    }

    if (new_url.pathname === "/contact" && method === "GET") {
        return new Response("<h1>Welcome to the contact page<h1>", {
            status: 200,
            headers: {
                "content-type": "text/html",
            },
        });
    }

    return new Response("page not found", {
        status: 200,
        headers: {
            "content-type": "text/html",
        },
    });
});
