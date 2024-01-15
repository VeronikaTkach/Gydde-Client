export const staticTextHelper = {
  convertKeys: (keysArray) => {
    const convertedKeys = {};

    keysArray.forEach((item) => {
      for (const key in item) {
        const splitedKey = staticTextHelper.splitKey(key);

        if (splitedKey.status) {
          convertedKeys[splitedKey.status]
            ? null
            : (convertedKeys[splitedKey.status] = {});

          if (splitedKey.text) {
            convertedKeys[splitedKey.status][splitedKey.text]
              ? null
              : splitedKey.statusText
                ? (convertedKeys[splitedKey.status][splitedKey.text] = {})
                : (convertedKeys[splitedKey.status][splitedKey.text] = item[key]);

            if (splitedKey.statusText) {
              convertedKeys[splitedKey.status][splitedKey.text][splitedKey.statusText]
                ? null
                : (convertedKeys[splitedKey.status][splitedKey.text][
                    splitedKey.statusText
                  ] = item[key]);
            }
          }
        } else {
          if (splitedKey.text) {
            convertedKeys[splitedKey.text]
              ? null
              : splitedKey.statusText
                ? (convertedKeys[splitedKey.text] = {})
                : (convertedKeys[splitedKey.text] = item[key]);

            if (splitedKey.statusText) {
              convertedKeys[splitedKey.text][splitedKey.statusText]
                ? null
                : (convertedKeys[splitedKey.text][splitedKey.statusText] = item[key]);
            }
          }
        }
      }
    });

    return convertedKeys;
  },

  splitKey: (key) => {
    const regex = /([^_]+)/g;
    const firstElem = 0;
    const secondElem = 1;
    const splitedKeys = {};

    const firstPart = key.split('.')[firstElem].match(regex);
    if (firstPart.length > secondElem) {
      splitedKeys.status = firstPart[secondElem];
    }
    const secondPart = key.split('.')[secondElem].match(regex);
    if (secondPart.length > secondElem) {
      splitedKeys.statusText = secondPart[secondElem];
    }
    splitedKeys.text = secondPart[firstElem];

    return splitedKeys;
  },

  //add flag isHighlighted
  setHighlightedText: (textObj, firstHighlightedPart) => {
    const remove = 1;
    const removeLength = -'HighlightedPart'.length - remove;
    const firstElem = 0;
    const newTextObj = {};
    const highLightedText = [];
    let isHighlighted;

    for (const key in textObj) {
      const index = key.indexOf('Highlighted');
      if (index > firstElem) {
        const keyName = key.slice(firstElem, removeLength);
        newTextObj[keyName] ? null : (newTextObj[keyName] = []);
        highLightedText.push(key);
      } else {
        newTextObj[key] = textObj[key];
      }
    }

    highLightedText.sort();
    highLightedText.forEach((item, index) => {
      if (index === firstHighlightedPart) {
        isHighlighted = true;
      } else if (isHighlighted === undefined) {
        isHighlighted = false;
      } else {
        isHighlighted = isHighlighted ? false : true;
      }

      newTextObj[item.slice(firstElem, removeLength)].push({
        part: textObj[item],
        isHighlighted: isHighlighted,
      });
    });

    return newTextObj;
  },
};
