import { bot } from "./bot";
import type { RequestEvent } from "@sveltejs/kit";

export async function POST({ request }: RequestEvent) {
    try {
        bot.processUpdate(await request.json());
        return new Response("", { status: 200 });
    } catch (e) {
        console.error(e);
        return new Response("", { status: 500 });
    }
}