<script lang="ts">
	import "$stylesheets/grid_layers.css"
	import "$stylesheets/mask_border_layers.css"
</script>

<button class="grid_layers">
	<div class="mask_border_layers">
		<div class="background mask_border_layers_fallback"></div>
		<div class="border"></div>
		<div class="filter"><div class="border"></div></div>
	</div>
	<span>wow such button</span>
</button>

<style>
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
			background-image: conic-gradient(from var(--hue_rotation, 0turn), PapayaWhip, RebeccaPurple, PapayaWhip);
			@supports (font: -apple-system-body) {
				/* DEBT this turns off animation in webkit(safari) browsers as it the texture breaks when it is masked using mask-image (-webkit-mask-box-image), turning it off for all textures instead of only turning it off for each specific case where mask-image is used to keep texture consistent */
				animation: none;
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
	button {
		font-size: 42px;
	}
	span {
		padding: 0.5em 1em;
	}
</style>
