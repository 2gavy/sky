import * as Actions from './actionTypes/collab.js';

export function CollabGetCloud(result) {
    var cloud = result.map(data => {

        var bubbleString = data.terms.toString();
        var bubbleArray = bubbleString.split(',');
        var concatString = "";

        for (var i = 0; i < bubbleArray.length; i++) {
            concatString += bubbleArray[i] + "<br/>";
        }

        let bubble = { _id: data.label, colorValue: 0.5, displayText: data.terms[0] + ',' + data.terms[1], terms: data.terms, tooltips: concatString, label: data.label, value: data.weight };
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