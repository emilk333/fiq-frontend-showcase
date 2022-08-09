


<script>
    import TextSection from "../components/TextSection.svelte";
    import AsideNav from "../components/AsideNav.svelte";

    const introductionAnchorId = "introduction" 
    const quickStartGuideAnchorId = "quick_start_guide"
    const ApiKeysAndAuthAnchorId = "api_keys_and_auth"

    const asideConfig = [
        {
            displayValue : "Introduction",
            href : introductionAnchorId
        },
        {
            displayValue : "Quick Start Guide",
            href : quickStartGuideAnchorId
        },
        {
            displayValue : "API Keys and Authentication",
            href : ApiKeysAndAuthAnchorId
        }
    ]

    const quickStartConfig = [
        {
            title : "Introduction",
            anchorLink : introductionAnchorId,
            primaryText : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet felis non sem ullamcorper posuere a et nibh. Vestibulum id cursus purus. Praesent quis ultrices purus, id ultrices lectus. Etiam a consequat neque. Nulla vel risus eu ipsum fermentum fermentum. Sed nibh tellus, tempus eu dapibus a, consequat a leo. Maecenas in arcu pulvinar, rhoncus massa id, faucibus diam. Quisque quis mattis nisi. Praesent dapibus faucibus diam, ut fermentum massa congue id. Nulla mi mi, bibendum sed vestibulum in, suscipit at magna. Nullam eu mattis purus. Sed blandit mollis nisl, eu sollicitudin leo lacinia at. Aliquam erat volutpat. Nam non varius diam, sit amet interdum nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet felis non sem ullamcorper posuere a et nibh. Vestibulum id cursus purus. Praesent quis ultrices purus, id ultrices lectus. Etiam a consequat neque. Nulla vel risus eu ipsum fermentum fermentum. Sed nibh tellus, tempus eu dapibus a, consequat a leo. Maecenas in arcu pulvinar, rhoncus massa id, faucibus diam. Quisque quis mattis nisi. Praesent dapibus faucibus diam, ut fermentum massa congue id. Nulla mi mi, bibendum sed vestibulum in, suscipit at magna. Nullam eu mattis purus. Sed blandit mollis nisl, eu sollicitudin leo lacinia at. Aliquam erat volutpat. Nam non varius diam, sit amet interdum nunc."
        },
        {
            title : "Quick Start Guide",
            anchorLink : quickStartGuideAnchorId,
            primaryText : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet felis non sem ullamcorper posuere a et nibh. Vestibulum id cursus purus. Praesent quis ultrices purus, id ultrices lectus. Etiam a consequat neque. Nulla vel risus eu ipsum fermentum fermentum. Sed nibh tellus, tempus eu dapibus a, consequat a leo. Maecenas in arcu pulvinar, rhoncus massa id, faucibus diam. Quisque quis mattis nisi. Praesent dapibus faucibus diam, ut fermentum massa congue id. Nulla mi mi, bibendum sed vestibulum in, suscipit at magna. Nullam eu mattis purus. Sed blandit mollis nisl, eu sollicitudin leo lacinia at. Aliquam erat volutpat. Nam non varius diam, sit amet interdum nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet felis non sem ullamcorper posuere a et nibh. Vestibulum id cursus purus. Praesent quis ultrices purus, id ultrices lectus. Etiam a consequat neque. Nulla vel risus eu ipsum fermentum fermentum. Sed nibh tellus, tempus eu dapibus a, consequat a leo. Maecenas in arcu pulvinar, rhoncus massa id, faucibus diam. Quisque quis mattis nisi. Praesent dapibus faucibus diam, ut fermentum massa congue id. Nulla mi mi, bibendum sed vestibulum in, suscipit at magna. Nullam eu mattis purus. Sed blandit mollis nisl, eu sollicitudin leo lacinia at. Aliquam erat volutpat. Nam non varius diam, sit amet interdum nunc."
        },
        {
            title : "API Keys and Authentication",
            anchorLink : ApiKeysAndAuthAnchorId,
            primaryText : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet felis non sem ullamcorper posuere a et nibh. Vestibulum id cursus purus. Praesent quis ultrices purus, id ultrices lectus. Etiam a consequat neque. Nulla vel risus eu ipsum fermentum fermentum. Sed nibh tellus, tempus eu dapibus a, consequat a leo. Maecenas in arcu pulvinar, rhoncus massa id, faucibus diam. Quisque quis mattis nisi. Praesent dapibus faucibus diam, ut fermentum massa congue id. Nulla mi mi, bibendum sed vestibulum in, suscipit at magna. Nullam eu mattis purus. Sed blandit mollis nisl, eu sollicitudin leo lacinia at. Aliquam erat volutpat. Nam non varius diam, sit amet interdum nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet felis non sem ullamcorper posuere a et nibh. Vestibulum id cursus purus. Praesent quis ultrices purus, id ultrices lectus. Etiam a consequat neque. Nulla vel risus eu ipsum fermentum fermentum. Sed nibh tellus, tempus eu dapibus a, consequat a leo. Maecenas in arcu pulvinar, rhoncus massa id, faucibus diam. Quisque quis mattis nisi. Praesent dapibus faucibus diam, ut fermentum massa congue id. Nulla mi mi, bibendum sed vestibulum in, suscipit at magna. Nullam eu mattis purus. Sed blandit mollis nisl, eu sollicitudin leo lacinia at. Aliquam erat volutpat. Nam non varius diam, sit amet interdum nunc."
        }
    ]

</script>

<section>

    <AsideNav asideConfig={asideConfig}/>
    <div>
        {#each quickStartConfig as quickStartArea}
            <TextSection 
                title={quickStartArea.title} 
                anchorLink={quickStartArea.anchorLink} 
                primaryText={quickStartArea.primaryText}
            />
        {/each}
    </div>

</section>

<style lang="scss">
	@import '../scss/variables';
    @import '../scss/typography';
	@import '../scss/normalize';
    

    section {
        padding: 10rem 0;
        display: flex;
        max-width: 100rem;
        margin: 0 auto;
    }
</style>