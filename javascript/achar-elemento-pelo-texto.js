/**
  * @author  : themarcosdev
  * @example : findElementsTextContentLike(null, 'myText');
*/
function findElementsTextContentLike(element, searchedValue) {
    if (!element) {
        element = document;
    }
    const elementsFound = [];
    const elementsInside = element.getElementsByTagName('*');
    for (let i = 0; i < elementsInside.length; i++) {
        const elementSon = elementsInside[i];
        if (elementSon.textContent.includes(searchedValue)) {
          elementsFound.push(elementSon);
        }
    }
    let ret = [];
    elementsFound.forEach((elementEncontrado) => {
        ret.push(elementEncontrado);
    });
    return ret;
}
