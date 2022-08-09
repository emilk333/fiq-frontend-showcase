
<script>
	
    const priceCardConfig = [
        {
            title : "Free",
            apiCalls : "100 calls pr. month",
            price : "Free",
            period : ""
        },
        {
            tag : "Recommended",
            title : "Hobby",
            apiCalls : "9000 calls pr. month",
            price : "$9",
            period : "pr. month"
        },
        {
            title : "Pro",
            apiCalls : "Whatever you can imagine",
            price : "$X",
            period : "pr. month"
        }
    ]

    let currentSelectedPricing = 1

    const selectPricingCard = (currentClickedcard) => {
        const inputElement = currentClickedcard.querySelector('input')
        if (inputElement) {
            currentSelectedPricing = inputElement.value 
            inputElement.checked = true
        }
    }
        
</script>

<section>

    <h1 class="typeface-h1 typeface-h1--regular"><span class="typeface-h1">Plans</span> for your needs</h1>

    <p class="typeface-p-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum purus rutrum molestie volutpat. Donec leo nisi, rhoncus at tempor nec, sagittis id lorem</p>

    <div class="fiq-pricing-card__container">
        {#each priceCardConfig as card}
            <article on:click={(e) => selectPricingCard(e.currentTarget)}>
                {#if card.tag} 
                    <div class="fiq-pricing-card__tag">{card.tag}</div>
                {/if}
                <label class="control control-radio">
                    <input type="radio" name="radio" group={currentSelectedPricing} value={card.title} />
                    <div class="control_indicator"></div>
                </label>
                <div class="fiq-pricing-card__middle-section">
                    <h2 class="typeface-h2">{card.title}</h2>
                    <p class="typeface-p-small">{card.apiCalls}</p>
                </div>
                <div class="fiq-pricing-card__end-section">
                    <h1 class="typeface-h1 typeface-h1--small">{card.price}</h1>
                    <p>{card.period}</p>
                </div>
                <!-- <a href={card.getStartedLink} class="fiq-pricing-card__cta-link">
                    <p>{card.getStartedDisplayValue}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="15" y1="16" x2="19" y2="12" />
                        <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                </a> -->
            </article>
        {/each}
    </div>

    <button class="fiq-button">Sign up</button>
    
</section>


<style lang="scss">
	@import '../scss/variables';
    @import '../scss/typography';
	@import '../scss/button';

    section {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: $component-max-width-type-1;
        width: 100%;
        margin: 0 auto;

        p {
            max-width: 50%;
            text-align: center;
            margin-bottom: 10rem;
        }
    }

    button {
        margin-top: 4rem;
    }

    h1 {
        margin-bottom: 0;
    }

    .fiq-pricing-card {
        &__container {
            display: flex;
            width: 100%;
            justify-content: center;
        }

        &__middle-section {
            display: flex;
            flex-direction: column;
            padding-left: 1rem;

            p {
                margin: 0.25rem 0 0 0;
                text-align: left;
                min-width: 18rem;
            }
        }

        &__end-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: auto;
            padding-right: 0.5rem;
            
            p {
                margin: -0.5rem 0 0 0;
            }
        }

        &__tag {
            position: absolute;
            top: -1.2rem;
            left: 3rem;
            background-color: $deep-purple;
            border-radius: 2.5rem;
            padding: 0.5rem 1.5rem;
            font-size: 1.2rem;
            font-weight: 500;
            color: $deep-purple-variation-2
        }
    }   

    article {
        cursor: pointer;
        min-height: 12rem;
        align-items: center;
        display: flex;
        width: 100%;
        max-width: 35rem;
        min-width: 30rem;
        position: relative;
        padding: 2rem;
        border-radius: 0.6rem;
        margin: 1.5rem;
        background-color: $dark-grey-1;
    }


    .control {
        font-family: arial;
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 5px;
        padding-top: 3px;
        font-size: 16px;
    }

    .control input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .control_indicator {
        cursor: pointer;
        position: absolute;
        top: -5px;
        left: 5px;
        height: 18px;
        width: 18px;
        background: $dark-grey-5;
        border: 0px solid #000000;
    }

    .control:hover input ~ .control_indicator,
    .control input:focus ~ .control_indicator {
        background: $dark-grey-6;
    }

    .control input:checked ~ .control_indicator {
        background: $deep-purple;
    }

    .control:hover input:not([disabled]):checked ~ .control_indicator,
    .control input:checked:focus ~ .control_indicator {
        background: $deep-purple-variation-1;
    }

    .control input:disabled ~ .control_indicator {
        background: #e6e6e6;
        opacity: 0.6;
        pointer-events: none;
    }

    .control_indicator:after {
        box-sizing: unset;
        content: '';
        position: absolute;
        display: none;
    }

    .control input:checked ~ .control_indicator:after {
        display: block;
    }

    .control-radio .control_indicator {
        border-radius: 50%;
    }

    .control-radio .control_indicator:after {
        left: 3px;
        top: 3px;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: #ffffff;
        transition: background 250ms;
    }

    .control-radio input:disabled ~ .control_indicator:after {
        background: #7b7b7b;

    }.control-radio .control_indicator::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 3.5rem;
        height: 3.5rem;
        margin-left: -0.9rem;
        margin-top: -0.9rem;
        background: $deep-purple-variation-2;
        border-radius: 3rem;
        opacity: 0.6;
        z-index: 99999;
        transform: scale(0);
    }

    @keyframes s-ripple {
        0% {
            opacity: 0;
            transform: scale(0);
        }
        20% {
            transform: scale(1);
        }
        100% {
            opacity: 0.01;
            transform: scale(1);
        }
    }

    @keyframes s-ripple-dup {
    0% {
        transform: scale(0);
        }
    30% {
            transform: scale(1);
        }
        60% {
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(1);
        }
    }

    .control-radio input + .control_indicator::before {
        animation: s-ripple 250ms ease-out;
    }

    .control-radio input:checked + .control_indicator::before {
        animation-name: s-ripple-dup;
    }
</style>