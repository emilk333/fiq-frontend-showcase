
<script>
    export let asideConfig
</script>

<aside>
    <ul>
        {#each asideConfig as asideElement}
            <li>
                <a href={`#${asideElement.href}`} class="typeface-p">{asideElement.displayValue}</a>
            </li>
        {/each}
    </ul>
</aside>

<style lang="scss">
	@import '../scss/variables';
    @import '../scss/typography';

    html { 
	font-size: 10px; 
	scroll-behavior: smooth;
}
    
	
	aside {
        margin-left: -2rem;
		margin-right: 2rem;
        margin-top: 6.5rem;
        position: sticky;
        align-self: flex-start;
        top: 4rem;
	}   

    ul {
        padding-left: 0;
    }

    li {
        list-style-type: none;
        transition: background-color 0.15s ease-in-out;
        border-radius: 0.25rem;
        
        &:hover {
            background-color:$secondary-background;
        }
    }

    a {
        padding: 1.25rem 2rem;
        white-space: nowrap;
        font-size: 1.4rem;
        display: block;
    }
	
</style>

