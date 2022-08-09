
<script>
	import { Router, Route, Link } from "svelte-navigator";
    import LinkCard from "../components/LinkCard.svelte"

    const linkCardConfig = [
        {
            icon : "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-rocket' width='44' height='44' viewBox='0 0 24 24' stroke-width='1.5' stroke='#6F7070' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><path d='M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3' /><path d='M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3' /><circle cx='15' cy='9' r='1' /></svg>",
            title : "Quick Start Guide",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            href : "quickstart"
        },
        {
            icon : "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-file-code' width='44' height='44' viewBox='0 0 24 24' stroke-width='1.5' stroke='#6F7070' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><path d='M14 3v4a1 1 0 0 0 1 1h4' /><path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' /><path d='M10 13l-1 2l1 2' /><path d='M14 13l1 2l-1 2' /></svg>",
            title : "API Docs",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            href : "api"
        },
        {
            icon : "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-receipt-2' width='44' height='44' viewBox='0 0 24 24' stroke-width='1.5' stroke='#6F7070' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><path d='M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2' /><path d='M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5' /></svg>",
            title : "Find your plan",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            href : "pricing"
        }
    ]

</script>

<section>
    <div>
        <h1 class="typeface-h1 typeface-h1--regular"><span class="typeface-h1">Fight data</span> delivered right to your machine</h1>
        <p class="typeface-p-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et tincidunt felis. Suspendisse eleifend cursus augue. Curabitur id dictum mauris. Integer facilisis odio sit amet pulvinar cursus. 
            <a class="typeface-a" href="/">Sign up here</a>
        </p>
    </div>
    <div class="fiq-landing__card-grid">
        {#each linkCardConfig as linkCard}
            <LinkCard linkCard={linkCard}/>
        {/each}
    </div>
</section>

<style lang="scss">
	@import '../scss/variables';
    @import '../scss/typography';
	@import '../scss/button';

    .fiq-landing {
        &__card-grid {
            margin-top: 6rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            column-gap: 2rem;
            row-gap: 2rem;
        }
    }

    h1 {
        font-family: 'Poppins', sans-serif;
    }

    div {  
        h1 {
            margin: 0
        }

        p {
            max-width: 57rem;
        }
    }

    section {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex; 
        flex-direction: column;
        justify-content: center;
        max-width: $component-max-width-type-2;
        width: 100%;
        margin: 0 auto;
    }

</style>