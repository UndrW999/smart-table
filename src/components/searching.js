import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор

    const compare = createComparison(
        ['skipEmptyTargetValues'],
        [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)]
    )

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор

        if (!state.search || state.search.trim() === '') {
            return data;
        }

    const result = data.filter(row => {
        const match = compare(row, state);
        return match;
    });
    
    return result;

        return data.filter(row => compare(row, state));
    }
}