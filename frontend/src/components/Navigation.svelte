
<script>
	import { Link } from "svelte-navigator";

</script>

<header class="fiq-header__navigation">

	<Link to="/">
		<div class="fiq-header__navigation-left-section">
			<div class="fiq-header__logo">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 765.089 765.089">
					<defs>
					  <linearGradient id="linear-gradient" x1="0.06" y1="0.06" x2="1" y2="1" gradientUnits="objectBoundingBox">
						<stop offset="0" stop-color="#414547"/>
						<stop offset="1" stop-color="#131919"/>
					  </linearGradient>
					  <linearGradient id="linear-gradient-2" x1="0.06" y1="0.06" x2="1" y2="1" gradientUnits="objectBoundingBox">
						<stop offset="0" stop-color="#262a2a"/>
						<stop offset="1" stop-color="#131919"/>
					  </linearGradient>
					</defs>
					<g id="Group_5" data-name="Group 5" transform="translate(382.545 765.089) rotate(-135)">
					  <circle id="Ellipse_1" data-name="Ellipse 1" cx="270.5" cy="270.5" r="270.5" transform="translate(0 0)" fill="#262a2a"/>
					  <rect id="Rectangle_22" data-name="Rectangle 22" width="373" height="373" rx="107" transform="translate(168 168)" fill="url(#linear-gradient)"/>
					  <rect id="Rectangle_23" data-name="Rectangle 23" width="249.211" height="249.211" rx="107" transform="translate(291.789 291.789)" fill="url(#linear-gradient-2)"/>
					</g>
				  </svg> 
			</div>
			<p>Fight _ iq</p>
		</div>
	</Link>

	<nav>
		<Link to="api">
			<span class="fiq-header__nav-item typeface-a">API</span>
		</Link>
		<Link to="pricing">
			<span class="fiq-header__nav-item typeface-a">Pricing</span>
		</Link>
		<Link to="quickstart">
			<span class="fiq-header__nav-item typeface-a">Quick start</span>
		</Link>
	</nav>

</header>


<style lang="scss">
	@import '../scss/variables';
    @import '../scss/typography';
	
	.fiq-header {
		
		&__logo {
			width: 3.5rem;
			height: auto;
		}

		&__nav-item {
			margin: 0 1.5rem;
			color: $text-primary;
		}

		&__navigation {
			background-color: $primary-background;
			position: sticky;
			top: 0;
			align-self: flex-start;
			display: flex; 
			justify-content: space-between;
			align-items: center; 
			height: 7rem; 
			max-width: $component-max-width-type-1;
			margin: 0 auto;
			padding: 0 2rem;
		}

		&__navigation-left-section {
			display: flex;
			align-items: center;

			p {
				padding-bottom: 0.75rem;
				padding-left: 0.5rem;
				font-size: 1.2rem;
				font-weight: 500;
			}
		}
	}
	
</style>

