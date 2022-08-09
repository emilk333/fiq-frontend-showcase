
<script>
    export let linkCard
</script>

<article>
    <a href={linkCard.href}>
        <div class="fiq-linkcard__icon-container">
            {@html linkCard.icon}
        </div>
        <div class="fiq-linkcard__text-container">
            <h3 class="typeface-h3">{linkCard.title}</h3>
            <p class="typeface-p-small">{linkCard.description}</p>
        </div>
    </a>
</article>


<style lang="scss">
	@import '../scss/variables';
    @import '../scss/typography';

    .fiq-linkcard {
        &__icon-container {
            width: 6rem;
            height: 6rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 6px;
            border: 2px solid $dark-grey-2;
            padding: 1rem;
        }

        &__text-container {
            padding-left: 2rem;
        }
    }

    article {
        background-color: $dark-grey-1;
        border-radius: 6px;
    }
    
    a {
        padding: 2rem;
        display: flex;
        align-items: center;
    }

</style>

