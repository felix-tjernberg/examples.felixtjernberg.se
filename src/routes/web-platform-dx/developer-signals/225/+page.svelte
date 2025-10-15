<script lang="ts">
	import "$stylesheets/children_lobotomized_owl_margin_top.css"
	import "$stylesheets/grid_layers.css"
	import "$stylesheets/mask_border_layers.css"
</script>

<main>
	<div class="container grid_layers">
		<div class="mask_border_layers">
			<div class="background mask_border_layers_fallback"></div>
			<div class="border"></div>
			<div class="filter"><div class="border"></div></div>
		</div>
		<div class="children_lobotomized_owl_margin_top">
			<h1 class="first_letter_transform_none">mask-border has the potential to reshape the web</h1>
			<p>
				You might ask, but what about
				<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/corner-shape">corner-shape</a>?
			</p>
			<p class="first_letter_transform_none">
				corner-shape is a good easy alternative for designers who does not have time to design arbitrary corner shapes
			</p>
			<p class="first_letter_transform_none">
				mask-border however gives designers the possibility to design arbitrary shaped corners, this can help with
				creating unique custom branding, which results in a more fun varied web
			</p>
			<p class="first_letter_transform_none">
				mask-border also gives the ability to texture background & border, which gives designers even more tools to
				create interesting branding
			</p>
			<a
				class="grid_layers"
				href="https://github.com/web-platform-dx/developer-signals/issues/225"
				style="text-decoration:none; width:fit-content">
				<div class="mask_border_layers">
					<div class="background mask_border_layers_fallback"></div>
					<div class="border"></div>
					<div class="filter"><div class="border"></div></div>
				</div>
				<span>vote for this feature</span>
			</a>
		</div>
	</div>
</main>

<style>
	main {
		display: grid;
		height: 100%;
	}

	.container {
		max-width: 50ch;
		margin: auto;
		& > .mask_border_layers {
			--mask_width: 2em;
		}
		& > .children_lobotomized_owl_margin_top {
			padding: 2em;
		}
	}

	@property --hue_rotation {
		syntax: "<angle>";
		initial-value: 0turn;
		inherits: false;
	}
	@keyframes hue_rotation_animation {
		from {
			--hue_rotation: 0turn;
		}
		to {
			--hue_rotation: 1turn;
		}
	}
	.mask_border_layers {
		& .background,
		& .border {
			animation: 20s hue_rotation_animation infinite linear;
			background-image: conic-gradient(from var(--hue_rotation, 0turn), PapayaWhip, rgb(233, 154, 194), PapayaWhip);
			@media (prefers-color-scheme: dark) {
				filter: invert(1);
			}
		}
		& .background {
			--mask_source: url("./mask_border_octagon_background.svg");
		}
		& .border {
			--mask_source: url("./mask_border_octagon_border.svg");
			animation-direction: reverse;
		}
		& .filter {
			filter: blur(3px);
		}
	}

	span {
		padding: 0.5em 1em;
	}
</style>
