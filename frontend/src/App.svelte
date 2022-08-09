<script>
	import { Router, Route } from "svelte-navigator";
	import Navigation from './components/Navigation.svelte'
	import ApiDocumentation from "./pages/ApiDocumentation.svelte";
	import Landing from "./pages/Landing.svelte";
	import Pricing from "./pages/Pricing.svelte";
	import QuickStart from "./pages/QuickStart.svelte";
</script>

<Router>
	<div></div>
	<Navigation />
	
	<Route path="/">
		<Landing/>
	</Route>

	<main>
	
		<Route path="api">
			<ApiDocumentation />
		</Route>
	
		<Route path="pricing">
			<Pricing />
		</Route>

		<Route path="quickstart">
			<QuickStart />
		</Route>
	</main>
</Router>

<style lang="scss" global>
	@import "./main.scss";

	div {

	}

	main {
		width: 100%;
		max-width: $component-max-width-type-1;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		
	}
</style>