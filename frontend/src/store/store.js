import { writable } from 'svelte/store';
import apiListConfigRaw from '../configData/apiListConfig'

export const exampleData = writable(null)

function apiListConfigStore() {
    const { set, subscribe, update } = writable(apiListConfigRaw)
    let state 

    return {
        subscribe,

        // Set a new selected Api response
        setNewSelectedApiResponse : (selectedApi, responseSignature) => {
            update(currentState => {
                const api = currentState.find(api => api.anchorLink === selectedApi)
                api.apiInfo.forEach(responseType => responseType.selected = false)
                const responseType = api.apiInfo.find(response => response.responseSignature === responseSignature)
                responseType.selected = true
                return currentState
            })
        }
    }
}

export const apiListConfig = apiListConfigStore()