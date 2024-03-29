export const prerender = false;

export async function GET() {
    let number = Math.random();
    return new Response(
        JSON.stringify({
            number,
            message: `这是一个随机数：${number}`,
        }),
    );
}
