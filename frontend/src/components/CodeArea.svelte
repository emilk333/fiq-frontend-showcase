
<script>
    import { apiListConfig } from './../store/store.js';
    import copyToClipboard from '../foundation/copyToClipboard'

    export let linkAsID
    export let codeToRender = "";
    export let apiInfo
    export let additionalInfo

    let codeLinesTotal = 0
    let selectedApiResponseLocal;
    let selectedQueryParamExample;

    $: computedCurrentSelectedApi = $apiListConfig.find(api => api.anchorLink === linkAsID).apiInfo.find(response => response.selected)

    const fetchApiExampleData = async (endpoint) => { 
        codeLinesTotal = 0
        let url = endpoint   

        if (computedCurrentSelectedApi.queryParams.length) {
            const urlReplaceString = "[queryParam]"
            url = url.replace(urlReplaceString, selectedQueryParamExample)
        }

        let response = await fetch(url)
        let json = await response.json()
        codeToRender = JSON.stringify(json, null, 2)
        return json
    }

    const setNewSelectedApiResponse = () => {
        codeToRender = ""
        codeLinesTotal = 0
        apiListConfig.setNewSelectedApiResponse(linkAsID, selectedApiResponseLocal)
    }

    const updateCodeLineAmount = () => { 
        let codeContainer = document.getElementById("code_container")
        const pixelPrLine = 16
        if (codeContainer) {
            codeLinesTotal = Math.floor(codeContainer.getClientRects()[0].height / pixelPrLine)        
        }
    }
</script>


<article>

    <ul class="fiq-code__request-tag">
        {#each additionalInfo.requestTypes as requestType}
            <li>{requestType} <span></span>{computedCurrentSelectedApi.endpoint}</li>
        {/each}
    </ul>

    <select class="fiq-select" bind:value={selectedApiResponseLocal} on:change="{() => setNewSelectedApiResponse()}">
        {#each apiInfo as apiResponse}
            <option value={apiResponse.responseSignature}>
                {apiResponse.responseSignature} {apiResponse.type}
            </option>
        {/each}
    </select> 
    
    <button class="fiq-button fiq-button--primary" on:click={fetchApiExampleData(computedCurrentSelectedApi.endpoint).then(() => updateCodeLineAmount())}>Try API</button>
    
    {#if computedCurrentSelectedApi.queryParamsExamples?.length}
        <select class="fiq-select" bind:value={selectedQueryParamExample}>
            {#each computedCurrentSelectedApi.queryParamsExamples as idExample}
                <option value={idExample}>{idExample}</option>
            {/each}
        </select> 
    {/if}

    {#if computedCurrentSelectedApi.queryParams.length}
        <div class="fiq-code__queryparams">
            <h3>Query Parameters</h3>
            <ul>
                {#each computedCurrentSelectedApi.queryParams as queryParam}
                    <li class="fiq-code__queryparams-wrapper">
                        <section class="fiq-code__queryparams-top-section">
                            <span class="fiq-code__font-highlight">{queryParam.key}</span>
                        </section>
                        <section class="fiq-code__queryparams-bottom-section">
                            <div>
                                <div>
                                    <span>{Object.keys(queryParam)[2]}</span>
                                    <span class="fiq-code__font-highlight"> {queryParam.type}</span>
                                </div>
                                <span class="fiq-code__font-highlight fiq-code__font-highlight--required">
                                    {queryParam.required ? "required" : ""}
                                </span>
                            </div>
                            <span>{queryParam.description}</span>   
                        </section>
                    </li>
                {/each}
            </ul>
        </div>
    {/if}

    {#await fetchApiExampleData}
        <p>...waiting</p>
    {:then data}
        {#if codeToRender}
            <div class="fiq-code-wrapper__heading">JSON</div>
            <span class="fiq-code-wrapper">
                <button class="fiq-button fiq-code-wrapper__copy-code" on:click={() => copyToClipboard(`${linkAsID}-id`)}>Copy code</button>
                <code class="fiq-code-lines">
                    {#each Array(codeLinesTotal) as _, index}
                        <span>{index}</span>
                    {/each}
                </code>
                <code id="{linkAsID}-id" class="fiq-code-content">
                    {codeToRender}
                </code>
            </span>
        {/if}
    {:catch error}
        <p>An error occurred!</p>
    {/await}

    <!-- <ul>
        IMPLEMENT RECURSIVELY SO WE HAVE A TABLE KIND OF THING WHICH EXPANDS 
        {#each computedCurrentSelectedApi.responseSchema.data as data}
            <li>
                <span>{Object.keys(data)[0]}</span>
                <span>{data.key}</span>
            </li>
            <li>
                <span>{Object.keys(data)[1]}</span>
                <span>{data.description}</span>
            </li>
        {/each}
    </ul> -->
</article>


<style lang="scss">
    @import '../scss/variables';

    .fiq-code {

        &__request-tag {
            background-color: $dark-grey-5;
            color: $dark-grey-3;
            padding: 0 1rem;
            font-weight: 500;
            border-radius: 6px;
            width: fit-content;
            font-size: 1.2rem;

            li {
                display: flex;
                align-items: center;
            }

            span {
                height: 27px;
                width: 1px;
                background-color: $dark-grey-6;
                position: relative;
                display: block;
                margin: 0 1rem;
            }
        }

        &__font-highlight {
            color: $white;
            font-weight: 500;
            padding-left: 0.4rem;

            &--required {
                color: $deep-red;
            }
        } 

        &__queryparams {
            margin: 2.5rem 0;
            padding: 0.1rem 1rem;
            border-radius: 6px;
            background-color: $dark-grey-1;

            h3 {
                padding-left: 1rem;
                font-size: 1.4rem;
                font-weight: 500;
                margin: 1rem 0;
            }
        }

        &__queryparams-wrapper {
            font-size: 1.3rem;
            padding: 1.25rem;
            background-color: $dark-grey-2;
            border-radius: 6px;
            margin: 1rem 0;
            border-left: 2px solid $deep-purple;
            display: flex;
        }

        &__queryparams-top-section {
            display: flex;

            span:first-child {
                width: fit-content;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.8rem;
                padding: 0 3rem 0 2rem;
                min-width: 12rem;
            }

            & div {
                padding: 0 6rem 1rem 0;
            }
        }

        &__queryparams-bottom-section {
            div:first-child {
                display: flex;
                padding-bottom: 0.25rem;
                & div {
                    margin-right: 5rem;
                }
            }
        }
    }

    .fiq-code-wrapper {
        background: $dark-grey-1;
        border-radius: 0 0 6px 6px;
        display: flex;
        line-height: 1.42857;
        overflow-x: auto; 
        white-space: pre;
        position: relative;

        &__copy-code {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
        }

        &__heading {
            background-color: $dark-grey-2;
            padding: 0.8rem 1.2rem;
            display: flex;
            justify-content: end;
            border-radius: 6px 6px 0 0;
            color: $dark-grey-3;
            font-weight: bold;
        }
    }

    .fiq-code-lines {
        line-height: 1.66667;
        padding: 8px 10px 8px 8px;
        float: left;
        display: flex;
        flex-direction: column; 
    }

    .fiq-code-content { 
        line-height: 1.66667; 
        padding: 8px;
        color: $turquoise-lime-green;
    }

</style>

