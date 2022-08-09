
<script>
    import CodeArea from "../components/CodeArea.svelte";

    export let title
    export let anchorLink
    export let primaryText
    export let apiInfo
    export let additionalInfo

</script>

<article>
    <ul class="fiq-text-section__plans-tag">
        {#if additionalInfo}
            {#each additionalInfo.availableApiPlans as plans}
                <li>{plans}</li>
            {/each}
        {/if}
    </ul>
    <h1 id={anchorLink} class="typeface-h1">{title}</h1>
    <div class="fiq-text-section__block">
        {#if apiInfo}
            <CodeArea apiInfo={apiInfo} additionalInfo={additionalInfo} linkAsID={anchorLink}/>
        {/if}
        <p class="typeface-p-light">{@html primaryText}</p>
    </div>
</article>

<style lang="scss">
	@import '../scss/variables';
    @import '../scss/typography';

    .fiq-text-section {
        &__plans-tag {
            display: flex;

            & li {
                margin: 0 0.25rem;
                font-size: 1.2rem;
                background-color: #121E2A;
                color: #0A7EF2;
                border-radius: 12px;
                width: fit-content;
                padding: 0.25rem 1.25rem;
            }
        }
    }

    html { 
        font-size: 10px; 
        scroll-behavior: smooth;
    }

    h1 {
        margin-top: 0;
        margin-bottom: 0.5rem;
    }

    div {
       
    }
	
    article {
        max-width: 70rem;
        width: 100%;
        margin: 0 auto;
        padding-left: 3rem;
        margin-bottom: 6rem;
    }
	
</style>

