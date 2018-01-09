import * as Actions from './actionTypes/collab.js';

export function CollabGetCloud(result) {
    var cloud = result.map(data => {
        let bubble = { _id: data.label, colorValue: Math.random(), displayText: data.label, terms: data.terms, label: data.label, value: data.weight };
        return bubble;
    });

    console.log("the payloadCollab is: " + cloud);

    return {
        type: Actions.COLLAB_GET_CLOUD,
        payload: cloud
    };
}

export function CollabGetDocList(result) {
    return {
        type: Actions.COLLAB_GET_DOCLIST,
        payload: result
    };
}

export function CollabGetTrendData(result) {
    return {
        type: Actions.COLAB_GET_TRENDDATA,
        payload: result
    };
}