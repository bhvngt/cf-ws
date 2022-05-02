export async function onRequest() {
    const [client, server] = Object.values(new WebSocketPair());

    server.accept();
    server.send("Testing");
    server.addEventListener("message", (event) => {
        console.log(event.data)
    });

    return new Response(null, {
        status: 101,
        webSocket: client,
    });
}
