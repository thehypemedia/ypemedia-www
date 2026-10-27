import { llms } from "@/lib/ai";

export const dynamic = "force-static";

export function GET() {
  return new Response(llms(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
