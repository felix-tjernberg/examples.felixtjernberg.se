import type { PageLoad } from "./$types"
import { redirect } from "@sveltejs/kit"

export const load = (async () => {
	throw redirect(303, "/") // NOTE not giving user any feedback that the page was not found, but does not matter for this project
}) satisfies PageLoad
