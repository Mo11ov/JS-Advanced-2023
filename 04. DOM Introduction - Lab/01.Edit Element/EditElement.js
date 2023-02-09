function editElement(reference, match, replacer) {
    const result = reference.textContent.split(match).join(replacer);

    reference.textContent = result;
}