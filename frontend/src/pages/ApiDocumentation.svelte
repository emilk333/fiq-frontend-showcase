
<script>
    import { onMount } from 'svelte'
    import AsideNav from "../components/AsideNav.svelte";
    import TextSection from "../components/TextSection.svelte";
    import { apiListConfig } from '../store/store'

    $: apiDocsAsideConfig = [] 

    onMount(async () => {
		apiDocsAsideConfig = $apiListConfig.map(apiListItem => {
            return {
                displayValue : apiListItem.title,
                href : apiListItem.anchorLink
            }
        })
	});

</script>

<section>
    <AsideNav asideConfig={apiDocsAsideConfig}/>
    <div>
        {#each $apiListConfig as apiListItem}
            <TextSection 
                apiInfo={apiListItem.apiInfo}
                title={apiListItem.title} 
                anchorLink={apiListItem.anchorLink} 
                primaryText={apiListItem.primaryText}
                additionalInfo={apiListItem.additionalInfo}
            />
        {/each}
    </div>
</section>

<style>
    section {
        padding: 10rem 0;
        display: flex;
        max-width: 100rem;
        margin: 0 auto;
    }
</style>

